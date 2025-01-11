import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { scrollToSection, scrollToTop } from "@/utils/scrollUtils";

export const Footer = () => {
  const handleSectionClick = (sectionId: string) => {
    if (window.location.pathname === "/") {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-sunset text-transparent bg-clip-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={() => handleSectionClick('stays')} className="hover:text-primary transition-colors">
                  Stays
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleSectionClick('work')} className="hover:text-primary transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => handleSectionClick('travel')} className="hover:text-primary transition-colors">
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-ocean text-transparent bg-clip-text">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-sky text-transparent bg-clip-text">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div>
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-sunset text-transparent bg-clip-text"
            >
              Roamari
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              © {new Date().getFullYear()} Roamari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};