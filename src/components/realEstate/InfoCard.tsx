
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { useLanguage } from '../../contexts/LanguageContext';

interface InfoCardProps {
  titleKey: string;
  descriptionKey: string;
  items: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ titleKey, descriptionKey, items }) => {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {t(descriptionKey)}
        </CardDescription>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index}>{t(item)}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
