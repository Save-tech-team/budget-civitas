import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, TrendingUp, TrendingDown, RefreshCw, Database, Edit3 } from "lucide-react";

const Tresorerie = () => {
  const accounts = [
    { 
      name: "Compte Principal BCEAO", 
      number: "CI-001-2024-001", 
      balance: 2850000000, 
      lastUpdate: "2024-01-15 14:30",
      source: "API",
      status: "Actif"
    },
    { 
      name: "Compte Dépôt SIB", 
      number: "CI-001-2024-002", 
      balance: 450000000, 
      lastUpdate: "2024-01-15 09:15",
      source: "Manuel",
      status: "Actif"
    },
    { 
      name: "Compte Projet BACI", 
      number: "CI-001-2024-003", 
      balance: 125000000, 
      lastUpdate: "2024-01-14 16:45",
      source: "API",
      status: "Actif"
    }
  ];

  const movements = [
    { type: "Crédit", amount: 500000000, description: "Transfert Trésor Public", date: "2024-01-15", account: "BCEAO" },
    { type: "Débit", amount: -75000000, description: "Paiement fournisseurs", date: "2024-01-15", account: "BCEAO" },
    { type: "Crédit", amount: 25000000, description: "Remboursement avance", date: "2024-01-14", account: "SIB" },
    { type: "Débit", amount: -12000000, description: "Frais bancaires", date: "2024-01-14", account: "BCEAO" }
  ];

  const getSourceBadge = (source: string) => {
    return source === "API" 
      ? <Badge className="bg-green-100 text-green-800"><Database className="h-3 w-3 mr-1" />API</Badge>
      : <Badge className="bg-blue-100 text-blue-800"><Edit3 className="h-3 w-3 mr-1" />Manuel</Badge>;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Trésorerie</h1>
          <p className="text-muted-foreground">Gestion des fonds et comptes bancaires</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Synchroniser API
          </Button>
          <Button size="sm">
            <Edit3 className="h-4 w-4 mr-2" />
            Mise à jour manuelle
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Solde Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,4 Mds FCFA</div>
            <p className="text-xs text-muted-foreground">Tous comptes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Entrées du jour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+525M FCFA</div>
            <p className="text-xs text-muted-foreground">15/01/2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Sorties du jour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">-87M FCFA</div>
            <p className="text-xs text-muted-foreground">15/01/2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Variation nette</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+438M FCFA</div>
            <p className="text-xs text-muted-foreground">Aujourd'hui</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Comptes Bancaires</CardTitle>
            <CardDescription>État des comptes et dernières mises à jour</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {accounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Wallet className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{account.name}</h3>
                      <p className="text-sm text-muted-foreground">{account.number}</p>
                      <p className="text-xs text-muted-foreground">MAJ: {account.lastUpdate}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-bold">{account.balance.toLocaleString()} FCFA</p>
                    {getSourceBadge(account.source)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mouvements Récents</CardTitle>
            <CardDescription>Dernières opérations bancaires</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {movements.map((movement, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${movement.type === 'Crédit' ? 'bg-green-100' : 'bg-red-100'}`}>
                      {movement.type === 'Crédit' ? 
                        <TrendingUp className="h-4 w-4 text-green-600" /> : 
                        <TrendingDown className="h-4 w-4 text-red-600" />
                      }
                    </div>
                    <div>
                      <p className="font-medium">{movement.description}</p>
                      <p className="text-sm text-muted-foreground">{movement.date} • {movement.account}</p>
                    </div>
                  </div>
                  <div className={`font-bold ${movement.type === 'Crédit' ? 'text-green-600' : 'text-red-600'}`}>
                    {movement.amount > 0 ? '+' : ''}{movement.amount.toLocaleString()} FCFA
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

export default Tresorerie;