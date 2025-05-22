
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import PECCard from './PECCard';
import SPIDCard from './SPIDCard';

const DigitalIdentitySection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">{t('realestate.digital.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PECCard />
        <SPIDCard />
      </div>
    </div>
  );
};

export default DigitalIdentitySection;
