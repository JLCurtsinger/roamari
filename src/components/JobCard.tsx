import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="text-sm text-muted-foreground">{company}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{type}</Badge>
            <Badge variant="outline">{duration}</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">📍</span>
              {location}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">💰</span>
              {salary}
            </div>
          </div>
          <Button className="w-full">Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};