import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

export const SearchFilters = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-4 w-4" />
        <Input
          placeholder="Search for jobs or locations..."
          className="pl-10 w-full border-primary/20 focus-visible:ring-primary"
        />
      </div>
      <Button variant="outline" className="w-full md:w-auto border-primary/20 hover:bg-gradient-travel hover:text-primary">
        <SlidersHorizontal className="h-4 w-4 mr-2" />
        Filters
      </Button>
    </div>
  );
};