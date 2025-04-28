import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Category } from '../../utils/categoryTypes';

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
    <div className="relative category-dropdown group">
      <button
        className="px-4 py-2 rounded-md text-sm font-medium text-white hover:text-blue-200 transition-colors duration-200 flex items-center"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="relative">
          {category.name}
          <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? 'w-full' : 'group-hover:w-full'}`}></span>
        </span>
        {isOpen ? 
          <ChevronUp className="ml-1.5 h-4 w-4 text-blue-300" /> : 
          <ChevronDown className="ml-1.5 h-4 w-4 group-hover:text-blue-300 transition-colors duration-200" />
        }
      </button>
      
      {isOpen && (
        <div className="absolute z-20 left-0 mt-2 w-56 rounded-lg bg-white shadow-xl py-2 border border-gray-100 transform transition-opacity duration-200 ease-in-out opacity-100 scale-100 origin-top-left">
          {/* Triangle pointer */}
          <div className="absolute -top-2 left-4 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
          
          <div className="relative z-10 py-1">
            {category.subCategories.map((subCategory, index) => (
              <Link
                key={subCategory.name}
                to={subCategory.path}
                className={`block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-150
                  ${index !== 0 ? 'border-t border-gray-50' : ''}`}
                onClick={onToggle}
              >
                <span className="font-medium">{subCategory.name}</span>
              </Link>
            ))}
          </div>
          
          {/* Footer section */}
          {category.subCategories.length > 0 && (
            <div className="mt-1 pt-2 border-t border-gray-100 bg-gray-50 rounded-b-lg">
              <Link
                to={category.path}
                className="block px-5 py-2.5 text-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-150"
                onClick={onToggle}
              >
                Zobacz wszystkie w {category.name}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DesktopCategoryDropdown;