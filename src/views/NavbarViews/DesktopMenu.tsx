import React from 'react';
import { Category } from '../../utils/categoryTypes';
import DesktopCategoryDropdown from './DesktopCategoryDropdown';
import MoreDropdown from './MoreDropdown';

interface DesktopMenuProps {
  categories: Category[];
  visibleCategories: number;
  openCategory: string | null;
  onToggleDropdown: (categoryName: string | null) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  categories,
  visibleCategories,
  openCategory,
  onToggleDropdown,
}) => {
  return (
    <div className="hidden sm:flex sm:items-center sm:space-x-1 flex-1 ml-6">
      {categories.slice(0, visibleCategories).map((category) => (
        <DesktopCategoryDropdown
          key={category.name}
          category={category}
          isOpen={openCategory === category.name}
          onToggle={() => onToggleDropdown(category.name)}
        />
      ))}
      
      {/* More categories dropdown - shown only when needed */}
      {visibleCategories < categories.length && (
        <MoreDropdown
          categories={categories}
          startIndex={visibleCategories}
          openCategory={openCategory}
          onToggleDropdown={onToggleDropdown}
        />
      )}
    </div>
  );
};

export default DesktopMenu;