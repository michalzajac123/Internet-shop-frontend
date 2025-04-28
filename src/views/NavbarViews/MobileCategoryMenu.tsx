import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, User } from 'lucide-react';
export interface SubCategory {
  name: string;
  path: string;
}

export interface Category {
  name: string;
  path: string;
  subCategories: SubCategory[];
}
import AuthButtons from './AuthButtons';

interface MobileCategoryMenuProps {
  categories: Category[];
  openCategory: string | null;
  onToggleDropdown: (categoryName: string | null) => void;
  onClose: () => void;
}

const MobileCategoryMenu: React.FC<MobileCategoryMenuProps> = ({
  categories,
  openCategory,
  onToggleDropdown,
  onClose,
}) => {
  return (
    <div className="sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {categories.map((category) => (
          <div key={category.name}>
            <button
              className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              onClick={() => onToggleDropdown(category.name)}
            >
              <span>{category.name}</span>
              {openCategory === category.name ? 
                <ChevronUp className="h-4 w-4" /> : 
                <ChevronDown className="h-4 w-4" />
              }
            </button>
            {openCategory === category.name && (
              <div className="pl-6 space-y-1 mt-1">
                {category.subCategories.map((subCategory) => (
                  <Link
                    key={subCategory.name}
                    to={subCategory.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => {
                      onToggleDropdown(null);
                      onClose();
                    }}
                  >
                    {subCategory.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile auth buttons */}
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
          <User className="h-6 w-6 text-gray-400" />
          <div className="ml-3 font-medium">Konto</div>
        </div>
        <AuthButtons isMobile={true} onMobileClick={onClose} />
      </div>
    </div>
  );
};

export default MobileCategoryMenu;