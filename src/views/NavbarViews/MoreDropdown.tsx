import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
export interface SubCategory {
  name: string;
  path: string;
}

export interface Category {
  name: string;
  path: string;
  subCategories: SubCategory[];
}

interface MoreDropdownProps {
  categories: Category[];
  startIndex: number;
  openCategory: string | null;
  onToggleDropdown: (categoryName: string | null) => void;
}

const MoreDropdown: React.FC<MoreDropdownProps> = ({
  categories,
  startIndex,
  openCategory,
  onToggleDropdown,
}) => {
  return (
    <div className="relative category-dropdown">
      <button
        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
        onClick={() => onToggleDropdown("więcej")}
      >
        Więcej
        {openCategory === "więcej" ? 
          <ChevronUp className="ml-1 h-4 w-4" /> : 
          <ChevronDown className="ml-1 h-4 w-4" />
        }
      </button>
      {openCategory === "więcej" && (
        <div className="absolute z-10 left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1">
          {categories.slice(startIndex).map((moreCategory) => (
            <div key={moreCategory.name} className="relative group">
              <button 
                className="w-full text-left flex justify-between items-center px-4 py-2 text-sm hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleDropdown(`more-${moreCategory.name}`);
                }}
              >
                <span>{moreCategory.name}</span>
                {openCategory === `more-${moreCategory.name}` ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </button>
              {openCategory === `more-${moreCategory.name}` && (
                <div className="sm:absolute sm:left-full sm:top-0 sm:-ml-1 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 sm:block pl-4 sm:pl-0">
                  {moreCategory.subCategories.map((subCategory) => (
                    <Link
                      key={subCategory.name}
                      to={subCategory.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => onToggleDropdown(null)}
                    >
                      {subCategory.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoreDropdown;