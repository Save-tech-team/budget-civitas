import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Settings, Save, Database, Mail, Shield, Globe, Bell, Archive } from "lucide-react";

const AdminSettings = () => {
  const systemSettings = [
    { 
      category: "Général", 
      settings: [
        { name: "Nom de l'organisation", value: "République de Côte d'Ivoire", type: "text" },
        { name: "Exercice budgétaire", value: "2024", type: "number" },
        { name: "Devise par défaut", value: "FCFA", type: "select" },
        { name: "Fuseau horaire", value: "Africa/Abidjan", type: "select" }
      ]
    },
    { 
      category: "Sécurité", 
      settings: [
        { name: "Durée de session", value: "8 heures", type: "select" },
        { name: "Complexité mot de passe", value: "Élevée", type: "select" },
        { name: "Authentification 2FA", value: "Obligatoire", type: "boolean" },
        { name: "Tentatives de connexion", value: "5", type: "number" }
      ]
    },
    { 
      category: "Notifications", 
      settings: [
        { name: "Alertes email", value: "Activées", type: "boolean" },
        { name: "Notifications système", value: "Activées", type: "boolean" },
        { name: "Rapports automatiques", value: "Hebdomadaire", type: "select" },
        { name: "Seuil d'alerte budget", value: "80%", type: "number" }
      ]
    }
  ];

  const integrationStatus = [
    { service: "API BCEAO", status: "Connecté", lastSync: "2024-01-15 14:30" },
    { service: "API SIB", status: "Connecté", lastSync: "2024-01-15 14:25" },
    { service: "API BACI", status: "Erreur", lastSync: "2024-01-15 12:15" },
    { service: "Service Email", status: "Connecté", lastSync: "2024-01-15 14:35" }
  ];

  const maintenanceTasks = [
    { task: "Sauvegarde quotidienne", lastRun: "2024-01-15 02:00", status: "Réussie" },
    { task: "Nettoyage logs", lastRun: "2024-01-14 03:00", status: "Réussie" },
    { task: "Archivage mensuel", lastRun: "2024-01-01 01:00", status: "Réussie" },
    { task: "Mise à jour système", lastRun: "2024-01-10 23:00", status: "En attente" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Connecté": return "bg-green-100 text-green-800";
      case "Réussie": return "bg-green-100 text-green-800";
      case "Erreur": return "bg-red-100 text-red-800";
      case "En attente": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Paramètres Système</h1>
          <p className="text-muted-foreground">Configuration et administration du système</p>
        </div>
        <Button size="sm">
          <Save className="h-4 w-4 mr-2" />
          Sauvegarder
        </Button>
      </div>

      <div className="grid gap-6">
        {systemSettings.map((section, sectionIndex) => (
          <Card key={sectionIndex}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {section.category === "Général" && <Settings className="h-5 w-5" />}
                {section.category === "Sécurité" && <Shield className="h-5 w-5" />}
                {section.category === "Notifications" && <Bell className="h-5 w-5" />}
                <span>{section.category}</span>
              </CardTitle>
              <CardDescription>
                Configuration des paramètres {section.category.toLowerCase()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {section.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="space-y-2">
                    <Label htmlFor={`${sectionIndex}-${settingIndex}`}>
                      {setting.name}
                    </Label>
                    {setting.type === "boolean" ? (
                      <div className="flex items-center space-x-2">
                        <Badge className={setting.value === "Activées" || setting.value === "Obligatoire" ? 
                          "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {setting.value}
                        </Badge>
                        <Button variant="outline" size="sm">Modifier</Button>
                      </div>
                    ) : (
                      <Input
                        id={`${sectionIndex}-${settingIndex}`}
                        value={setting.value}
                        type={setting.type === "number" ? "number" : "text"}
                        readOnly
                        className="bg-muted"
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Intégrations</span>
            </CardTitle>
            <CardDescription>État des connexions aux services externes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {integrationStatus.map((integration, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{integration.service}</p>
                    <p className="text-sm text-muted-foreground">
                      Dernière sync: {integration.lastSync}
                    </p>
                  </div>
                  <Badge className={getStatusColor(integration.status)}>
                    {integration.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Maintenance</span>
            </CardTitle>
            <CardDescription>Tâches de maintenance automatisées</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {maintenanceTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{task.task}</p>
                    <p className="text-sm text-muted-foreground">
                      Dernière exécution: {task.lastRun}
                    </p>
                  </div>
                  <Badge className={getStatusColor(task.status)}>
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Actions Système</CardTitle>
          <CardDescription>Opérations de maintenance et configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-20 flex-col">
              <Database className="h-6 w-6 mb-2" />
              Sauvegarder BD
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Archive className="h-6 w-6 mb-2" />
              Archiver données
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Mail className="h-6 w-6 mb-2" />
              Test email
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Shield className="h-6 w-6 mb-2" />
              Audit sécurité
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Settings className="h-6 w-6 mb-2" />
              Import/Export
            </Button>
            <Button variant="outline" className="h-20 flex-col text-destructive">
              <Database className="h-6 w-6 mb-2" />
              Reset système
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;