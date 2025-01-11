import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Users, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

export const SearchFilters = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);

  const handleGuestChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setGuests(value);
    }
  };

  const handleCheckInSelect = (date: Date | undefined) => {
    setCheckIn(date);
    setIsCheckInOpen(false);
  };

  const handleCheckOutSelect = (date: Date | undefined) => {
    setCheckOut(date);
    setIsCheckOutOpen(false);
  };

  return (
    <div className="bg-white/95 p-2 rounded-full shadow-lg max-w-6xl mx-auto backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
        {/* Where Section */}
        <div className="flex-grow relative group min-w-[200px] md:min-w-[250px]">
          <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-sm font-medium text-gray-800">Where</div>
            <Input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Search destinations"
              className="border-0 p-0 h-auto text-base text-gray-900 placeholder:text-gray-500 focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2"></div>

        {/* Check-in Section */}
        <Popover open={isCheckInOpen} onOpenChange={setIsCheckInOpen}>
          <PopoverTrigger asChild>
            <div className="relative group">
              <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="text-sm font-medium text-gray-800">Check in</div>
                <div className="text-base text-gray-900">
                  {checkIn ? format(checkIn, "MMM dd, yyyy") : "Add dates"}
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white" align="start">
            <CalendarComponent
              mode="single"
              selected={checkIn}
              onSelect={handleCheckInSelect}
              initialFocus
              className="bg-white"
            />
          </PopoverContent>
        </Popover>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2"></div>

        {/* Check-out Section */}
        <Popover open={isCheckOutOpen} onOpenChange={setIsCheckOutOpen}>
          <PopoverTrigger asChild>
            <div className="relative group">
              <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="text-sm font-medium text-gray-800">Check out</div>
                <div className="text-base text-gray-900">
                  {checkOut ? format(checkOut, "MMM dd, yyyy") : "Add dates"}
                </div>
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white" align="start">
            <CalendarComponent
              mode="single"
              selected={checkOut}
              onSelect={handleCheckOutSelect}
              initialFocus
              className="bg-white"
            />
          </PopoverContent>
        </Popover>

        {/* Vertical Separator */}
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2"></div>

        {/* Guests Section */}
        <div className="relative group">
          <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="text-sm font-medium text-gray-800">Guests</div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 border border-gray-300"
                onClick={() => handleGuestChange(guests - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={guests}
                onChange={(e) => handleGuestChange(parseInt(e.target.value))}
                className="w-16 text-center border-0 p-0 h-auto text-base text-gray-900 focus-visible:ring-0 bg-transparent"
                min={1}
                max={10}
              />
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 border border-gray-300"
                onClick={() => handleGuestChange(guests + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
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