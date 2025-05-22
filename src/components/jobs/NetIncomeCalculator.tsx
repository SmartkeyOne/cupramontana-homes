
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
  const [taxRate, setTaxRate] = useState<string>('20');
  const [socialRate, setSocialRate] = useState<string>('10');
  const [regionalTax, setRegionalTax] = useState<string>('1.5');
  const [municipalTax, setMunicipalTax] = useState<string>('0.8');
  const [pensionFund, setPensionFund] = useState<string>('1');
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
  
  // Calculate net salary whenever inputs change
  useEffect(() => {
    calculateNetSalary();
  }, [grossSalary, taxRate, socialRate, regionalTax, municipalTax, pensionFund]);
  
  const calculateNetSalary = () => {
    const gross = parseFloat(grossSalary) || 0;
    
    const incomeTax = gross * (parseFloat(taxRate) || 0) / 100;
    const socialSecurity = gross * (parseFloat(socialRate) || 0) / 100;
    const regional = gross * (parseFloat(regionalTax) || 0) / 100;
    const municipal = gross * (parseFloat(municipalTax) || 0) / 100;
    const pension = gross * (parseFloat(pensionFund) || 0) / 100;
    
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
          Berechnen Sie Ihr Nettogehalt mit allen obligatorischen Abzügen
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
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
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
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="regionalTax">Regionalsteuer (%)</Label>
              <Input
                id="regionalTax"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={regionalTax}
                onChange={(e) => setRegionalTax(e.target.value)}
                placeholder="1.5"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="municipalTax">Gemeindesteuer (%)</Label>
              <Input
                id="municipalTax"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={municipalTax}
                onChange={(e) => setMunicipalTax(e.target.value)}
                placeholder="0.8"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="pensionFund">Rentenbeitrag (%)</Label>
              <Input
                id="pensionFund"
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={pensionFund}
                onChange={(e) => setPensionFund(e.target.value)}
                placeholder="1"
              />
            </div>
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
                  <span>Einkommensteuer:</span>
                  <span>- {formatCurrency(deductions.incomeTax)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Sozialversicherung:</span>
                  <span>- {formatCurrency(deductions.socialSecurity)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Regionalsteuer:</span>
                  <span>- {formatCurrency(deductions.regional)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Gemeindesteuer:</span>
                  <span>- {formatCurrency(deductions.municipal)}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Rentenbeitrag:</span>
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
          Hinweis: Diese Berechnung berücksichtigt die grundlegenden Pflichtabzüge in Italien. Je nach individueller Situation können weitere Abzüge anfallen.
        </p>
      </CardContent>
    </Card>
  );
};

export default NetIncomeCalculator;
