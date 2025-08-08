import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plus, 
  FileText, 
  CreditCard, 
  Upload,
  Users,
  Settings
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "Engagement",
      description: "Créer un nouvel engagement",
      icon: Plus,
      variant: "default" as const,
      href: "/engagements"
    },
    {
      title: "Paiement",
      description: "Saisir un paiement",
      icon: CreditCard,
      variant: "default" as const,
      href: "/paiements"
    },
    {
      title: "Import",
      description: "Documents et factures",
      icon: Upload,
      variant: "outline" as const,
      href: "/documents/import"
    },
    {
      title: "Utilisateurs",
      description: "Gestion des comptes",
      icon: Users,
      variant: "outline" as const,
      href: "/admin/users"
    },
    {
      title: "Rapport",
      description: "Générer des analyses",
      icon: FileText,
      variant: "outline" as const,
      href: "/reporting"
    },
    {
      title: "Paramètres",
      description: "Configuration",
      icon: Settings,
      variant: "outline" as const,
      href: "/admin/settings"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions Rapides</CardTitle>
        <CardDescription>
          Accès rapide aux fonctionnalités principales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.title}
                variant={action.variant}
                className="h-auto p-4 flex flex-col items-start space-y-2 text-left"
              >
                <div className="flex items-center space-x-2 w-full">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-sm">{action.title}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {action.description}
                </span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;