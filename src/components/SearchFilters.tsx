import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, DollarSign } from "lucide-react";

export const SearchFilters = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by keyword..."
            className="pl-10 w-full"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Location
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Date Range
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          Price Range
        </Button>
        <Button className="bg-gradient-sunset text-white hover:opacity-90">
          Search
        </Button>
      </div>
    </div>
  );
};