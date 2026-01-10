import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  onClick?: () => void;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  color = "bg-emerald-500",
  onClick 
}: ServiceCardProps) {
  return (
    <Card 
      className="hover:shadow-lg transition-all cursor-pointer border-0 shadow-md"
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={`${color} p-3 rounded-xl shrink-0`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
