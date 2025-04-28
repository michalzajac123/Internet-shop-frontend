import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="flex sm:hidden">
      <button
        onClick={onToggle}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
      >
        {isOpen ? (
          <X className="block h-6 w-6" />
        ) : (
          <Menu className="block h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default MobileMenuButton;