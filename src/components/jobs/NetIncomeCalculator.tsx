
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const NetIncomeCalculator = () => {
  const [grossSalary, setGrossSalary] = useState<string>('2000');
  const [taxRate, setTaxRate] = useState<string>('20');
  const [socialRate, setSocialRate] = useState<string>('10');
  const [netSalary, setNetSalary] = useState<number | null>(null);
  
  // Calculate net salary whenever inputs change
  useEffect(() => {
    calculateNetSalary();
  }, [grossSalary, taxRate, socialRate]);
  
  const calculateNetSalary = () => {
    const gross = parseFloat(grossSalary) || 0;
    const tax = gross * (parseFloat(taxRate) || 0) / 100;
    const social = gross * (parseFloat(socialRate) || 0) / 100;
    const net = gross - tax - social;
    setNetSalary(net);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateNetSalary();
  };
  
  const formatCurrency = (value: number): string => {
    return value.toFixed(2).replace('.', ',') + ' €';
  };
  
  return (
    <div>
      <h4 className="font-semibold mb-3">Nettogehalt-Rechner</h4>
      <form onSubmit={handleSubmit} className="bg-card p-4 rounded-md shadow-sm">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="grossSalary">Bruttogehalt (€)</Label>
            <Input
              id="grossSalary"
              type="number"
              min="0"
              value={grossSalary}
              onChange={(e) => setGrossSalary(e.target.value)}
              placeholder="2000"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="taxRate">Einkommensteuer (%)</Label>
            <Input
              id="taxRate"
              type="number"
              min="0"
              max="100"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              placeholder="20"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="socialRate">Sozialversicherung (%)</Label>
            <Input
              id="socialRate"
              type="number"
              min="0"
              max="100"
              value={socialRate}
              onChange={(e) => setSocialRate(e.target.value)}
              placeholder="10"
            />
          </div>
          
          <Button type="submit" className="w-full">
            <Calculator className="h-4 w-4 mr-2" />
            Berechnen
          </Button>
          
          {netSalary !== null && (
            <div className="p-3 bg-muted rounded-md mt-2">
              <div className="text-sm">
                <div className="flex justify-between">
                  <span>Bruttogehalt:</span>
                  <span>{formatCurrency(parseFloat(grossSalary) || 0)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Steuern:</span>
                  <span>- {formatCurrency((parseFloat(grossSalary) || 0) * (parseFloat(taxRate) || 0) / 100)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Sozialabgaben:</span>
                  <span>- {formatCurrency((parseFloat(grossSalary) || 0) * (parseFloat(socialRate) || 0) / 100)}</span>
                </div>
                <div className="border-t border-border mt-2 pt-2 font-semibold flex justify-between">
                  <span>Nettogehalt:</span>
                  <span>{formatCurrency(netSalary)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
      <p className="text-xs text-muted-foreground mt-2">
        Hinweis: Diese Berechnung ist vereinfacht und dient nur zu Informationszwecken.
      </p>
    </div>
  );
};

export default NetIncomeCalculator;
