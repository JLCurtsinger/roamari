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
      className="bg-white/95 p-2 rounded-full shadow-lg max-w-6xl mx-auto backdrop-blur-md"
      role="search"
      aria-label="Search destinations"
    >
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
        <DestinationInput destination={destination} setDestination={setDestination} />
        
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2" role="separator" />
        
        <DateSelector
          label="Check in"
          date={checkIn}
          isOpen={isCheckInOpen}
          setIsOpen={setIsCheckInOpen}
          onSelect={handleCheckInSelect}
          ariaLabel="Select check-in date"
        />
        
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2" role="separator" />
        
        <DateSelector
          label="Check out"
          date={checkOut}
          isOpen={isCheckOutOpen}
          setIsOpen={setIsCheckOutOpen}
          onSelect={handleCheckOutSelect}
          ariaLabel="Select check-out date"
        />
        
        <div className="hidden md:block w-px h-14 bg-gray-200 mx-2" role="separator" />
        
        <GuestCounter guests={guests} onGuestChange={handleGuestChange} />

        <Button 
          className="ml-2 rounded-full bg-gradient-sunset hover:opacity-90 transition-opacity p-6"
          size="icon"
          aria-label="Search"
        >
          <Search className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
};