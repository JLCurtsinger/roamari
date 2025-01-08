import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchFilters = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Input
        type="text"
        placeholder="Search by keyword..."
        className="flex-grow"
      />
      <Button variant="outline">Location</Button>
      <Button variant="outline">Date Range</Button>
      <Button variant="outline">Price Range</Button>
      <Button className="bg-primary hover:bg-primary/90">Search</Button>
    </div>
  );
};