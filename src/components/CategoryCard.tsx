import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  buttonClassName: string;
  iconClassName: string;
}

export const CategoryCard = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonClassName,
  iconClassName,
}: CategoryCardProps) => {
  return (
    <div className="bg-white/95 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
      <Icon className={`w-12 h-12 mx-auto mb-4 ${iconClassName}`} />
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        variant="outline" 
        className={`w-full hover:opacity-90 transition-all duration-300 text-white font-medium ${buttonClassName}`}
      >
        <Icon className="mr-2 h-4 w-4" />
        {buttonText}
      </Button>
    </div>
  );
};