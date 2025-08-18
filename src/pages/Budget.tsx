import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BudgetFilters from "@/components/budget/BudgetFilters";
import AddBudgetLineForm from "@/components/budget/AddBudgetLineForm";
import AllocatedBudgetForm from "@/components/budget/AllocatedBudgetForm";
import EditBudgetLineForm from "@/components/budget/EditBudgetLineForm";
import BudgetExportView from "@/components/budget/BudgetExportView";

interface BudgetLine {
  id: number;
  code: string;
  nature: string;
  isCategory: boolean;
  parentId?: number;
  prevision2025: number;
  allocated: number;
  engaged: number;
  remaining: number;
  engagementRate: number;
  status: string;
}

const Budget = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [showExportView, setShowExportView] = useState(false);
  const [editingLine, setEditingLine] = useState<BudgetLine | null>(null);
  const [editFormOpen, setEditFormOpen] = useState(false);
  
  const [budgetLines, setBudgetLines] = useState<BudgetLine[]>([
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
  ]);

  const calculateTotals = () => {
    return budgetLines.reduce((acc, line) => {
      acc.prevision += line.prevision2025;
      acc.allocated += line.allocated;
      acc.engaged += line.engaged;
      acc.remaining += line.remaining;
      return acc;
    }, { prevision: 0, allocated: 0, engaged: 0, remaining: 0 });
  };

  const totals = calculateTotals();

  const handleAddLine = (newLine: Omit<BudgetLine, 'id'>) => {
    const maxId = Math.max(...budgetLines.map(line => line.id), 0);
    const newBudgetLine: BudgetLine = { 
      ...newLine, 
      id: maxId + 1,
      remaining: newLine.allocated - newLine.engaged,
      engagementRate: newLine.allocated > 0 ? (newLine.engaged / newLine.allocated) * 100 : 0
    };
    setBudgetLines(prev => [...prev, newBudgetLine]);
  };

  const handleUpdateLine = (updatedLine: BudgetLine) => {
    setBudgetLines(lines => 
      lines.map(line => line.id === updatedLine.id ? updatedLine : line)
    );
  };

  const handleEditLine = (line: BudgetLine) => {
    setEditingLine(line);
    setEditFormOpen(true);
  };

  const handleAllocatedBudgetUpdate = (totalAllocated: number) => {
    const totalPrevision = totals.prevision;
    if (totalPrevision === 0) return;

    setBudgetLines(lines => 
      lines.map(line => {
        const allocationRatio = line.prevision2025 / totalPrevision;
        const allocated = Math.round(totalAllocated * allocationRatio);
        const remaining = allocated - line.engaged;
        const engagementRate = allocated > 0 ? (line.engaged / allocated) * 100 : 0;
        
        return {
          ...line,
          allocated,
          remaining,
          engagementRate: Math.round(engagementRate * 100) / 100
        };
      })
    );
  };

  const handleExport = () => {
    setShowExportView(true);
    setTimeout(() => {
      window.print();
      setShowExportView(false);
    }, 500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponible": return "bg-green-100 text-green-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "Alerte": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (showExportView) {
    return (
      <BudgetExportView
        year={selectedYear}
        budgetLines={budgetLines}
        totalPrevision={totals.prevision}
        totalAllocated={totals.allocated}
        totalEngaged={totals.engaged}
        totalRemaining={totals.remaining}
      />
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Budget & Prévisions</h1>
          <p className="text-muted-foreground">Planification et suivi budgétaire</p>
        </div>
        <div className="flex gap-2">
          <BudgetFilters
            selectedYear={selectedYear}
            onYearChange={setSelectedYear}
            onExport={handleExport}
          />
          <AllocatedBudgetForm
            currentYear={selectedYear}
            onAllocatedBudgetUpdate={handleAllocatedBudgetUpdate}
          />
          <AddBudgetLineForm
            budgetLines={budgetLines}
            onAddLine={handleAddLine}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget Prévu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totals.prevision / 1000000).toFixed(1)} M FCFA</div>
            <p className="text-xs text-muted-foreground">Prévision {selectedYear}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Budget Alloué</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totals.allocated / 1000000).toFixed(1)} M FCFA</div>
            <p className="text-xs text-muted-foreground">Exercice {selectedYear}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Engagé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totals.engaged / 1000000).toFixed(1)} M FCFA</div>
            <p className="text-xs text-muted-foreground">{totals.allocated > 0 ? Math.round((totals.engaged / totals.allocated) * 100) : 0}% du budget</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Disponible</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totals.remaining / 1000000).toFixed(1)} M FCFA</div>
            <p className="text-xs text-muted-foreground">{totals.allocated > 0 ? Math.round((totals.remaining / totals.allocated) * 100) : 0}% restant</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Taux d'engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals.allocated > 0 ? Math.round((totals.engaged / totals.allocated) * 100) : 0}%</div>
            <p className="text-xs text-muted-foreground">Au {new Date().toLocaleDateString('fr-FR')}</p>
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
                  <th className="text-right p-4 font-medium">Prévision (FCFA)</th>
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
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleEditLine(line)}
                      >
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

      <EditBudgetLineForm
        line={editingLine}
        open={editFormOpen}
        onOpenChange={setEditFormOpen}
        onUpdateLine={handleUpdateLine}
      />
    </div>
  );
};

export default Budget;