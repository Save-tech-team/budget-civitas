import { 
  BarChart3, 
  CreditCard, 
  DollarSign, 
  FileText, 
  PieChart, 
  Settings, 
  Users, 
  Wallet,
  TrendingUp,
  Shield,
  Archive
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    title: "Tableau de Bord",
    href: "/",
    icon: BarChart3,
    description: "Vue d'ensemble"
  },
  {
    title: "Budget & Prévisions",
    href: "/budget",
    icon: PieChart,
    description: "Planification budgétaire"
  },
  {
    title: "Engagements",
    href: "/engagements",
    icon: FileText,
    description: "Gestion des engagements"
  },
  {
    title: "Paiements",
    href: "/paiements",
    icon: CreditCard,
    description: "Suivi des paiements"
  },
  {
    title: "Trésorerie",
    href: "/tresorerie",
    icon: Wallet,
    description: "Gestion des fonds"
  },
  {
    title: "Avances & Prêts",
    href: "/avances",
    icon: DollarSign,
    description: "Avances aux agents"
  },
  {
    title: "Fournisseurs",
    href: "/fournisseurs",
    icon: TrendingUp,
    description: "Gestion fournisseurs"
  },
  {
    title: "Reporting",
    href: "/reporting",
    icon: BarChart3,
    description: "Rapports et analyses"
  },
  {
    title: "Archives",
    href: "/archives",
    icon: Archive,
    description: "Documents archivés"
  }
];

const adminItems = [
  {
    title: "Utilisateurs",
    href: "/admin/users",
    icon: Users,
    description: "Gestion des utilisateurs"
  },
  {
    title: "Sécurité",
    href: "/admin/security",
    icon: Shield,
    description: "Logs et audit"
  },
  {
    title: "Paramètres",
    href: "/admin/settings",
    icon: Settings,
    description: "Configuration système"
  }
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        {/* Navigation principale */}
        <nav className="space-y-2">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Modules Principaux
          </h2>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )
                }
              >
                <Icon className="h-5 w-5" />
                <div className="flex-1">
                  <div>{item.title}</div>
                  <div className="text-xs opacity-70">{item.description}</div>
                </div>
              </NavLink>
            );
          })}
        </nav>

        {/* Administration */}
        <nav className="space-y-2 mt-8">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Administration
          </h2>
          {adminItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-secondary text-secondary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )
                }
              >
                <Icon className="h-5 w-5" />
                <div className="flex-1">
                  <div>{item.title}</div>
                  <div className="text-xs opacity-70">{item.description}</div>
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;