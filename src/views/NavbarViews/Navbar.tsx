import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import AuthButtons from './AuthButtons';
import DesktopMenu from './DesktopMenu';
import MobileMenuButton from './MobileMenuButtons';
import MobileCategoryMenu from './MobileCategoryMenu';

export interface SubCategory {
  name: string;
  path: string;
}

export interface Category {
  name: string;
  path: string;
  subCategories: SubCategory[];
}

const categories: Category[] = [
  {
    name: "Elektronika",
    path: "/elektronika",
    subCategories: [
      { name: "Komputery", path: "/elektronika/komputery" },
      { name: "Smartfony", path: "/elektronika/smartfony" },
      { name: "Telewizory", path: "/elektronika/telewizory" },
      { name: "Audio", path: "/elektronika/audio" }
    ]
  },
  {
    name: "Dom",
    path: "/dom",
    subCategories: [
      { name: "Meble", path: "/dom/meble" },
      { name: "Dekoracje", path: "/dom/dekoracje" },
      { name: "Oświetlenie", path: "/dom/oswietlenie" },
      { name: "AGD", path: "/dom/agd" }
    ]
  },
  {
    name: "Ogród",
    path: "/ogrod",
    subCategories: [
      { name: "Narzędzia", path: "/ogrod/narzedzia" },
      { name: "Rośliny", path: "/ogrod/rosliny" },
      { name: "Meble ogrodowe", path: "/ogrod/meble-ogrodowe" },
      { name: "Grille", path: "/ogrod/grille" }
    ]
  },
  {
    name: "Sport",
    path: "/sport",
    subCategories: [
      { name: "Fitness", path: "/sport/fitness" },
      { name: "Rowery", path: "/sport/rowery" },
      { name: "Piłka nożna", path: "/sport/pilka-nozna" },
      { name: "Turystyka", path: "/sport/turystyka" }
    ]
  },
  {
    name: "Moda",
    path: "/moda",
    subCategories: [
      { name: "Odzież", path: "/moda/odziez" },
      { name: "Obuwie", path: "/moda/obuwie" },
      { name: "Akcesoria", path: "/moda/akcesoria" },
      { name: "Biżuteria", path: "/moda/bizuteria" }
    ]
  }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [visibleCategories, setVisibleCategories] = useState<number>(3);
  const navRef = useRef<HTMLDivElement>(null);

  // Calculate how many categories can fit in the navbar
  useEffect(() => {
    const calculateVisibleCategories = () => {
      if (!navRef.current) return;
      
      const navWidth = navRef.current.offsetWidth;
      // Approximately calculate how many items can fit
      const estimatedItemWidth = 120; // width of each category item in pixels
      const authButtonsWidth = 200; // estimated width for auth buttons
      const logoWidth = 100; // estimated width for logo
      const availableWidth = navWidth - authButtonsWidth - logoWidth;
      
      const possibleCategories = Math.max(1, Math.floor(availableWidth / estimatedItemWidth));
      setVisibleCategories(Math.min(possibleCategories, categories.length));
    };

    calculateVisibleCategories();
    window.addEventListener('resize', calculateVisibleCategories);
    
    return () => {
      window.removeEventListener('resize', calculateVisibleCategories);
    };
  }, []);

  const toggleDropdown = (categoryName: string | null): void => {
    if (openCategory === categoryName) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryName);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openCategory && !((event.target as Element).closest('.category-dropdown'))) {
        setOpenCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCategory]);

  return (
    <nav className="bg-gray-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop menu */}
          <DesktopMenu
            categories={categories}
            visibleCategories={visibleCategories}
            openCategory={openCategory}
            onToggleDropdown={toggleDropdown}
          />

          {/* Auth buttons */}
          <AuthButtons />

          {/* Mobile menu button */}
          <MobileMenuButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <MobileCategoryMenu
          categories={categories}
          openCategory={openCategory}
          onToggleDropdown={toggleDropdown}
          onClose={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;