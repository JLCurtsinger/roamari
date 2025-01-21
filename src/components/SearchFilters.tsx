import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { DestinationInput } from "./search/DestinationInput";
import { DateSelector } from "./search/DateSelector";
import { GuestCounter } from "./search/GuestCounter";

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
    <div 
      className="bg-white/95 rounded-lg shadow-lg max-w-6xl mx-auto backdrop-blur-md border border-gray-200"
      role="search"
      aria-label="Search destinations"
    >
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="flex-1 min-w-[200px] border-b md:border-b-0 md:border-r border-gray-200">
          <DestinationInput destination={destination} setDestination={setDestination} />
        </div>
        
        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
          <DateSelector
            label="Check in"
            date={checkIn}
            isOpen={isCheckInOpen}
            setIsOpen={setIsCheckInOpen}
            onSelect={handleCheckInSelect}
            ariaLabel="Select check-in date"
          />
        </div>
        
        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
          <DateSelector
            label="Check out"
            date={checkOut}
            isOpen={isCheckOutOpen}
            setIsOpen={setIsCheckOutOpen}
            onSelect={handleCheckOutSelect}
            ariaLabel="Select check-out date"
          />
        </div>
        
        <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200">
          <GuestCounter guests={guests} onGuestChange={handleGuestChange} />
        </div>

        <div className="p-2 flex items-center justify-center">
          <Button 
            className="bg-gradient-sunset hover:opacity-90 transition-opacity w-full md:w-auto px-8"
            size="lg"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};