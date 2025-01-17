import { Input } from "@/components/ui/input";

interface DestinationInputProps {
  destination: string;
  setDestination: (value: string) => void;
}

export const DestinationInput = ({ destination, setDestination }: DestinationInputProps) => {
  return (
    <div className="flex-grow relative group min-w-[200px] md:min-w-[250px]">
      <div className="px-6 py-3 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
        <div className="text-sm font-medium text-gray-800">Where</div>
        <Input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Search destinations"
          className="border-0 p-0 h-auto text-base text-gray-900 placeholder:text-gray-500 focus-visible:ring-0 bg-transparent"
          aria-label="Enter destination"
        />
      </div>
    </div>
  );
};