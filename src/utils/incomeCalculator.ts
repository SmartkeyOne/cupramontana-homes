
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

// Einkommensübersicht mit Beispielen für verschiedene Gehaltsklassen
export const incomeRangeExamples = [
  {
    range: "1.000 € (Niedrig)",
    grossSalary: 1000,
    incomeTaxRate: calculateIncomeTaxRate(1000),
    socialSecurityRate: calculateSocialSecurityRate(1000),
    regionalRate: calculateRegionalRate(1000),
    municipalRate: calculateMunicipalRate(1000),
    pensionRate: calculatePensionRate(1000),
  },
  {
    range: "2.000 € (Mittel)",
    grossSalary: 2000,
    incomeTaxRate: calculateIncomeTaxRate(2000),
    socialSecurityRate: calculateSocialSecurityRate(2000),
    regionalRate: calculateRegionalRate(2000),
    municipalRate: calculateMunicipalRate(2000),
    pensionRate: calculatePensionRate(2000),
  },
  {
    range: "3.500 € (Gehoben)",
    grossSalary: 3500,
    incomeTaxRate: calculateIncomeTaxRate(3500),
    socialSecurityRate: calculateSocialSecurityRate(3500),
    regionalRate: calculateRegionalRate(3500),
    municipalRate: calculateMunicipalRate(3500),
    pensionRate: calculatePensionRate(3500),
  },
  {
    range: "5.000 € (Hoch)",
    grossSalary: 5000,
    incomeTaxRate: calculateIncomeTaxRate(5000),
    socialSecurityRate: calculateSocialSecurityRate(5000),
    regionalRate: calculateRegionalRate(5000),
    municipalRate: calculateMunicipalRate(5000),
    pensionRate: calculatePensionRate(5000),
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
