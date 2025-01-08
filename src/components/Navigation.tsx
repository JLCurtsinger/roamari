import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            RoamWork Hub
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="#jobs">
              <Button variant="ghost">Find Work</Button>
            </Link>
            <Link to="#housing">
              <Button variant="ghost">Find Housing</Button>
            </Link>
            <Button className="bg-gradient-sunset text-white hover:opacity-90">Sign In</Button>
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
            <div className="flex flex-col gap-2">
              <Link to="#jobs">
                <Button variant="ghost" className="w-full justify-start">
                  Find Work
                </Button>
              </Link>
              <Link to="#housing">
                <Button variant="ghost" className="w-full justify-start">
                  Find Housing
                </Button>
              </Link>
              <Button className="w-full bg-gradient-sunset text-white hover:opacity-90">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};