import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PlusCircle, Building, Phone, Mail, MapPin, Search } from "lucide-react";

const Fournisseurs = () => {
  const suppliers = [
    { 
      id: "F001", 
      name: "SOTRA", 
      category: "Transport", 
      contact: "direction@sotra.ci",
      phone: "+225 20 21 22 23",
      address: "Abidjan, Plateau",
      status: "Actif",
      totalPaid: 125000000,
      pendingAmount: 15000000,
      lastPayment: "2024-01-10"
    },
    { 
      id: "F002", 
      name: "Orange Telecom", 
      category: "Télécommunications", 
      contact: "facturation@orange.ci",
      phone: "+225 20 31 32 33",
      address: "Abidjan, Cocody",
      status: "Actif",
      totalPaid: 85000000,
      pendingAmount: 8500000,
      lastPayment: "2024-01-08"
    },
    { 
      id: "F003", 
      name: "CIPREL", 
      category: "Énergie", 
      contact: "admin@ciprel.ci",
      phone: "+225 20 25 26 27",
      address: "Abidjan, Zone Industrielle",
      status: "Actif",
      totalPaid: 450000000,
      pendingAmount: 75000000,
      lastPayment: "2024-01-05"
    },
    { 
      id: "F004", 
      name: "Société ALPHA", 
      category: "Fournitures", 
      contact: "ventes@alpha.ci",
      phone: "+225 20 28 29 30",
      address: "Bouaké",
      status: "Suspendu",
      totalPaid: 25000000,
      pendingAmount: 0,
      lastPayment: "2023-12-15"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif": return "bg-green-100 text-green-800";
      case "Suspendu": return "bg-red-100 text-red-800";
      case "En attente": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fournisseurs</h1>
          <p className="text-muted-foreground">Gestion des partenaires et fournisseurs</p>
        </div>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Nouveau fournisseur
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total fournisseurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">Enregistrés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <p className="text-xs text-muted-foreground">76% du total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Paiements en attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98,5M FCFA</div>
            <p className="text-xs text-muted-foreground">À traiter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Délai moyen paiement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 jours</div>
            <p className="text-xs text-muted-foreground">Moyenne</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recherche et Filtres</CardTitle>
          <CardDescription>Filtrer la liste des fournisseurs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Rechercher un fournisseur..." className="pl-10" />
              </div>
            </div>
            <Button variant="outline">Filtrer par catégorie</Button>
            <Button variant="outline">Filtrer par statut</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liste des Fournisseurs</CardTitle>
          <CardDescription>Répertoire des partenaires commerciaux</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-lg">{supplier.name}</h3>
                        <Badge className={getStatusColor(supplier.status)}>{supplier.status}</Badge>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{supplier.category}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{supplier.contact}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{supplier.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{supplier.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Total payé</p>
                      <p className="font-bold">{supplier.totalPaid.toLocaleString()} FCFA</p>
                    </div>
                    {supplier.pendingAmount > 0 && (
                      <div>
                        <p className="text-sm text-muted-foreground">En attente</p>
                        <p className="font-bold text-orange-600">{supplier.pendingAmount.toLocaleString()} FCFA</p>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground">Dernier paiement: {supplier.lastPayment}</p>
                    <Button variant="outline" size="sm">Voir détails</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fournisseurs;