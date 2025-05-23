
import React from 'react';
import SectorCard from './SectorCard';
import { Briefcase, User, UserPlus } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import NetIncomeCalculator from './NetIncomeCalculator';
import { incomeRangeExamples, calculateDeductions, formatCurrency } from '@/utils/incomeCalculator';
import { ScrollArea } from "@/components/ui/scroll-area";

const SectorOverview = () => {
  const { t } = useLanguage();
  
  const tourismJobs = [
    'Hotelfachangestellte und Rezeptionisten',
    'Touristenführer für Weintouren und historische Besichtigungen',
    'Restaurantpersonal und Sommeliers',
    'Event-Manager für lokale Festivals und Veranstaltungen',
    'Marketing-Spezialisten für Agrotourismus',
    'Online-Buchungsmanager und Social Media Manager'
  ];
  
  const tourismSalaries = [
    { position: 'Hotelfachangestellte', salary: '1.400-1.700' },
    { position: 'Restaurantleiter', salary: '1.800-2.300' },
    { position: 'Touristenführer', salary: 'Variable' }
  ];
  
  const agricultureJobs = [
    'Weinbauexperten und Kellermeister',
    'Saisonarbeiter für Weinlese und Olivenernte',
    'Bio-Landwirte und Agrarwissenschaftler',
    'Vertriebsmitarbeiter für lokale Produkte',
    'Agronom und Bodenspezialist',
    'Landwirtschaftliche Betriebsberater'
  ];
  
  const agricultureSalaries = [
    { position: 'Kellermeister', salary: '1.800-2.500' },
    { position: 'Landwirtschaftlicher Saisonarbeiter', salary: '1.200-1.500' },
    { position: 'Agrarwissenschaftler', salary: '1.900-2.700' }
  ];
  
  const craftJobs = [
    'Restauratoren für historische Gebäude',
    'Möbeltischler und Holzhandwerker',
    'Keramikkünstler und Glashandwerker',
    'Maurer mit Kenntnissen traditioneller Bautechniken',
    'Steinmetzen und Marmorbearbeitung',
    'Textilhandwerker und Kunstschneider'
  ];
  
  const craftSalaries = [
    { position: 'Restaurator', salary: '1.700-2.400' },
    { position: 'Spezialisierter Handwerker', salary: '1.500-2.200' },
    { position: 'Kunsthandwerker', salary: 'Variable' }
  ];
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('jobs.sectors.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SectorCard 
          title={t('jobs.sectors.tourism.title')}
          description={t('jobs.sectors.tourism.description')}
          jobs={tourismJobs}
          salaries={tourismSalaries}
          icon={<Briefcase className="h-6 w-6 text-primary" />}
          jobSource="Quelle: Tourismusverband Marche, Arbeitsmarktanalyse 2024"
          salarySource="Quelle: Gehaltsreport Tourismus Marche 2024"
        />
        
        <SectorCard 
          title={t('jobs.sectors.agriculture.title')}
          description={t('jobs.sectors.agriculture.description')}
          jobs={agricultureJobs}
          salaries={agricultureSalaries}
          icon={<User className="h-6 w-6 text-primary" />}
          jobSource="Quelle: Landwirtschaftsverband Marche, Stellenmarktbericht 2025"
          salarySource="Quelle: Landwirtschaftsministerium Marche, Gehaltsstudie 2024"
        />
        
        <SectorCard 
          title={t('jobs.sectors.craft.title')}
          description={t('jobs.sectors.craft.description')}
          jobs={craftJobs}
          salaries={craftSalaries}
          icon={<UserPlus className="h-6 w-6 text-primary" />}
          jobSource="Quelle: Handwerkskammer Marche, Berufstrends 2024-2025"
          salarySource="Quelle: Handwerksgilde Marche, Vergütungsindex 2024"
        />
      </div>
      
      <div className="bg-muted p-6 rounded-lg mb-16">
        <h3 className="text-xl font-bold mb-4">Monatliches Nettogehalt nach Abzügen</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Übersicht der monatlichen Einkommensklassen und Steuersätze</h4>
            <div className="bg-card p-4 rounded-md shadow-sm">
              <p className="mb-3">Steuersätze und Abzüge variieren je nach monatlichem Bruttogehalt - beachten Sie die Sprünge bei den Grenzen:</p>
              
              <div className="w-full">
                <ScrollArea className="h-auto max-h-[350px]">
                  <div className="w-full">
                    <table className="w-full text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-2 text-left">Gehaltsbereich</th>
                          <th className="p-2 text-right">Einkommensteuer</th>
                          <th className="p-2 text-right">Sozialvers.</th>
                          <th className="p-2 text-right">Regionalst.</th>
                          <th className="p-2 text-right">Gemeindest.</th>
                          <th className="p-2 text-right">Rente</th>
                        </tr>
                      </thead>
                      <tbody>
                        {incomeRangeExamples.map((example, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                            <td className="p-2 font-medium">{example.bandWidth}</td>
                            <td className="p-2 text-right">{example.incomeTaxRate}%</td>
                            <td className="p-2 text-right">{example.socialSecurityRate}%</td>
                            <td className="p-2 text-right">{example.regionalRate}%</td>
                            <td className="p-2 text-right">{example.municipalRate}%</td>
                            <td className="p-2 text-right">{example.pensionRate}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </ScrollArea>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                Die Steuersätze sind Schätzwerte für monatliche Gehälter in Italien und können je nach Region und individueller Situation variieren.
                Für eine genaue Berechnung empfehlen wir die Konsultation eines Steuerberaters.
              </p>
              
              <div className="bg-background/80 p-4 rounded-md mt-4 border border-muted">
                <h5 className="font-medium mb-2">Wie werden diese Steuern abgezogen?</h5>
                <p className="text-sm">
                  In Italien werden Steuern und Sozialabgaben in der Regel automatisch vom monatlichen Bruttogehalt abgezogen. Dies geschieht durch den Arbeitgeber 
                  im Rahmen eines Lohnsteuerabzugsverfahrens (ähnlich der deutschen Lohnsteuer). 
                </p>
                <p className="text-sm mt-2">
                  Sie müssen normalerweise <strong>keine</strong> monatlichen Steuererklärungen (wie das Formular F24) einreichen. 
                  Das F24-Formular wird hauptsächlich für andere steuerliche Zwecke verwendet, nicht für die reguläre monatliche Einkommensteuer.
                </p>
                <p className="text-sm mt-2">
                  Am Ende des Steuerjahres kann jedoch eine jährliche Steuererklärung (Modello 730 oder Modello Redditi) erforderlich sein, 
                  bei der zu viel oder zu wenig gezahlte Steuern ausgeglichen werden. 
                </p>
              </div>
            </div>
          </div>
          
          <NetIncomeCalculator />
        </div>
      </div>
    </div>
  );
};

export default SectorOverview;
