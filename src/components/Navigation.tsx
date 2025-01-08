import { Menu, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-travel backdrop-blur-md z-50 border-b border-primary/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Compass className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nomad Work
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#jobs" className="text-secondary hover:text-primary transition-colors">Find Work</a>
            <a href="#housing" className="text-secondary hover:text-primary transition-colors">Housing</a>
            <Button variant="default" className="bg-gradient-sunset hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};