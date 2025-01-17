import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DateSelectorProps {
  label: string;
  date: Date | undefined;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSelect: (date: Date | undefined) => void;
  ariaLabel: string;
}

export const DateSelector = ({
  label,
  date,
  isOpen,
  setIsOpen,
  onSelect,
  ariaLabel,
}: DateSelectorProps) => {
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="relative group">
          <div 
            className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors"
            role="button"
            aria-label={ariaLabel}
          >
            <div className="text-sm font-medium text-gray-800">{label}</div>
            <div className="text-base text-gray-900">
              {date ? format(date, "MMM dd, yyyy") : "Add dates"}
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white" align="start">
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={onSelect}
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
};