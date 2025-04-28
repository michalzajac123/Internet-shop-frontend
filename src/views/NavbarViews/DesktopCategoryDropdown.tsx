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

interface DesktopCategoryDropdownProps {
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
}

const DesktopCategoryDropdown: React.FC<DesktopCategoryDropdownProps> = ({
  category,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="relative category-dropdown">
      <button
        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 flex items-center"
        onClick={onToggle}
      >
        {category.name}
        {isOpen ? 
          <ChevronUp className="ml-1 h-4 w-4" /> : 
          <ChevronDown className="ml-1 h-4 w-4" />
        }
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1">
          {category.subCategories.map((subCategory) => (
            <Link
              key={subCategory.name}
              to={subCategory.path}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={onToggle}
            >
              {subCategory.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopCategoryDropdown;