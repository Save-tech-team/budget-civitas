import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Download, Upload, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Budget = () => {
  const budgetLines = [
    { id: 1, nature: "Salaires et traitements", allocated: 1250000000, engaged: 875000000, remaining: 375000000, status: "En cours" },
    { id: 2, nature: "Fonctionnement", allocated: 800000000, engaged: 650000000, remaining: 150000000, status: "Alerte" },
    { id: 3, nature: "Investissements", allocated: 2100000000, engaged: 420000000, remaining: 1680000000, status: "Disponible" },
    { id: 4, nature: "Transferts sociaux", allocated: 450000000, engaged: 380000000, remaining: 70000000, status: "En cours" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponible": return "bg-green-100 text-green-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "Alerte": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Budget & Prévisions</h1>
          <p className="text-muted-foreground">Planification et suivi budgétaire</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrer
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exporter
          </Button>
          <Button size="sm">
            <PlusCircle className="h-4 w-4 mr-2" />
            Nouvelle ligne
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,6 Mds FCFA</div>
            <p className="text-xs text-muted-foreground">Exercice 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Engagé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,3 Mds FCFA</div>
            <p className="text-xs text-muted-foreground">50% du budget</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Disponible</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,3 Mds FCFA</div>
            <p className="text-xs text-muted-foreground">50% restant</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taux d'engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50%</div>
            <p className="text-xs text-muted-foreground">Au 15/01/2025</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lignes Budgétaires</CardTitle>
          <CardDescription>Détail par nature de dépense</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-medium">Nature de dépense</th>
                  <th className="text-right p-4 font-medium">Alloué (FCFA)</th>
                  <th className="text-right p-4 font-medium">Engagé (FCFA)</th>
                  <th className="text-right p-4 font-medium">Disponible (FCFA)</th>
                  <th className="text-center p-4 font-medium">Statut</th>
                </tr>
              </thead>
              <tbody>
                {budgetLines.map((line) => (
                  <tr key={line.id} className="border-b border-border/50">
                    <td className="p-4 font-medium">{line.nature}</td>
                    <td className="p-4 text-right">{line.allocated.toLocaleString()}</td>
                    <td className="p-4 text-right">{line.engaged.toLocaleString()}</td>
                    <td className="p-4 text-right">{line.remaining.toLocaleString()}</td>
                    <td className="p-4 text-center">
                      <Badge className={getStatusColor(line.status)}>{line.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Budget;