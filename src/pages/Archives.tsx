import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Archive, Search, Download, Filter, FileText, Calendar, User } from "lucide-react";

const Archives = () => {
  const archivedDocuments = [
    { 
      id: "ARC-2023-001", 
      title: "Budget Exercice 2023", 
      type: "Budget", 
      date: "2023-12-31", 
      size: "2.4 MB",
      user: "Admin Système",
      category: "Budgétaire",
      status: "Archivé"
    },
    { 
      id: "ARC-2023-089", 
      title: "Rapport Trésorerie Q4 2023", 
      type: "Rapport", 
      date: "2023-12-28", 
      size: "1.8 MB",
      user: "Direction Financière",
      category: "Trésorerie",
      status: "Archivé"
    },
    { 
      id: "ARC-2023-156", 
      title: "Contrats Fournisseurs 2023", 
      type: "Contrat", 
      date: "2023-12-15", 
      size: "5.2 MB",
      user: "Service Achats",
      category: "Fournisseurs",
      status: "Archivé"
    },
    { 
      id: "ARC-2023-203", 
      title: "Audit Interne Décembre", 
      type: "Audit", 
      date: "2023-12-10", 
      size: "3.1 MB",
      user: "Service Audit",
      category: "Contrôle",
      status: "Archivé"
    },
    { 
      id: "ARC-2023-278", 
      title: "Pièces Justificatives Q4", 
      type: "Justificatif", 
      date: "2023-11-30", 
      size: "12.8 MB",
      user: "Comptabilité",
      category: "Paiements",
      status: "Archivé"
    }
  ];

  const archiveStats = [
    { period: "2023", documents: 1247, size: "156 GB" },
    { period: "2022", documents: 1156, size: "142 GB" },
    { period: "2021", documents: 1089, size: "134 GB" },
    { period: "2020", documents: 987, size: "118 GB" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Budgétaire": return "bg-blue-100 text-blue-800";
      case "Trésorerie": return "bg-green-100 text-green-800";
      case "Fournisseurs": return "bg-purple-100 text-purple-800";
      case "Paiements": return "bg-orange-100 text-orange-800";
      case "Contrôle": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Archives</h1>
          <p className="text-muted-foreground">Consultation des documents archivés</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrer
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Période
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Documents totaux</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,479</div>
            <p className="text-xs text-muted-foreground">Tous exercices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Espace utilisé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">550 GB</div>
            <p className="text-xs text-muted-foreground">Stockage total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Dernière archive</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">31/12/23</div>
            <p className="text-xs text-muted-foreground">Exercice 2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Accès ce mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">Consultations</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recherche dans les Archives</CardTitle>
            <CardDescription>Retrouver des documents archivés</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Rechercher un document..." className="pl-10" />
              </div>
              
              <div className="space-y-3">
                {archivedDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <FileText className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{doc.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {doc.date}
                          </span>
                          <span className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {doc.user}
                          </span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getCategoryColor(doc.category)}>{doc.category}</Badge>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Archives par Exercice</CardTitle>
            <CardDescription>Répartition par année</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {archiveStats.map((stat) => (
                <div key={stat.period} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Archive className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Exercice {stat.period}</p>
                      <p className="text-sm text-muted-foreground">{stat.documents} documents</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{stat.size}</p>
                    <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                      Parcourir
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gestion des Archives</CardTitle>
          <CardDescription>Outils d'administration des archives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-20 flex-col">
              <Archive className="h-6 w-6 mb-2" />
              Nouvelle archive
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Download className="h-6 w-6 mb-2" />
              Export archives
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <FileText className="h-6 w-6 mb-2" />
              Rapport d'archivage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Archives;