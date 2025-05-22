
import React from 'react';
import SectorCard from './SectorCard';
import { Briefcase, User, UserPlus } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

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
    { position: 'Hotelfachangestellte', salary: '1,400-1,700' },
    { position: 'Restaurantleiter', salary: '1,800-2,300' },
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
    { position: 'Kellermeister', salary: '1,800-2,500' },
    { position: 'Landwirtschaftlicher Saisonarbeiter', salary: '1,200-1,500' },
    { position: 'Agrarwissenschaftler', salary: '1,900-2,700' }
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
    { position: 'Restaurator', salary: '1,700-2,400' },
    { position: 'Spezialisierter Handwerker', salary: '1,500-2,200' },
    { position: 'Kunsthandwerker', salary: 'Variable' }
  ];
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('jobs.sectors.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
    </div>
  );
};

export default SectorOverview;
