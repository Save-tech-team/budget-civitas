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
      title: "Nouvel Engagement",
      description: "Créer un engagement de dépense",
      icon: Plus,
      variant: "default" as const,
      href: "/engagements/new"
    },
    {
      title: "Saisir Paiement",
      description: "Enregistrer un nouveau paiement",
      icon: CreditCard,
      variant: "default" as const,
      href: "/paiements/new"
    },
    {
      title: "Import Documents",
      description: "Importer des pièces justificatives",
      icon: Upload,
      variant: "outline" as const,
      href: "/documents/import"
    },
    {
      title: "Gérer Utilisateurs",
      description: "Administration des comptes",
      icon: Users,
      variant: "outline" as const,
      href: "/admin/users"
    },
    {
      title: "Nouveau Rapport",
      description: "Générer un rapport personnalisé",
      icon: FileText,
      variant: "outline" as const,
      href: "/reporting/new"
    },
    {
      title: "Paramètres",
      description: "Configuration du système",
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