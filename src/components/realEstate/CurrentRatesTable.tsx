
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useLanguage } from '../../contexts/LanguageContext';

const CurrentRatesTable: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-xl font-medium mb-4">{t('realestate.rates.title')}</h3>
        <p className="text-muted-foreground mb-6">
          {t('realestate.rates.updated')}
        </p>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('realestate.rates.bank')}</TableHead>
              <TableHead>{t('realestate.rates.fixed20')}</TableHead>
              <TableHead>{t('realestate.rates.fixed10')}</TableHead>
              <TableHead>{t('realestate.rates.variable')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Intesa Sanpaolo</TableCell>
              <TableCell>3.45%</TableCell>
              <TableCell>2.95%</TableCell>
              <TableCell>2.50%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>UniCredit</TableCell>
              <TableCell>3.60%</TableCell>
              <TableCell>3.10%</TableCell>
              <TableCell>2.70%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>BNL BNP Paribas</TableCell>
              <TableCell>3.50%</TableCell>
              <TableCell>3.00%</TableCell>
              <TableCell>2.60%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Banco BPM</TableCell>
              <TableCell>3.55%</TableCell>
              <TableCell>3.05%</TableCell>
              <TableCell>2.55%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
        <p className="text-xs text-muted-foreground mt-4">
          {t('realestate.rates.disclaimer')}
        </p>
      </CardContent>
    </Card>
  );
};

export default CurrentRatesTable;
