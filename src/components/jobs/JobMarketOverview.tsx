
import React from 'react';
import EconomicIndicatorsTable from './EconomicIndicatorsTable';
import SectoralEmploymentTable from './SectoralEmploymentTable';
import { useLanguage } from '../../contexts/LanguageContext';

const JobMarketOverview = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{t('jobs.market.title')}</h2>
      <p className="mb-4">
        {t('jobs.market.description')}
      </p>
      <p className="mb-4">
        {t('jobs.market.opportunities')}
      </p>
      
      <EconomicIndicatorsTable />
      <SectoralEmploymentTable />
    </div>
  );
};

export default JobMarketOverview;
