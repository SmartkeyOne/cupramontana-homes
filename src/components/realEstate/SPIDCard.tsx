
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SPIDCard: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('realestate.spid.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          {t('realestate.spid.description')}
        </CardDescription>
        <div className="space-y-3 text-sm">
          <p>
            Un account SPID è molto utile per gli acquirenti di immobili per accedere a vari servizi governativi:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Visualizzazione degli estratti catastali</li>
            <li>Presentazione di dichiarazioni fiscali</li>
            <li>Accesso ai servizi comunali</li>
            <li>Richiesta di permessi di costruzione</li>
          </ul>
          <p className="mt-4 font-medium">Come ottenere un account SPID:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Registrarsi presso un fornitore autorizzato (es. Poste ID)</li>
            <li>Identificarsi con un documento d'identità valido e codice fiscale</li>
            <li>Confermare la propria identità (di persona, via webcam o con firma elettronica)</li>
            <li>Dopo la verifica, riceverai le credenziali SPID</li>
          </ol>
          <p className="mt-4">
            Anche i cittadini stranieri possono richiedere un account SPID, ma è necessario un codice fiscale italiano.
          </p>

          <div className="mt-6 space-y-2">
            <p className="font-medium">Link SPID ufficiali:</p>
            <div className="flex items-center gap-2">
              <a href="https://www.spid.gov.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                Sito ufficiale SPID <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://posteid.poste.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                Poste ID (fornitore SPID) <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/richiesta-ts_cf/come-si-richiede-il-codice-fiscale" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                Richiesta Codice Fiscale <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.spid.gov.it/en/what-is-spid/how-to-activate-spid/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                SPID per stranieri (Inglese) <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SPIDCard;
