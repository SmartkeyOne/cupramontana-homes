
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

const NetIncomeCalculator = () => {
  const [grossSalary, setGrossSalary] = useState<string>('2000');
  const [netSalary, setNetSalary] = useState<number | null>(null);
  const [deductions, setDeductions] = useState<{
    incomeTax: number;
    socialSecurity: number;
    regional: number;
    municipal: number;
    pension: number;
  }>({
    incomeTax: 0,
    socialSecurity: 0,
    regional: 0,
    municipal: 0,
    pension: 0
  });
  
  // Default tax rates for Italy
  const taxRates = {
    incomeTax: 20, // 20% Einkommensteuer
    socialSecurity: 10, // 10% Sozialversicherung
    regional: 1.5, // 1.5% Regionalsteuer
    municipal: 0.8, // 0.8% Gemeindesteuer
    pension: 1, // 1% Rentenbeitrag
  };
  
  // Calculate net salary whenever gross salary changes
  useEffect(() => {
    calculateNetSalary();
  }, [grossSalary]);
  
  const calculateNetSalary = () => {
    const gross = parseFloat(grossSalary) || 0;
    
    const incomeTax = gross * taxRates.incomeTax / 100;
    const socialSecurity = gross * taxRates.socialSecurity / 100;
    const regional = gross * taxRates.regional / 100;
    const municipal = gross * taxRates.municipal / 100;
    const pension = gross * taxRates.pension / 100;
    
    const totalDeductions = incomeTax + socialSecurity + regional + municipal + pension;
    const net = gross - totalDeductions;
    
    setDeductions({
      incomeTax,
      socialSecurity,
      regional,
      municipal,
      pension
    });
    
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
          
          {netSalary !== null && (
            <div className="mt-4 p-4 bg-muted rounded-md">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Bruttogehalt:</span>
                  <span className="font-medium">{formatCurrency(parseFloat(grossSalary) || 0)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Einkommensteuer ({taxRates.incomeTax}%):</span>
                  <span>- {formatCurrency(deductions.incomeTax)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Sozialversicherung ({taxRates.socialSecurity}%):</span>
                  <span>- {formatCurrency(deductions.socialSecurity)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Regionalsteuer ({taxRates.regional}%):</span>
                  <span>- {formatCurrency(deductions.regional)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Gemeindesteuer ({taxRates.municipal}%):</span>
                  <span>- {formatCurrency(deductions.municipal)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Rentenbeitrag ({taxRates.pension}%):</span>
                  <span>- {formatCurrency(deductions.pension)}</span>
                </div>
                <div className="border-t border-border mt-3 pt-3 font-semibold flex justify-between">
                  <span>Nettogehalt:</span>
                  <span>{formatCurrency(netSalary)}</span>
                </div>
              </div>
            </div>
          )}
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          Hinweis: Diese Berechnung basiert auf Standardsätzen für obligatorische Abzüge in Italien (Stand 2024). Individuelle Umstände können zu Abweichungen führen.
        </p>
      </CardContent>
    </Card>
  );
};

export default NetIncomeCalculator;
