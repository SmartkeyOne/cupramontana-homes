
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '../../contexts/LanguageContext';
import MortgageCalculator from './MortgageCalculator';
import CurrentRatesTable from './CurrentRatesTable';

interface MortgageTabsProps {
  formatCurrency: (value: number | null) => string;
}

const MortgageTabs: React.FC<MortgageTabsProps> = ({ formatCurrency }) => {
  const { t } = useLanguage();
  
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">{t('realestate.mortgage.title')}</h2>
      <Tabs defaultValue="calculator">
        <TabsList className="mb-6">
          <TabsTrigger value="calculator">{t('realestate.tabs.calculator')}</TabsTrigger>
          <TabsTrigger value="rates">{t('realestate.tabs.rates')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="calculator" className="space-y-6">
          <MortgageCalculator formatCurrency={formatCurrency} />
        </TabsContent>
        
        <TabsContent value="rates">
          <CurrentRatesTable />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default MortgageTabs;
