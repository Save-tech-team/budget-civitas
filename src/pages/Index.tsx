import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users,
  AlertTriangle,
  PieChart,
  Wallet,
  FileText
} from "lucide-react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6 animate-fade-in">
          {/* En-tête du dashboard */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Tableau de Bord Budgétaire
            </h1>
            <p className="text-muted-foreground">
              Vue d'ensemble de la gestion budgétaire de l'État de Côte d'Ivoire
            </p>
          </div>

          {/* Statistiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Budget Total"
              value="1,2 Md FCFA"
              change="+5.2% vs mois dernier"
              changeType="positive"
              icon={PieChart}
              variant="primary"
              description="Budget annuel 2024"
            />
            <StatsCard
              title="Engagements"
              value="856 M FCFA"
              change="71.3% du budget"
              changeType="neutral"
              icon={FileText}
              variant="secondary"
              description="Engagements en cours"
            />
            <StatsCard
              title="Paiements"
              value="642 M FCFA"
              change="+12.8% ce mois"
              changeType="positive"
              icon={DollarSign}
              description="Décaissements effectués"
            />
            <StatsCard
              title="Trésorerie"
              value="358 M FCFA"
              change="-2.1% cette semaine"
              changeType="negative"
              icon={Wallet}
              description="Fonds disponibles"
            />
          </div>

          {/* Indicateurs secondaires */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Utilisateurs Actifs"
              value="47"
              icon={Users}
              description="Agents connectés"
            />
            <StatsCard
              title="Taux d'Engagement"
              value="71.3%"
              icon={BarChart3}
              description="Progression budgétaire"
            />
            <StatsCard
              title="Taux de Décaissement"
              value="53.5%"
              icon={TrendingUp}
              description="Exécution des paiements"
            />
            <StatsCard
              title="Alertes"
              value="3"
              icon={AlertTriangle}
              description="Nécessitent attention"
            />
          </div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <QuickActions />
            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
