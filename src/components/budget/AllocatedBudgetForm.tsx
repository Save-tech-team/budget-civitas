import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Settings } from "lucide-react";

interface AllocatedBudgetFormProps {
  currentYear: number;
  onAllocatedBudgetUpdate: (amount: number) => void;
}

const AllocatedBudgetForm = ({ currentYear, onAllocatedBudgetUpdate }: AllocatedBudgetFormProps) => {
  const [open, setOpen] = useState(false);
  const [allocatedAmount, setAllocatedAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = parseFloat(allocatedAmount) || 0;
    onAllocatedBudgetUpdate(amount);
    
    setAllocatedAmount("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4 mr-2" />
          Définir budget alloué {currentYear}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Budget alloué pour {currentYear}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="allocated">Montant total alloué (FCFA)</Label>
            <Input
              id="allocated"
              type="number"
              value={allocatedAmount}
              onChange={(e) => setAllocatedAmount(e.target.value)}
              placeholder="Ex: 14400000"
              required
            />
            <p className="text-sm text-muted-foreground mt-1">
              Ce montant sera réparti automatiquement selon les prévisions
            </p>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit">
              Définir
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AllocatedBudgetForm;