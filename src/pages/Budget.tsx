import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Download, Upload, Filter, Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Budget = () => {
  const budgetLines = [
    { 
      id: 601, 
      code: "601", 
      nature: "Procéder à l'achat de matériels, de fournitures de bureau, de documents et carburant", 
      isCategory: true,
      prevision2025: 10000,
      allocated: 8000, 
      engaged: 3500, 
      remaining: 4500, 
      engagementRate: 43.75,
      status: "En cours" 
    },
    { 
      id: 6011, 
      code: "6011", 
      nature: "Achats de petits matériels, fournitures de bureau et documentation", 
      isCategory: false,
      parentId: 601,
      prevision2025: 5000,
      allocated: 4000, 
      engaged: 1750, 
      remaining: 2250, 
      engagementRate: 43.75,
      status: "En cours" 
    },
    { 
      id: 6012, 
      code: "6012", 
      nature: "Achats de carburants et lubrifiants", 
      isCategory: false,
      parentId: 601,
      prevision2025: 5000,
      allocated: 4000, 
      engaged: 1750, 
      remaining: 2250, 
      engagementRate: 43.75,
      status: "En cours" 
    },
    { 
      id: 611, 
      code: "611", 
      nature: "Procéder au paiement de frais de transport et de mission", 
      isCategory: true,
      prevision2025: 8000,
      allocated: 6400, 
      engaged: 2800, 
      remaining: 3600, 
      engagementRate: 43.75,
      status: "Disponible" 
    },
    { 
      id: 6111, 
      code: "6111", 
      nature: "Frais de transport des agents en mission à l'intérieur", 
      isCategory: false,
      parentId: 611,
      prevision2025: 4000,
      allocated: 3200, 
      engaged: 1400, 
      remaining: 1800, 
      engagementRate: 43.75,
      status: "Disponible" 
    },
    { 
      id: 6112, 
      code: "6112", 
      nature: "Indemnités de mission à l'intérieur", 
      isCategory: false,
      parentId: 611,
      prevision2025: 4000,
      allocated: 3200, 
      engaged: 1400, 
      remaining: 1800, 
      engagementRate: 43.75,
      status: "Disponible" 
    },
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

      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget Prévu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,0 M FCFA</div>
            <p className="text-xs text-muted-foreground">Prévision 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget Alloué</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14,4 M FCFA</div>
            <p className="text-xs text-muted-foreground">Exercice 2025</p>
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
                  <th className="text-left p-4 font-medium">Code</th>
                  <th className="text-left p-4 font-medium">Nature de dépense</th>
                  <th className="text-right p-4 font-medium">Prévision 2025 (FCFA)</th>
                  <th className="text-right p-4 font-medium">Alloué (FCFA)</th>
                  <th className="text-right p-4 font-medium">Engagé (FCFA)</th>
                  <th className="text-right p-4 font-medium">Disponible (FCFA)</th>
                  <th className="text-center p-4 font-medium">Taux d'engagement (%)</th>
                  <th className="text-center p-4 font-medium">Statut</th>
                  <th className="text-center p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {budgetLines.map((line) => (
                  <tr 
                    key={line.id} 
                    className={`border-b border-border/50 ${
                      line.isCategory 
                        ? 'bg-yellow-50 font-semibold' 
                        : 'bg-white'
                    }`}
                  >
                    <td className="p-4 font-medium">{line.code}</td>
                    <td className={`p-4 ${line.isCategory ? 'font-bold' : 'pl-8'}`}>
                      {line.nature}
                    </td>
                    <td className="p-4 text-right">{line.prevision2025.toLocaleString()}</td>
                    <td className="p-4 text-right">{line.allocated.toLocaleString()}</td>
                    <td className="p-4 text-right">{line.engaged.toLocaleString()}</td>
                    <td className="p-4 text-right">{line.remaining.toLocaleString()}</td>
                    <td className="p-4 text-center">{line.engagementRate}%</td>
                    <td className="p-4 text-center">
                      <Badge className={getStatusColor(line.status)}>{line.status}</Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
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