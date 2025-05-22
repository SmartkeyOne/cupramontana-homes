
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NetIncomeResult from './NetIncomeResult';
import { 
  calculateDeductions, 
  formatCurrency,
  DeductionsType,
  TaxRatesType
} from '@/utils/incomeCalculator';

const NetIncomeCalculator = () => {
  const [grossSalary, setGrossSalary] = useState<string>('2000');
  const [netSalary, setNetSalary] = useState<number | null>(null);
  const [deductions, setDeductions] = useState<DeductionsType>({
    incomeTax: 0,
    socialSecurity: 0,
    regional: 0,
    municipal: 0,
    pension: 0
  });
  const [appliedRates, setAppliedRates] = useState<TaxRatesType>({
    incomeTax: 0,
    socialSecurity: 0,
    regional: 0,
    municipal: 0,
    pension: 0
  });
  
  // Calculate net salary whenever gross salary changes
  useEffect(() => {
    calculateNetSalary();
  }, [grossSalary]);
  
  const calculateNetSalary = () => {
    const gross = parseFloat(grossSalary) || 0;
    const { deductions: calculatedDeductions, netSalary: calculatedNetSalary, appliedRates: calculatedRates } = calculateDeductions(gross);
    
    setDeductions(calculatedDeductions);
    setNetSalary(calculatedNetSalary);
    setAppliedRates(calculatedRates);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateNetSalary();
  };
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Nettogehalt-Rechner</CardTitle>
        <CardDescription>
          Geben Sie Ihr Bruttogehalt ein und sehen Sie das geschätzte Nettogehalt
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="grossSalary">Bruttogehalt (€)</Label>
            <Input
              id="grossSalary"
              type="number"
              min="0"
              value={grossSalary}
              onChange={(e) => setGrossSalary(e.target.value)}
              placeholder="2000"
              className="text-lg"
            />
          </div>
          
          <Button type="submit" className="w-full">
            <Calculator className="h-4 w-4 mr-2" />
            Berechnen
          </Button>
          
          <NetIncomeResult
            netSalary={netSalary}
            grossSalary={grossSalary}
            deductions={deductions}
            appliedRates={appliedRates}
            formatCurrency={formatCurrency}
          />
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          Hinweis: Diese Berechnung basiert auf Standardsätzen für obligatorische Abzüge in Italien (Stand 2024). Die Steuersätze variieren je nach Bruttogehalt. Individuelle Umstände können zu Abweichungen führen.
        </p>
      </CardContent>
    </Card>
  );
};

export default NetIncomeCalculator;
