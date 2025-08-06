import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
  variant?: "default" | "primary" | "secondary";
}

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon,
  description,
  variant = "default"
}: StatsCardProps) => {
  const getChangeColor = (type: string) => {
    switch (type) {
      case "positive":
        return "bg-secondary text-secondary-foreground";
      case "negative":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCardVariant = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-gradient-primary text-white border-0";
      case "secondary":
        return "bg-gradient-secondary text-white border-0";
      default:
        return "bg-card";
    }
  };

  return (
    <Card className={cn("transition-all duration-200 hover:shadow-lg", getCardVariant(variant))}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className={cn(
              "text-sm font-medium",
              variant === "default" ? "text-muted-foreground" : "text-white/80"
            )}>
              {title}
            </p>
            <p className={cn(
              "text-3xl font-bold mt-2",
              variant === "default" ? "text-foreground" : "text-white"
            )}>
              {value}
            </p>
            {description && (
              <p className={cn(
                "text-sm mt-1",
                variant === "default" ? "text-muted-foreground" : "text-white/70"
              )}>
                {description}
              </p>
            )}
            {change && (
              <Badge 
                className={cn(
                  "mt-3",
                  variant === "default" 
                    ? getChangeColor(changeType)
                    : "bg-white/20 text-white hover:bg-white/30"
                )}
              >
                {change}
              </Badge>
            )}
          </div>
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center",
            variant === "default" 
              ? "bg-primary/10 text-primary" 
              : "bg-white/20 text-white"
          )}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;