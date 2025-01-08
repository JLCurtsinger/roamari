import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-secondary">Nomad Work</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#jobs" className="text-secondary hover:text-primary transition-colors">Find Work</a>
            <a href="#housing" className="text-secondary hover:text-primary transition-colors">Housing</a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};