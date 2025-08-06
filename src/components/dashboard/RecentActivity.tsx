import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  DollarSign,
  FileText,
  CreditCard
} from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "engagement",
      title: "Engagement créé",
      description: "Fournitures de bureau - Direction des Finances",
      amount: "2,500,000 FCFA",
      user: "Jean Kouassi",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      status: "pending",
      icon: FileText
    },
    {
      id: 2,
      type: "payment",
      title: "Paiement validé",
      description: "Salaires personnel - Janvier 2024",
      amount: "45,000,000 FCFA",
      user: "Marie Diabaté",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      status: "completed",
      icon: CreditCard
    },
    {
      id: 3,
      type: "treasury",
      title: "Mise à jour trésorerie",
      description: "Synchronisation automatique bancaire",
      amount: "+125,000,000 FCFA",
      user: "Système",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
      status: "completed",
      icon: DollarSign
    },
    {
      id: 4,
      type: "engagement",
      title: "Engagement en attente",
      description: "Travaux de rénovation - Ministère",
      amount: "15,000,000 FCFA",
      user: "Paul Ouattara",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
      status: "warning",
      icon: FileText
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          badge: "bg-secondary text-secondary-foreground",
          icon: CheckCircle,
          iconColor: "text-secondary"
        };
      case "pending":
        return {
          badge: "bg-yellow-100 text-yellow-800",
          icon: Clock,
          iconColor: "text-yellow-600"
        };
      case "warning":
        return {
          badge: "bg-orange-100 text-orange-800",
          icon: AlertTriangle,
          iconColor: "text-orange-600"
        };
      default:
        return {
          badge: "bg-muted text-muted-foreground",
          icon: Clock,
          iconColor: "text-muted-foreground"
        };
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité Récente</CardTitle>
        <CardDescription>
          Dernières opérations du système budgétaire
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const statusConfig = getStatusConfig(activity.status);
            const ActivityIcon = activity.icon;
            const StatusIcon = statusConfig.icon;
            
            return (
              <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10">
                    <ActivityIcon className="h-5 w-5 text-primary" />
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-foreground">
                      {activity.title}
                    </p>
                    <div className="flex items-center space-x-2">
                      <StatusIcon className={`h-4 w-4 ${statusConfig.iconColor}`} />
                      <Badge className={statusConfig.badge}>
                        {activity.status === "completed" ? "Terminé" : 
                         activity.status === "pending" ? "En cours" : "Attention"}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-1">
                    {activity.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Par {activity.user}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-primary">
                        {activity.amount}
                      </span>
                      <span>•</span>
                      <span>
                        {formatDistanceToNow(activity.timestamp, { 
                          addSuffix: true, 
                          locale: fr 
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;