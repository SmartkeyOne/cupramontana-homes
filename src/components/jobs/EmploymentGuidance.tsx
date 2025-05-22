
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink } from 'lucide-react';

const EmploymentGuidance = () => {
  return (
    <div className="bg-muted p-6 rounded-lg mb-12">
      <h2 className="text-xl font-bold mb-4">Arbeitssuche und Bewerbung in Italien</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Arbeitserlaubnis für EU-Bürger</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Als EU-Bürger benötigen Sie keine spezielle Arbeitserlaubnis, um in Italien zu arbeiten. Sie müssen sich jedoch bei der örtlichen Gemeinde registrieren lassen, wenn Sie länger als drei Monate bleiben möchten.</p>
            <p>Wichtige Dokumente:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Gültiger Personalausweis oder Reisepass</li>
              <li>Nachweis über Krankenversicherung</li>
              <li>Nachweis über ausreichende finanzielle Mittel oder einen Arbeitsvertrag</li>
              <li>Steuernummer (Codice Fiscale) - bei örtlichem Steueramt erhältlich</li>
              <li>Anmeldeformular für Wohnsitz (bei Gemeindeverwaltung)</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              Quelle: Italienisches Ministerium für Arbeit und Sozialpolitik, EU-Bürgerrichtlinien 2024; Ausländerbehörde Marche
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Bewerbungsprozess in Italien</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Der italienische Bewerbungsprozess unterscheidet sich leicht von dem in Deutschland oder anderen EU-Ländern:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Lebensläufe sollten in italienischer und/oder englischer Sprache verfasst sein</li>
              <li>Ein Foto wird oft auf dem Lebenslauf erwartet</li>
              <li>Persönliche Netzwerke spielen eine wichtige Rolle bei der Arbeitssuche</li>
              <li>Lokale Sprachkenntnisse sind für die meisten Stellen erforderlich</li>
              <li>Bewerbungsgespräche sind oft weniger formal als in Deutschland</li>
              <li>Handschriftliche Bewerbungen werden in einigen traditionellen Bereichen noch geschätzt</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              Quelle: Europäisches Beschäftigungsobservatorium, Länderreport Italien 2024; Centro per l'Impiego Regionale
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Nützliche Ressourcen</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-3">
              <li>
                <a href="https://ec.europa.eu/eures/public/de/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  EURES - Europäisches Portal zur beruflichen Mobilität <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://www.anpal.gov.it/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  ANPAL - Nationale Agentur für aktive Arbeitsmarktpolitik <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://www.inps.it/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  INPS - Italienisches Sozialversicherungsinstitut <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://www.agenziaentrate.gov.it/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  Agenzia delle Entrate - Steueramt (für Codice Fiscale) <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li>
                <a href="https://www.regione.marche.it/Regione-Utile/Lavoro-e-Formazione-Professionale/Centri-Impiego" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center text-primary hover:underline">
                  Arbeitsvermittlungszentren der Region Marche <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">
              Letzte Aktualisierung: Mai 2025
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Arbeitsvertrag und -bedingungen</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">Typische Arbeitsvertragsarten in Italien:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Contratto a tempo indeterminato</strong> - Unbefristeter Vertrag</li>
              <li><strong>Contratto a tempo determinato</strong> - Befristeter Vertrag</li>
              <li><strong>Contratto stagionale</strong> - Saisonvertrag (häufig im Tourismus)</li>
              <li><strong>Contratto di apprendistato</strong> - Ausbildungsvertrag</li>
              <li><strong>Partita IVA</strong> - Selbständigkeitsstatus (Freiberufler)</li>
            </ul>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Arbeitszeiten und Urlaub</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Durchschnittliche Arbeitswoche: 40 Stunden</li>
                <li>Gesetzlicher Mindesturlaub: 4 Wochen pro Jahr</li>
                <li>Gesetzliche Feiertage: 12 Tage pro Jahr</li>
              </ul>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Quelle: Italienisches Arbeitsrecht, Stand 2024; Ministerium für Arbeit und Sozialpolitik
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default EmploymentGuidance;
