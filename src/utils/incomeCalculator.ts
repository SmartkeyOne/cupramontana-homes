
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

// Berechnet den Einkommensteuersatz basierend auf dem Bruttogehalt
const calculateIncomeTaxRate = (grossSalary: number): number => {
  if (grossSalary <= 1000) return 15;
  if (grossSalary <= 2000) return 20;
  if (grossSalary <= 3000) return 25;
  if (grossSalary <= 4000) return 30;
  return 35; // Für Gehälter über 4000€
};

// Berechnet den Sozialversicherungssatz basierend auf dem Bruttogehalt
const calculateSocialSecurityRate = (grossSalary: number): number => {
  if (grossSalary <= 1500) return 9;
  if (grossSalary <= 3000) return 10;
  return 11; // Für Gehälter über 3000€
};

// Berechnet den Regionalsteuersatz basierend auf dem Bruttogehalt
const calculateRegionalRate = (grossSalary: number): number => {
  if (grossSalary <= 2000) return 1.2;
  if (grossSalary <= 3500) return 1.5;
  return 1.8; // Für Gehälter über 3500€
};

// Berechnet den Gemeindesteuersatz basierend auf dem Bruttogehalt
const calculateMunicipalRate = (grossSalary: number): number => {
  if (grossSalary <= 2500) return 0.7;
  return 0.8; // Für Gehälter über 2500€
};

// Berechnet den Rentenbeitragssatz basierend auf dem Bruttogehalt
const calculatePensionRate = (grossSalary: number): number => {
  if (grossSalary <= 2000) return 0.8;
  return 1.0; // Für Gehälter über 2000€
};

export const calculateDeductions = (
  grossSalary: number
): { deductions: DeductionsType; netSalary: number; appliedRates: TaxRatesType } => {
  // Berechne die individuellen Steuersätze basierend auf dem Bruttogehalt
  const incomeTaxRate = calculateIncomeTaxRate(grossSalary);
  const socialSecurityRate = calculateSocialSecurityRate(grossSalary);
  const regionalRate = calculateRegionalRate(grossSalary);
  const municipalRate = calculateMunicipalRate(grossSalary);
  const pensionRate = calculatePensionRate(grossSalary);
  
  // Speichere die angewendeten Steuersätze
  const appliedRates = {
    incomeTax: incomeTaxRate,
    socialSecurity: socialSecurityRate,
    regional: regionalRate,
    municipal: municipalRate,
    pension: pensionRate
  };
  
  // Berechne die Abzüge basierend auf den berechneten Steuersätzen
  const incomeTax = grossSalary * incomeTaxRate / 100;
  const socialSecurity = grossSalary * socialSecurityRate / 100;
  const regional = grossSalary * regionalRate / 100;
  const municipal = grossSalary * municipalRate / 100;
  const pension = grossSalary * pensionRate / 100;
  
  const deductions = {
    incomeTax,
    socialSecurity,
    regional,
    municipal,
    pension
  };
  
  const totalDeductions = incomeTax + socialSecurity + regional + municipal + pension;
  const netSalary = grossSalary - totalDeductions;
  
  return { deductions, netSalary, appliedRates };
};

// Detaillierte Einkommensübersicht mit präzisen Steuerbandbreiten
export const incomeRangeExamples = [
  {
    range: "bis 1.000 €",
    grossSalary: 1000,
    incomeTaxRate: 15,
    socialSecurityRate: 9,
    regionalRate: 1.2,
    municipalRate: 0.7,
    pensionRate: 0.8,
    bandWidth: "0 € - 1.000 €"
  },
  {
    range: "1.001 € - 1.500 €",
    grossSalary: 1001,
    incomeTaxRate: 20,
    socialSecurityRate: 9,
    regionalRate: 1.2,
    municipalRate: 0.7,
    pensionRate: 0.8,
    bandWidth: "1.001 € - 1.500 €"
  },
  {
    range: "1.501 € - 2.000 €",
    grossSalary: 1501,
    incomeTaxRate: 20,
    socialSecurityRate: 10,
    regionalRate: 1.2,
    municipalRate: 0.7,
    pensionRate: 0.8,
    bandWidth: "1.501 € - 2.000 €"
  },
  {
    range: "2.001 € - 2.500 €",
    grossSalary: 2001,
    incomeTaxRate: 25,
    socialSecurityRate: 10,
    regionalRate: 1.5,
    municipalRate: 0.7,
    pensionRate: 1.0,
    bandWidth: "2.001 € - 2.500 €"
  },
  {
    range: "2.501 € - 3.000 €",
    grossSalary: 2501,
    incomeTaxRate: 25,
    socialSecurityRate: 10,
    regionalRate: 1.5,
    municipalRate: 0.8,
    pensionRate: 1.0,
    bandWidth: "2.501 € - 3.000 €"
  },
  {
    range: "3.001 € - 3.500 €",
    grossSalary: 3001,
    incomeTaxRate: 30,
    socialSecurityRate: 11,
    regionalRate: 1.5,
    municipalRate: 0.8,
    pensionRate: 1.0,
    bandWidth: "3.001 € - 3.500 €"
  },
  {
    range: "3.501 € - 4.000 €",
    grossSalary: 3501,
    incomeTaxRate: 30,
    socialSecurityRate: 11,
    regionalRate: 1.8,
    municipalRate: 0.8,
    pensionRate: 1.0,
    bandWidth: "3.501 € - 4.000 €"
  },
  {
    range: "über 4.000 €",
    grossSalary: 4001,
    incomeTaxRate: 35,
    socialSecurityRate: 11,
    regionalRate: 1.8,
    municipalRate: 0.8,
    pensionRate: 1.0,
    bandWidth: "ab 4.001 €"
  }
];

// Default tax rates sind jetzt veraltet, aber wir behalten sie für Kompatibilitätszwecke
export const defaultTaxRates: TaxRatesType = {
  incomeTax: 20,
  socialSecurity: 10,
  regional: 1.5,
  municipal: 0.8,
  pension: 1,
};
