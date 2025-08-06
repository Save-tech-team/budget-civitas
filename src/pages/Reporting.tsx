import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, PieChart, TrendingUp, Download, Filter, Calendar } from "lucide-react";

const Reporting = () => {
  const reports = [
    { 
      name: "Rapport Budgétaire Mensuel", 
      description: "Synthèse des engagements et paiements du mois",
      frequency: "Mensuel",
      lastGenerated: "2024-01-15",
      status: "Disponible",
      format: "PDF"
    },
    { 
      name: "État de la Trésorerie", 
      description: "Position des comptes bancaires et flux de trésorerie",
      frequency: "Hebdomadaire",
      lastGenerated: "2024-01-15",
      status: "Disponible",
      format: "Excel"
    },
    { 
      name: "Analyse des Fournisseurs", 
      description: "Performance et statistiques des partenaires",
      frequency: "Trimestriel",
      lastGenerated: "2024-01-01",
      status: "En cours",
      format: "PDF"
    },
    { 
      name: "Tableau de Bord Exécutif", 
      description: "Indicateurs clés pour la direction",
      frequency: "Quotidien",
      lastGenerated: "2024-01-15",
      status: "Disponible",
      format: "PDF"
    }
  ];

  const kpis = [
    { name: "Taux d'engagement budgétaire", value: "68%", trend: "+5%", color: "text-green-600" },
    { name: "Délai moyen de paiement", value: "12 jours", trend: "-2 jours", color: "text-green-600" },
    { name: "Nombre de fournisseurs actifs", value: "189", trend: "+12", color: "text-blue-600" },
    { name: "Montant moyen des engagements", value: "15M FCFA", trend: "+8%", color: "text-green-600" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponible": return "bg-green-100 text-green-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "Erreur": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reporting</h1>
          <p className="text-muted-foreground">Rapports et analyses budgétaires</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Période
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtres
          </Button>
          <Button size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Nouveau rapport
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {kpis.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{kpi.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className={`text-xs ${kpi.color} flex items-center`}>
                <TrendingUp className="h-3 w-3 mr-1" />
                {kpi.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Rapports Disponibles</CardTitle>
            <CardDescription>Rapports générés automatiquement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-muted-foreground">
                          Fréquence: {report.frequency}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Dernière génération: {report.lastGenerated}
                        </span>
                        <Badge variant="outline">{report.format}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                    {report.status === "Disponible" && (
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions Rapides</CardTitle>
            <CardDescription>Génération de rapports personnalisés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <PieChart className="h-4 w-4 mr-2" />
                Analyse budgétaire
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                Évolution trésorerie
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                Performance fournisseurs
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export personnalisé
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Graphiques et Visualisations</CardTitle>
          <CardDescription>Données visuelles pour le pilotage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-6 border border-border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <h3 className="font-medium mb-2">Évolution Budget vs Engagements</h3>
              <div className="h-32 flex items-center justify-center text-muted-foreground">
                <BarChart3 className="h-8 w-8" />
                <span className="ml-2">Graphique disponible en mode interactif</span>
              </div>
            </div>
            <div className="p-6 border border-border rounded-lg bg-gradient-to-br from-green-50 to-green-100">
              <h3 className="font-medium mb-2">Répartition des Dépenses</h3>
              <div className="h-32 flex items-center justify-center text-muted-foreground">
                <PieChart className="h-8 w-8" />
                <span className="ml-2">Répartition par catégorie</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reporting;