
import React from 'react';
import RegionalAdvantages from './RegionalAdvantages';
import InternationalWorkforceTable from './InternationalWorkforceTable';
import { useLanguage } from '../../contexts/LanguageContext';

const RegionOverview = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-muted p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{t('jobs.region.title')}</h2>
      <p className="mb-4">
        {t('jobs.region.description')}
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>{t('jobs.region.feature1')}</li>
        <li>{t('jobs.region.feature2')}</li>
        <li>{t('jobs.region.feature3')}</li>
      </ul>
      
      <RegionalAdvantages />
      <InternationalWorkforceTable />
    </div>
  );
};

export default RegionOverview;
