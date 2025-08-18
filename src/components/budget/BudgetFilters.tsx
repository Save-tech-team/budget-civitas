import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Download } from "lucide-react";

interface BudgetFiltersProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  onExport: () => void;
}

const BudgetFilters = ({ selectedYear, onYearChange, onExport }: BudgetFiltersProps) => {
  const years = Array.from({ length: 26 }, (_, i) => 2025 + i); // 2025 to 2050

  return (
    <div className="flex gap-2">
      <Select value={selectedYear.toString()} onValueChange={(value) => onYearChange(parseInt(value))}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Année" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="outline" size="sm" onClick={onExport}>
        <Download className="h-4 w-4 mr-2" />
        Exporter {selectedYear}
      </Button>
    </div>
  );
};

export default BudgetFilters;