import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";

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

interface AddBudgetLineFormProps {
  budgetLines: BudgetLine[];
  onAddLine: (line: Omit<BudgetLine, 'id'>) => void;
}

const AddBudgetLineForm = ({ budgetLines, onAddLine }: AddBudgetLineFormProps) => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [nature, setNature] = useState("");
  const [isCategory, setIsCategory] = useState(true);
  const [parentId, setParentId] = useState<number | undefined>();
  const [prevision, setPrevision] = useState("");

  const categories = budgetLines.filter(line => line.isCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const previsionAmount = parseFloat(prevision) || 0;
    
    const newLine = {
      code,
      nature,
      isCategory,
      parentId: isCategory ? undefined : parentId,
      prevision2025: previsionAmount,
      allocated: 0,
      engaged: 0,
      remaining: 0,
      engagementRate: 0,
      status: "Disponible"
    };

    onAddLine(newLine);
    
    // Reset form
    setCode("");
    setNature("");
    setIsCategory(true);
    setParentId(undefined);
    setPrevision("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Nouvelle ligne
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Ajouter une ligne budgétaire</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="code">Code</Label>
              <Input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ex: 601"
                required
              />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Select value={isCategory ? "category" : "subcategory"} onValueChange={(value) => setIsCategory(value === "category")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category">Catégorie</SelectItem>
                  <SelectItem value="subcategory">Sous-catégorie</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {!isCategory && (
            <div>
              <Label htmlFor="parent">Catégorie parent</Label>
              <Select value={parentId?.toString()} onValueChange={(value) => setParentId(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner une catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>
                      {category.code} - {category.nature}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div>
            <Label htmlFor="nature">Nature de dépense</Label>
            <Textarea
              id="nature"
              value={nature}
              onChange={(e) => setNature(e.target.value)}
              placeholder="Description de la nature de dépense"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="prevision">Prévision (FCFA)</Label>
            <Input
              id="prevision"
              type="number"
              value={prevision}
              onChange={(e) => setPrevision(e.target.value)}
              placeholder="Montant prévu"
              required
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit">
              Ajouter
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBudgetLineForm;