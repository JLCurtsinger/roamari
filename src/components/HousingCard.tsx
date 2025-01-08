import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Wifi, Home, DollarSign } from "lucide-react";

interface HousingCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  wifiSpeed: string;
  type: string;
}

export const HousingCard = ({ image, title, location, price, wifiSpeed, type }: HousingCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white border-primary/10">
      <div className="aspect-video relative overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" />
      </div>
      <CardHeader>
        <h3 className="font-semibold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{location}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <DollarSign className="h-4 w-4 text-accent" />
          <span>{price}/month</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Wifi className="h-4 w-4 text-primary" />
          <span>{wifiSpeed} Mbps</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Home className="h-4 w-4 text-secondary" />
          <span>{type}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Badge variant="outline" className="bg-gradient-travel text-primary hover:bg-gradient-travel/90">
          Available Now
        </Badge>
      </CardFooter>
    </Card>
  );
};