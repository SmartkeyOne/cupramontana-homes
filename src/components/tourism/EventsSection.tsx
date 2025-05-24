
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../../contexts/LanguageContext';

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
}

interface EventsSectionProps {
  events: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{t('tourism.events.title')}</h2>
      <div className="space-y-4 mb-16">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader className="pb-2">
              <CardTitle>{event.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-medium">{t('tourism.events.date')}</p>
                  <p className="text-muted-foreground">{event.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{t('tourism.events.location')}</p>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium">{t('tourism.events.description')}</p>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
