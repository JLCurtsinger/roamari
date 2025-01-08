import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            RoamWork Hub
          </Link>
          <div className="flex items-center gap-4">
            <Link to="#jobs">
              <Button variant="ghost">Find Work</Button>
            </Link>
            <Link to="#housing">
              <Button variant="ghost">Find Housing</Button>
            </Link>
            <Button variant="default">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};