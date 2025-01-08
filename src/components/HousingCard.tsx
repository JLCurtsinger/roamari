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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <DollarSign className="h-4 w-4" />
          <span>{price}/month</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Wifi className="h-4 w-4" />
          <span>{wifiSpeed} Mbps</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Home className="h-4 w-4" />
          <span>{type}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Badge variant="outline" className="bg-primary/10 text-primary">Available Now</Badge>
      </CardFooter>
    </Card>
  );
};