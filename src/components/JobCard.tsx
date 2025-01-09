import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  duration: string;
}

export const JobCard = ({ title, company, location, salary, type, duration }: JobCardProps) => {
  const navigate = useNavigate();

  const handleApply = () => {
    const params = new URLSearchParams({
      title,
      company,
    });
    navigate(`/job-application?${params.toString()}`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="text-sm text-muted-foreground">{company}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-gradient-travel text-gray-700">
              {type}
            </Badge>
            <Badge variant="outline">{duration}</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              {location}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="w-4 h-4" />
              {salary}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
          </div>
          <Button 
            className="w-full bg-gradient-sunset text-white hover:opacity-90"
            onClick={handleApply}
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};