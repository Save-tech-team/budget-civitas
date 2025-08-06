import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, DollarSign, User, Calendar } from "lucide-react";

const Avances = () => {
  const advances = [
    { 
      id: "AV-2024-001", 
      employee: "KOUAME Jean-Baptiste", 
      matricule: "MAT-001", 
      amount: 500000, 
      purpose: "Mission Bouaké", 
      status: "Actif", 
      dateGranted: "2024-01-10",
      dueDate: "2024-02-10",
      remaining: 500000
    },
    { 
      id: "AV-2024-002", 
      employee: "DIALLO Fatou", 
      matricule: "MAT-002", 
      amount: 750000, 
      purpose: "Formation Abidjan", 
      status: "Remboursé", 
      dateGranted: "2024-01-05",
      dueDate: "2024-02-05",
      remaining: 0
    },
    { 
      id: "AV-2024-003", 
      employee: "YAO Kofi", 
      matricule: "MAT-003", 
      amount: 300000, 
      purpose: "Achat équipements", 
      status: "En cours", 
      dateGranted: "2024-01-12",
      dueDate: "2024-02-12",
      remaining: 150000
    }
  ];

  const loans = [
    { 
      id: "PR-2024-001", 
      employee: "TRAORE Aminata", 
      matricule: "MAT-004", 
      amount: 2000000, 
      purpose: "Urgence familiale", 
      status: "Actif", 
      monthlyPayment: 200000,
      remaining: 1600000,
      nextPayment: "2024-02-01"
    },
    { 
      id: "PR-2024-002", 
      employee: "KONE Seydou", 
      matricule: "MAT-005", 
      amount: 1500000, 
      purpose: "Frais médicaux", 
      status: "Actif", 
      monthlyPayment: 150000,
      remaining: 1200000,
      nextPayment: "2024-02-15"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif": return "bg-blue-100 text-blue-800";
      case "Remboursé": return "bg-green-100 text-green-800";
      case "En cours": return "bg-yellow-100 text-yellow-800";
      case "Échu": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Avances & Prêts</h1>
          <p className="text-muted-foreground">Gestion des avances et prêts aux agents</p>
        </div>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Nouvelle demande
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avances actives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">650k FCFA</div>
            <p className="text-xs text-muted-foreground">2 avances</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Prêts en cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,8M FCFA</div>
            <p className="text-xs text-muted-foreground">2 prêts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Remboursements mensuels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">350k FCFA</div>
            <p className="text-xs text-muted-foreground">À percevoir</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Agents concernés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Actifs</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Avances en Cours</CardTitle>
            <CardDescription>Avances accordées aux agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {advances.map((advance) => (
                <div key={advance.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{advance.employee}</h3>
                      <p className="text-sm text-muted-foreground">{advance.matricule} • {advance.purpose}</p>
                      <p className="text-xs text-muted-foreground">Échéance: {advance.dueDate}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-bold">{advance.remaining.toLocaleString()} FCFA</p>
                    <Badge className={getStatusColor(advance.status)}>{advance.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prêts en Cours</CardTitle>
            <CardDescription>Prêts avec échéancier de remboursement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {loans.map((loan) => (
                <div key={loan.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{loan.employee}</h3>
                      <p className="text-sm text-muted-foreground">{loan.matricule} • {loan.purpose}</p>
                      <p className="text-xs text-muted-foreground">
                        Mensualité: {loan.monthlyPayment.toLocaleString()} FCFA
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Prochain paiement: {loan.nextPayment}
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-bold">{loan.remaining.toLocaleString()} FCFA</p>
                    <Badge className={getStatusColor(loan.status)}>{loan.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Avances;