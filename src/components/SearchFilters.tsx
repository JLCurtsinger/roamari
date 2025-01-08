import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Users } from "lucide-react";

export const SearchFilters = () => {
  return (
    <div className="bg-white/95 p-2 rounded-full shadow-lg max-w-6xl mx-auto backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
        {/* Where Section */}
        <div className="flex-grow relative group min-w-[200px] md:min-w-[250px]">
          <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-sm font-medium text-gray-800">Where</div>
            <Input
              type="text"
              placeholder="Search destinations"
              className="border-0 p-0 h-auto text-base placeholder:text-gray-500 focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2"></div>

        {/* Check-in Section */}
        <div className="relative group">
          <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-sm font-medium text-gray-800">Check in</div>
            <div className="text-base text-gray-500">Add dates</div>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2"></div>

        {/* Check-out Section */}
        <div className="relative group">
          <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-sm font-medium text-gray-800">Check out</div>
            <div className="text-base text-gray-500">Add dates</div>
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2"></div>

        {/* Who Section */}
        <div className="relative group">
          <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-sm font-medium text-gray-800">Who</div>
            <div className="text-base text-gray-500">Add guests</div>
          </div>
        </div>

        {/* Search Button */}
        <Button 
          className="ml-2 rounded-full bg-gradient-sunset hover:opacity-90 transition-opacity p-6"
          size="icon"
        >
          <Search className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
};