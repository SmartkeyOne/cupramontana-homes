
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PECCard: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('realestate.pec.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {t('realestate.pec.description')}
        </CardDescription>
        <div className="space-y-3 text-sm">
          <p>
            La PEC funziona come una normale e-mail, ma ha validità legale e serve come raccomandata elettronica.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Comunicazione ufficiale con le autorità</li>
            <li>Presentazione di documenti</li>
            <li>Ricezione di comunicazioni ufficiali</li>
            <li>Transazioni immobiliari</li>
          </ul>
          <p className="mt-4">
            È possibile richiedere un indirizzo PEC presso vari fornitori come Poste Italiane, Aruba o Infocert.
            I costi sono generalmente compresi tra 5 e 30€ all'anno.
          </p>
          <div className="mt-6 space-y-2">
            <p className="font-medium">Fornitori PEC consigliati:</p>
            <div className="flex items-center gap-2">
              <a href="https://www.poste.it/prodotti/posta-elettronica-certificata.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                Poste Italiane PEC <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.aruba.it/servizi/posta-certificata.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                Aruba PEC <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.infocert.it/prodotti/legalmail-pec/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                Infocert Legalmail <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PECCard;
