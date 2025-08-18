import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

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

interface EditBudgetLineFormProps {
  line: BudgetLine | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateLine: (line: BudgetLine) => void;
}

const EditBudgetLineForm = ({ line, open, onOpenChange, onUpdateLine }: EditBudgetLineFormProps) => {
  const [code, setCode] = useState("");
  const [nature, setNature] = useState("");
  const [prevision, setPrevision] = useState("");
  const [allocated, setAllocated] = useState("");
  const [engaged, setEngaged] = useState("");

  // Update form when line changes
  React.useEffect(() => {
    if (line) {
      setCode(line.code);
      setNature(line.nature);
      setPrevision(line.prevision2025.toString());
      setAllocated(line.allocated.toString());
      setEngaged(line.engaged.toString());
    }
  }, [line]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!line) return;
    
    const previsionAmount = parseFloat(prevision) || 0;
    const allocatedAmount = parseFloat(allocated) || 0;
    const engagedAmount = parseFloat(engaged) || 0;
    const remaining = allocatedAmount - engagedAmount;
    const engagementRate = allocatedAmount > 0 ? (engagedAmount / allocatedAmount) * 100 : 0;
    
    const updatedLine: BudgetLine = {
      ...line,
      code,
      nature,
      prevision2025: previsionAmount,
      allocated: allocatedAmount,
      engaged: engagedAmount,
      remaining,
      engagementRate: Math.round(engagementRate * 100) / 100
    };

    onUpdateLine(updatedLine);
    onOpenChange(false);
  };

  if (!line) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Modifier la ligne budgétaire</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-code">Code</Label>
              <Input
                id="edit-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <div>
              <Label>Type</Label>
              <Input value={line.isCategory ? "Catégorie" : "Sous-catégorie"} disabled />
            </div>
          </div>
          
          <div>
            <Label htmlFor="edit-nature">Nature de dépense</Label>
            <Textarea
              id="edit-nature"
              value={nature}
              onChange={(e) => setNature(e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="edit-prevision">Prévision (FCFA)</Label>
              <Input
                id="edit-prevision"
                type="number"
                value={prevision}
                onChange={(e) => setPrevision(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="edit-allocated">Alloué (FCFA)</Label>
              <Input
                id="edit-allocated"
                type="number"
                value={allocated}
                onChange={(e) => setAllocated(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="edit-engaged">Engagé (FCFA)</Label>
            <Input
              id="edit-engaged"
              type="number"
              value={engaged}
              onChange={(e) => setEngaged(e.target.value)}
              required
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Annuler
            </Button>
            <Button type="submit">
              Modifier
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBudgetLineForm;