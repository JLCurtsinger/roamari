import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, Briefcase, Home, Plane, Car } from "lucide-react";
import { useState } from "react";
import { scrollToSection, scrollToTop } from "@/utils/scrollUtils";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
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
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>Stays</span>
            </Link>
            <Link 
              to="/" 
              onClick={() => handleSectionClick('work')} 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              <span>Work</span>
            </Link>
            <Link 
              to="/" 
              onClick={() => handleSectionClick('travel')} 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Plane className="w-5 h-5" />
              <span>Travel</span>
            </Link>
            <Link 
              to="/" 
              onClick={() => handleSectionClick('transportation')} 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Car className="w-5 h-5" />
              <span>Transportation</span>
            </Link>
            <Link to="/signin">
              <Button className="bg-gradient-ocean text-white hover:opacity-90 transition-opacity">
                Sign In
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                onClick={() => {
                  handleSectionClick('stays');
                  setIsMenuOpen(false);
                }} 
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                <Home className="w-5 h-5" />
                <span>Stays</span>
              </Link>
              <Link 
                to="/" 
                onClick={() => {
                  handleSectionClick('work');
                  setIsMenuOpen(false);
                }} 
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                <Briefcase className="w-5 h-5" />
                <span>Work</span>
              </Link>
              <Link 
                to="/" 
                onClick={() => {
                  handleSectionClick('travel');
                  setIsMenuOpen(false);
                }} 
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                <Plane className="w-5 h-5" />
                <span>Travel</span>
              </Link>
              <Link 
                to="/" 
                onClick={() => {
                  handleSectionClick('transportation');
                  setIsMenuOpen(false);
                }} 
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50"
              >
                <Car className="w-5 h-5" />
                <span>Transportation</span>
              </Link>
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button className="mx-4 bg-gradient-ocean text-white hover:opacity-90">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};