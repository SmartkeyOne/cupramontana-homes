
import React from 'react';

interface DeductionsType {
  incomeTax: number;
  socialSecurity: number;
  regional: number;
  municipal: number;
  pension: number;
}

interface NetIncomeResultProps {
  netSalary: number | null;
  grossSalary: string;
  deductions: DeductionsType;
  appliedRates: {
    incomeTax: number;
    socialSecurity: number;
    regional: number;
    municipal: number;
    pension: number;
  };
  formatCurrency: (value: number) => string;
}

const NetIncomeResult = ({ 
  netSalary, 
  grossSalary, 
  deductions, 
  appliedRates,
  formatCurrency 
}: NetIncomeResultProps) => {
  if (netSalary === null) return null;
  
  return (
    <div className="mt-4 p-4 bg-muted rounded-md">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Bruttogehalt:</span>
          <span className="font-medium">{formatCurrency(parseFloat(grossSalary) || 0)}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Einkommensteuer ({appliedRates.incomeTax}%):</span>
          <span>- {formatCurrency(deductions.incomeTax)}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Sozialversicherung ({appliedRates.socialSecurity}%):</span>
          <span>- {formatCurrency(deductions.socialSecurity)}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Regionalsteuer ({appliedRates.regional}%):</span>
          <span>- {formatCurrency(deductions.regional)}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Gemeindesteuer ({appliedRates.municipal}%):</span>
          <span>- {formatCurrency(deductions.municipal)}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Rentenbeitrag ({appliedRates.pension}%):</span>
          <span>- {formatCurrency(deductions.pension)}</span>
        </div>
        <div className="border-t border-border mt-3 pt-3 font-semibold flex justify-between">
          <span>Nettogehalt:</span>
          <span>{formatCurrency(netSalary)}</span>
        </div>
      </div>
    </div>
  );
};

export default NetIncomeResult;
