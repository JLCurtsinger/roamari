import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  duration: string;
}

export const JobCard = ({ title, company, location, salary, type, duration }: JobCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white border-primary/10">
      <CardHeader>
        <CardTitle className="text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <p className="text-sm text-gray-500">{company}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <DollarSign className="h-4 w-4 text-accent" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="h-4 w-4 text-secondary" />
          <span>{duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Badge variant="secondary" className="bg-gradient-travel text-primary hover:bg-gradient-travel/90">
          {type}
        </Badge>
      </CardFooter>
    </Card>
  );
};