import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Users, Search, Edit, Trash2, Shield, Mail } from "lucide-react";

const AdminUsers = () => {
  const users = [
    { 
      id: 1, 
      name: "KOUAME Jean-Baptiste", 
      email: "j.kouame@budget.gov.ci", 
      role: "Administrateur",
      department: "Direction Générale",
      status: "Actif",
      lastLogin: "2024-01-15 14:30",
      createdAt: "2023-01-15"
    },
    { 
      id: 2, 
      name: "DIALLO Fatou", 
      email: "f.diallo@budget.gov.ci", 
      role: "Directeur Financier",
      department: "Direction Financière",
      status: "Actif",
      lastLogin: "2024-01-15 10:20",
      createdAt: "2023-02-10"
    },
    { 
      id: 3, 
      name: "YAO Kofi", 
      email: "k.yao@budget.gov.ci", 
      role: "Agent Budgétaire",
      department: "Service Budget",
      status: "Actif",
      lastLogin: "2024-01-15 09:15",
      createdAt: "2023-03-20"
    },
    { 
      id: 4, 
      name: "TRAORE Aminata", 
      email: "a.traore@budget.gov.ci", 
      role: "Comptable",
      department: "Comptabilité",
      status: "Actif",
      lastLogin: "2024-01-14 16:45",
      createdAt: "2023-04-12"
    },
    { 
      id: 5, 
      name: "KONE Seydou", 
      email: "s.kone@budget.gov.ci", 
      role: "Agent Budgétaire",
      department: "Service Budget",
      status: "Suspendu",
      lastLogin: "2024-01-10 11:30",
      createdAt: "2023-05-08"
    }
  ];

  const roles = [
    { name: "Administrateur", count: 2, color: "bg-red-100 text-red-800" },
    { name: "Directeur Financier", count: 1, color: "bg-purple-100 text-purple-800" },
    { name: "Agent Budgétaire", count: 8, color: "bg-blue-100 text-blue-800" },
    { name: "Comptable", count: 3, color: "bg-green-100 text-green-800" },
    { name: "Responsable RH", count: 2, color: "bg-orange-100 text-orange-800" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Actif": return "bg-green-100 text-green-800";
      case "Suspendu": return "bg-red-100 text-red-800";
      case "Inactif": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestion des Utilisateurs</h1>
          <p className="text-muted-foreground">Administration des comptes utilisateurs</p>
        </div>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Nouvel utilisateur
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total utilisateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <p className="text-xs text-muted-foreground">Tous statuts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">87,5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Connexions aujourd'hui</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Utilisateurs connectés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Nouveaux ce mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Janvier 2024</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Liste des Utilisateurs</CardTitle>
            <CardDescription>Gestion des comptes et permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Rechercher un utilisateur..." className="pl-10" />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-medium">Utilisateur</th>
                      <th className="text-left p-4 font-medium">Rôle</th>
                      <th className="text-left p-4 font-medium">Département</th>
                      <th className="text-left p-4 font-medium">Dernière connexion</th>
                      <th className="text-center p-4 font-medium">Statut</th>
                      <th className="text-center p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-border/50">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">{user.role}</Badge>
                        </td>
                        <td className="p-4 text-sm">{user.department}</td>
                        <td className="p-4 text-sm">{user.lastLogin}</td>
                        <td className="p-4 text-center">
                          <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Shield className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Répartition par Rôle</CardTitle>
            <CardDescription>Distribution des utilisateurs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {roles.map((role) => (
                <div key={role.name} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{role.name}</span>
                  </div>
                  <Badge className={role.color}>{role.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Actions Rapides</CardTitle>
          <CardDescription>Outils d'administration des utilisateurs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col">
              <PlusCircle className="h-6 w-6 mb-2" />
              Créer utilisateur
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Mail className="h-6 w-6 mb-2" />
              Inviter par email
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Shield className="h-6 w-6 mb-2" />
              Gérer permissions
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Users className="h-6 w-6 mb-2" />
              Import en masse
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;