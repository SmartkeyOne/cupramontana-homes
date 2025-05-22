
export interface DeductionsType {
  incomeTax: number;
  socialSecurity: number;
  regional: number;
  municipal: number;
  pension: number;
}

export interface TaxRatesType {
  incomeTax: number;
  socialSecurity: number;
  regional: number;
  municipal: number;
  pension: number;
}

export const formatCurrency = (value: number): string => {
  return value.toFixed(2).replace('.', ',') + ' €';
};

export const calculateDeductions = (
  grossSalary: number,
  taxRates: TaxRatesType
): { deductions: DeductionsType; netSalary: number } => {
  const incomeTax = grossSalary * taxRates.incomeTax / 100;
  const socialSecurity = grossSalary * taxRates.socialSecurity / 100;
  const regional = grossSalary * taxRates.regional / 100;
  const municipal = grossSalary * taxRates.municipal / 100;
  const pension = grossSalary * taxRates.pension / 100;
  
  const deductions = {
    incomeTax,
    socialSecurity,
    regional,
    municipal,
    pension
  };
  
  const totalDeductions = incomeTax + socialSecurity + regional + municipal + pension;
  const netSalary = grossSalary - totalDeductions;
  
  return { deductions, netSalary };
};

// Default tax rates for Italy
export const defaultTaxRates: TaxRatesType = {
  incomeTax: 20, // 20% Einkommensteuer
  socialSecurity: 10, // 10% Sozialversicherung
  regional: 1.5, // 1.5% Regionalsteuer
  municipal: 0.8, // 0.8% Gemeindesteuer
  pension: 1, // 1% Rentenbeitrag
};
