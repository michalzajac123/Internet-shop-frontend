import React from 'react';
import { Link } from 'react-router-dom';

interface AuthButtonsProps {
  isMobile?: boolean;
  onMobileClick?: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ isMobile = false, onMobileClick }) => {
  if (isMobile) {
    return (
      <div className="mt-3 px-2 space-y-1">
        <Link
          to="/login"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          onClick={onMobileClick}
        >
          Logowanie
        </Link>
        <Link
          to="/signup"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          onClick={onMobileClick}
        >
          Rejestracja
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden sm:flex sm:items-center sm:ml-6">
      <Link
        to="/login"
        className="px-4 py-2 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 mr-2"
      >
        Logowanie
      </Link>
      <Link
        to="/signup"
        className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-500"
      >
        Rejestracja
      </Link>
    </div>
  );
};

export default AuthButtons;