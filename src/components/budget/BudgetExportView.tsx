import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

interface BudgetExportViewProps {
  year: number;
  budgetLines: BudgetLine[];
  totalPrevision: number;
  totalAllocated: number;
  totalEngaged: number;
  totalRemaining: number;
}

const BudgetExportView = ({
  year,
  budgetLines,
  totalPrevision,
  totalAllocated,
  totalEngaged,
  totalRemaining
}: BudgetExportViewProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponible": return "bg-green-100 text-green-800";
      case "En cours": return "bg-blue-100 text-blue-800";
      case "Alerte": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-8 bg-white text-black print:shadow-none" style={{ fontFamily: 'Times, serif' }}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">BUDGET PRÉVISIONNEL {year}</h1>
        <h2 className="text-lg">Planification et Suivi Budgétaire</h2>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Budget Prévu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{totalPrevision.toLocaleString()} FCFA</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Budget Alloué</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{totalAllocated.toLocaleString()} FCFA</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Engagé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{totalEngaged.toLocaleString()} FCFA</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Disponible</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">{totalRemaining.toLocaleString()} FCFA</div>
          </CardContent>
        </Card>
      </div>

      {/* Budget Lines Table */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">Lignes Budgétaires</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left text-xs">Code</th>
              <th className="border border-gray-300 p-2 text-left text-xs">Nature de dépense</th>
              <th className="border border-gray-300 p-2 text-right text-xs">Prévision {year} (FCFA)</th>
              <th className="border border-gray-300 p-2 text-right text-xs">Alloué (FCFA)</th>
              <th className="border border-gray-300 p-2 text-right text-xs">Engagé (FCFA)</th>
              <th className="border border-gray-300 p-2 text-right text-xs">Disponible (FCFA)</th>
              <th className="border border-gray-300 p-2 text-center text-xs">Taux (%)</th>
              <th className="border border-gray-300 p-2 text-center text-xs">Statut</th>
            </tr>
          </thead>
          <tbody>
            {budgetLines.map((line) => (
              <tr 
                key={line.id} 
                className={line.isCategory ? 'bg-yellow-50 font-semibold' : ''}
              >
                <td className="border border-gray-300 p-2 text-xs">{line.code}</td>
                <td className={`border border-gray-300 p-2 text-xs ${line.isCategory ? 'font-bold' : 'pl-4'}`}>
                  {line.nature}
                </td>
                <td className="border border-gray-300 p-2 text-right text-xs">{line.prevision2025.toLocaleString()}</td>
                <td className="border border-gray-300 p-2 text-right text-xs">{line.allocated.toLocaleString()}</td>
                <td className="border border-gray-300 p-2 text-right text-xs">{line.engaged.toLocaleString()}</td>
                <td className="border border-gray-300 p-2 text-right text-xs">{line.remaining.toLocaleString()}</td>
                <td className="border border-gray-300 p-2 text-center text-xs">{line.engagementRate}%</td>
                <td className="border border-gray-300 p-2 text-center text-xs">
                  <Badge className={getStatusColor(line.status)}>{line.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Signature Section */}
      <div className="mt-16 grid grid-cols-3 gap-8">
        <div className="text-center">
          <div className="border-2 border-gray-400 h-24 mb-2"></div>
          <p className="text-sm font-bold">Chef Service Budget et Subvention</p>
        </div>
        <div className="text-center">
          <div className="border-2 border-gray-400 h-24 mb-2"></div>
          <p className="text-sm font-bold">Chef DASE</p>
        </div>
        <div className="text-center">
          <div className="border-2 border-gray-400 h-24 mb-2"></div>
          <p className="text-sm font-bold">Coordonnateur National</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        Document généré le {new Date().toLocaleDateString('fr-FR')}
      </div>
    </div>
  );
};

export default BudgetExportView;