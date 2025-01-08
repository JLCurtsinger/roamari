import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, DollarSign } from "lucide-react";

export const SearchFilters = () => {
  return (
    <div className="bg-white/95 p-6 rounded-xl shadow-lg max-w-4xl mx-auto backdrop-blur-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Where to?"
            className="pl-10 w-full bg-transparent border-gray-200 focus:border-gray-300 transition-colors"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 border-gray-200 hover:border-gray-300">
          <MapPin className="w-4 h-4" />
          Location
        </Button>
        <Button variant="outline" className="flex items-center gap-2 border-gray-200 hover:border-gray-300">
          <Calendar className="w-4 h-4" />
          Dates
        </Button>
        <Button variant="outline" className="flex items-center gap-2 border-gray-200 hover:border-gray-300">
          <DollarSign className="w-4 h-4" />
          Budget
        </Button>
        <Button className="bg-gradient-sunset text-white hover:opacity-90 transition-opacity">
          Search
        </Button>
      </div>
    </div>
  );
};