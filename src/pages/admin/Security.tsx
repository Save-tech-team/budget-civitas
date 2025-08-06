import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Shield, AlertTriangle, Lock, Eye, Download, Search, Activity } from "lucide-react";

const AdminSecurity = () => {
  const securityLogs = [
    { 
      id: 1, 
      timestamp: "2024-01-15 14:35:22", 
      user: "j.kouame@budget.gov.ci", 
      action: "Connexion réussie", 
      ip: "192.168.1.15",
      location: "Abidjan, CI",
      risk: "Faible",
      details: "Connexion depuis l'administration"
    },
    { 
      id: 2, 
      timestamp: "2024-01-15 14:20:18", 
      user: "f.diallo@budget.gov.ci", 
      action: "Modification budget", 
      ip: "192.168.1.28",
      location: "Abidjan, CI",
      risk: "Moyen",
      details: "Modification ligne budgétaire 2024-BUD-001"
    },
    { 
      id: 3, 
      timestamp: "2024-01-15 13:45:33", 
      user: "unknown", 
      action: "Tentative connexion échouée", 
      ip: "203.45.67.89",
      location: "Inconnu",
      risk: "Élevé",
      details: "5 tentatives consécutives - IP bloquée"
    },
    { 
      id: 4, 
      timestamp: "2024-01-15 12:30:45", 
      user: "k.yao@budget.gov.ci", 
      action: "Export de données", 
      ip: "192.168.1.42",
      location: "Abidjan, CI",
      risk: "Moyen",
      details: "Export rapport trésorerie"
    },
    { 
      id: 5, 
      timestamp: "2024-01-15 11:15:12", 
      user: "a.traore@budget.gov.ci", 
      action: "Paiement validé", 
      ip: "192.168.1.33",
      location: "Abidjan, CI",
      risk: "Faible",
      details: "Validation paiement PAY-2024-003"
    }
  ];

  const securityMetrics = [
    { label: "Connexions aujourd'hui", value: "47", status: "normal" },
    { label: "Tentatives échouées", value: "3", status: "warning" },
    { label: "Sessions actives", value: "12", status: "normal" },
    { label: "Alertes sécurité", value: "1", status: "alert" }
  ];

  const systemHealth = [
    { component: "Authentification", status: "Opérationnel", uptime: "99.9%" },
    { component: "Base de données", status: "Opérationnel", uptime: "100%" },
    { component: "API Bancaire", status: "Dégradé", uptime: "95.2%" },
    { component: "Sauvegarde", status: "Opérationnel", uptime: "99.8%" }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Faible": return "bg-green-100 text-green-800";
      case "Moyen": return "bg-yellow-100 text-yellow-800";
      case "Élevé": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "text-green-600";
      case "warning": return "text-yellow-600";
      case "alert": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getHealthColor = (status: string) => {
    switch (status) {
      case "Opérationnel": return "bg-green-100 text-green-800";
      case "Dégradé": return "bg-yellow-100 text-yellow-800";
      case "Hors ligne": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sécurité & Audit</h1>
          <p className="text-muted-foreground">Monitoring et logs de sécurité</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export logs
          </Button>
          <Button size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Audit complet
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {securityMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                {metric.value}
              </div>
              <div className="flex items-center mt-1">
                {metric.status === "alert" && <AlertTriangle className="h-3 w-3 text-red-500 mr-1" />}
                {metric.status === "warning" && <AlertTriangle className="h-3 w-3 text-yellow-500 mr-1" />}
                <p className="text-xs text-muted-foreground">
                  {metric.status === "normal" ? "Normal" : 
                   metric.status === "warning" ? "Attention" : "Alerte"}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Journal de Sécurité</CardTitle>
            <CardDescription>Activités et événements de sécurité en temps réel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Rechercher dans les logs..." className="pl-10" />
              </div>

              <div className="space-y-3">
                {securityLogs.map((log) => (
                  <div key={log.id} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Activity className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium">{log.action}</h3>
                            <Badge className={getRiskColor(log.risk)}>{log.risk}</Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                            <span>Utilisateur: {log.user}</span>
                            <span>IP: {log.ip}</span>
                            <span>Localisation: {log.location}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{log.details}</p>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {log.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>État du Système</CardTitle>
            <CardDescription>Monitoring des composants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((component, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{component.component}</p>
                    <p className="text-sm text-muted-foreground">Uptime: {component.uptime}</p>
                  </div>
                  <Badge className={getHealthColor(component.status)}>
                    {component.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Paramètres de Sécurité</CardTitle>
            <CardDescription>Configuration des règles de sécurité</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Authentification 2FA</p>
                    <p className="text-sm text-muted-foreground">Obligatoire pour les administrateurs</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Actif</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Limitation des tentatives</p>
                    <p className="text-sm text-muted-foreground">5 tentatives maximum</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Actif</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Eye className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Audit automatique</p>
                    <p className="text-sm text-muted-foreground">Logs détaillés des actions</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Actif</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions Sécurité</CardTitle>
            <CardDescription>Outils d'administration sécurité</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button variant="outline" className="justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Analyser les vulnérabilités
              </Button>
              <Button variant="outline" className="justify-start">
                <Lock className="h-4 w-4 mr-2" />
                Réinitialiser mot de passe
              </Button>
              <Button variant="outline" className="justify-start">
                <Eye className="h-4 w-4 mr-2" />
                Générer rapport d'audit
              </Button>
              <Button variant="outline" className="justify-start">
                <Download className="h-4 w-4 mr-2" />
                Sauvegarder les logs
              </Button>
              <Button variant="outline" className="justify-start text-destructive">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Bloquer adresse IP
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSecurity;