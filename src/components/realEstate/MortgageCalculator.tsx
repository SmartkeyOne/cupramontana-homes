
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../../contexts/LanguageContext';

interface MortgageCalculatorProps {
  formatCurrency: (value: number | null) => string;
}

const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ formatCurrency }) => {
  const { t } = useLanguage();
  const [loanAmount, setLoanAmount] = useState<string>("200000");
  const [interestRate, setInterestRate] = useState<string>("3.2");
  const [loanTerm, setLoanTerm] = useState<string>("25");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  // Calculate mortgage payment, total interest, and total payment
  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount) || 0;
    const interest = (parseFloat(interestRate) || 0) / 100 / 12;
    const payments = (parseFloat(loanTerm) || 0) * 12;
    
    if (principal > 0 && interest > 0 && payments > 0) {
      // Formula for monthly payment: P * r * (1+r)^n / ((1+r)^n - 1)
      const monthly = (principal * interest * Math.pow(1 + interest, payments)) / (Math.pow(1 + interest, payments) - 1);
      
      setMonthlyPayment(monthly);
      setTotalInterest((monthly * payments) - principal);
      setTotalPayment(monthly * payments);
    } else {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalPayment(0);
    }
  };

  // Run calculation when input values change
  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-muted-foreground mb-4">
              {t('realestate.mortgage.help')}
            </p>
            <p className="text-sm mb-6">
              {t('realestate.mortgage.instruction')}
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">{t('realestate.mortgage.loanamount')}</label>
                <input 
                  type="number" 
                  className="w-full p-2 border rounded" 
                  placeholder="z.B. 200000" 
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">{t('realestate.mortgage.interestrate')}</label>
                <input 
                  type="number" 
                  className="w-full p-2 border rounded" 
                  placeholder="z.B. 3.2" 
                  step="0.1" 
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">{t('realestate.mortgage.term')}</label>
                <input 
                  type="number" 
                  className="w-full p-2 border rounded" 
                  placeholder="z.B. 25" 
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-6 rounded-md">
            <h3 className="text-xl font-medium mb-4">{t('realestate.mortgage.result')}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">{t('realestate.mortgage.monthlypayment')}</p>
                <p className="text-2xl font-bold">{formatCurrency(monthlyPayment)}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">{t('realestate.mortgage.totalinterest')}</p>
                <p className="text-lg font-semibold">{formatCurrency(totalInterest)}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">{t('realestate.mortgage.totalpayment')}</p>
                <p className="text-lg font-semibold">{formatCurrency(totalPayment)}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MortgageCalculator;
