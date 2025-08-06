import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, CreditCard, Download, Filter } from "lucide-react";

const Paiements = () => {
  const payments = [
    { 
      id: "PAY-2024-001", 
      beneficiary: "SOTRA", 
      amount: 45000000, 
      status: "Payé", 
      date: "2024-01-15",
      method: "Virement",
      reference: "ENG-2024-001"
    },
    { 
      id: "PAY-2024-002", 
      beneficiary: "Orange CI", 
      amount: 8500000, 
      status: "En cours", 
      date: "2024-01-14",
      method: "Chèque",
      reference: "ENG-2024-002"
    },
    { 
      id: "PAY-2024-003", 
      beneficiary: "CIPREL", 
      amount: 15000000, 
      status: "En attente", 
      date: "2024-01-13",
      method: "Virement",
      reference: "ENG-2024-003"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Payé": return "bg-green-100 text-green-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "En attente": return "bg-yellow-100 text-yellow-800";
      case "Annulé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Paiements</h1>
          <p className="text-muted-foreground">Suivi et gestion des paiements</p>
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
            Nouveau paiement
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Paiements du mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68,5M FCFA</div>
            <p className="text-xs text-muted-foreground">Janvier 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15M FCFA</div>
            <p className="text-xs text-muted-foreground">1 paiement</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Traités</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">53,5M FCFA</div>
            <p className="text-xs text-muted-foreground">2 paiements</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taux de traitement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Ce mois</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registre des Paiements</CardTitle>
          <CardDescription>Historique et suivi des paiements effectués</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-medium">Référence</th>
                  <th className="text-left p-4 font-medium">Bénéficiaire</th>
                  <th className="text-right p-4 font-medium">Montant (FCFA)</th>
                  <th className="text-left p-4 font-medium">Mode</th>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-center p-4 font-medium">Statut</th>
                  <th className="text-center p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-border/50">
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{payment.id}</p>
                        <p className="text-xs text-muted-foreground">{payment.reference}</p>
                      </div>
                    </td>
                    <td className="p-4 font-medium">{payment.beneficiary}</td>
                    <td className="p-4 text-right font-medium">{payment.amount.toLocaleString()}</td>
                    <td className="p-4">{payment.method}</td>
                    <td className="p-4">{payment.date}</td>
                    <td className="p-4 text-center">
                      <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                    </td>
                    <td className="p-4 text-center">
                      <Button variant="outline" size="sm">
                        Détails
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

export default Paiements;