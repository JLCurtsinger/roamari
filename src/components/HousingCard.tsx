import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="text-sm text-muted-foreground">{location}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{type}</Badge>
            <Badge variant="outline">{wifiSpeed}Mbps</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">
              {price}<span className="text-sm text-muted-foreground">/month</span>
            </div>
            <Button>View Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};