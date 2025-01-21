import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, Briefcase, Home, Plane, Car, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { scrollToSection, scrollToTop } from "@/utils/scrollUtils";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    // Check local storage for dark mode preference
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkModePreference);
    if (darkModePreference) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark');
  };

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-sunset text-transparent bg-clip-text"
          >
            Roamari
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              onClick={() => handleSectionClick('stays')} 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>{t('nav.stays')}</span>
            </Link>
            <Link 
              to="/" 
              onClick={() => handleSectionClick('work')} 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              <span>{t('nav.work')}</span>
            </Link>
            <Link 
              to="/" 
              onClick={() => handleSectionClick('travel')} 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Plane className="w-5 h-5" />
              <span>{t('nav.travel')}</span>
            </Link>
            <Link 
              to="/" 
              onClick={() => handleSectionClick('transportation')} 
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Car className="w-5 h-5" />
              <span>{t('nav.transportation')}</span>
            </Link>
            <LanguageSelector />
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="mr-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Link to="/signin">
              <Button className="bg-gradient-ocean text-white hover:opacity-90 transition-opacity">
                {t('nav.signIn')}
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                onClick={() => {
                  handleSectionClick('stays');
                  setIsMenuOpen(false);
                }} 
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Home className="w-5 h-5" />
                <span>{t('nav.stays')}</span>
              </Link>
              <Link 
                to="/" 
                onClick={() => {
                  handleSectionClick('work');
                  setIsMenuOpen(false);
                }} 
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Briefcase className="w-5 h-5" />
                <span>{t('nav.work')}</span>
              </Link>
              <Link 
                to="/" 
                onClick={() => {
                  handleSectionClick('travel');
                  setIsMenuOpen(false);
                }} 
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Plane className="w-5 h-5" />
                <span>{t('nav.travel')}</span>
              </Link>
              <Link 
                to="/" 
                onClick={() => {
                  handleSectionClick('transportation');
                  setIsMenuOpen(false);
                }} 
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Car className="w-5 h-5" />
                <span>{t('nav.transportation')}</span>
              </Link>
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button className="mx-4 bg-gradient-ocean text-white hover:opacity-90">
                  {t('nav.signIn')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
