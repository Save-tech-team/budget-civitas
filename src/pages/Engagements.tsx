import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, FileText, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react";

const Engagements = () => {
  const engagements = [
    { 
      id: "ENG-2024-001", 
      description: "Fournitures de bureau Q1 2024", 
      amount: 15000000, 
      status: "En attente", 
      date: "2024-01-15",
      validator: "Direction Administrative"
    },
    { 
      id: "ENG-2024-002", 
      description: "Maintenance informatique", 
      amount: 8500000, 
      status: "Validé", 
      date: "2024-01-12",
      validator: "Service IT"
    },
    { 
      id: "ENG-2024-003", 
      description: "Formation personnel", 
      amount: 25000000, 
      status: "En cours", 
      date: "2024-01-10",
      validator: "Direction RH"
    },
    { 
      id: "ENG-2024-004", 
      description: "Carburant véhicules", 
      amount: 12000000, 
      status: "Rejeté", 
      date: "2024-01-08",
      validator: "Direction Logistique"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Validé": return <CheckCircle className="h-4 w-4" />;
      case "En attente": return <Clock className="h-4 w-4" />;
      case "En cours": return <AlertCircle className="h-4 w-4" />;
      case "Rejeté": return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Validé": return "bg-green-100 text-green-800";
      case "En attente": return "bg-yellow-100 text-yellow-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "Rejeté": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Engagements</h1>
          <p className="text-muted-foreground">Gestion des engagements de dépenses</p>
        </div>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Nouvel engagement
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total engagements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">60,5M FCFA</div>
            <p className="text-xs text-muted-foreground">Ce mois</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">À valider</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Validés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Ce mois</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taux validation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Moyenne</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Engagements</CardTitle>
          <CardDescription>Suivi des demandes d'engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {engagements.map((engagement) => (
              <div key={engagement.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-accent rounded-lg">
                    <FileText className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">{engagement.description}</h3>
                    <p className="text-sm text-muted-foreground">
                      {engagement.id} • {engagement.date} • {engagement.validator}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">{engagement.amount.toLocaleString()} FCFA</p>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(engagement.status)}
                      <Badge className={getStatusColor(engagement.status)}>
                        {engagement.status}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Engagements;