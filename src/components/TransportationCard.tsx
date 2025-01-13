import { Transportation } from "@/types/transportation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface TransportationCardProps {
  transportation: Transportation;
}

export const TransportationCard = ({ transportation }: TransportationCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={transportation.image}
          alt={transportation.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{transportation.type}</Badge>
          <span className="text-lg font-bold text-primary">{transportation.price}</span>
        </div>
        <CardTitle className="text-xl">{transportation.name}</CardTitle>
        <CardDescription>{transportation.availability}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{transportation.description}</p>
        <div className="grid grid-cols-2 gap-2">
          {transportation.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-ocean hover:opacity-90" asChild>
          <a href={transportation.link} target="_blank" rel="noopener noreferrer">
            Book Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};