import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";

interface GuestCounterProps {
  guests: number;
  onGuestChange: (value: number) => void;
}

export const GuestCounter = ({ guests, onGuestChange }: GuestCounterProps) => {
  return (
    <div className="relative group">
      <div 
        className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors"
        role="group"
        aria-label="Select number of guests"
      >
        <div className="text-sm font-medium text-gray-800">Guests</div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 border border-gray-300"
            onClick={() => onGuestChange(guests - 1)}
            aria-label="Decrease number of guests"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={guests}
            onChange={(e) => onGuestChange(parseInt(e.target.value))}
            className="w-16 text-center border-0 p-0 h-auto text-base text-gray-900 focus-visible:ring-0 bg-transparent"
            min={1}
            max={10}
            aria-label="Number of guests"
          />
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 border border-gray-300"
            onClick={() => onGuestChange(guests + 1)}
            aria-label="Increase number of guests"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};