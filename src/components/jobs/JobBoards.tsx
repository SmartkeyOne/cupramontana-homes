
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const JobBoards = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Jobbörsen</h2>
      <div className="space-y-6 mb-16">
        <div className="bg-muted p-6 rounded-lg">
          <div className="mt-6">
            <h3 className="font-medium mb-2">{t('jobs.resources.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.indeed.it/offerte-lavoro-Cupramontana" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  Indeed Italia <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://it.linkedin.com/jobs/cupramontana-offerte-di-lavoro" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://www.regione.marche.it/Regione-Utile/Lavoro-e-Formazione-Professionale" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  Regione Marche - Arbeit und Berufsbildung <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://www.monster.it/lavoro/q-cupramontana-provincia-di-ancona" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  Monster Italien <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://www.subito.it/annunci-italia/vendita/offerte-lavoro/ancona/cupramontana/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  Subito.it Stellenangebote <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              Stand: Mai 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoards;
