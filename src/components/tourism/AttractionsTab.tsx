
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Landmark, Castle, Church, Camera, Trees } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const AttractionsTab: React.FC = () => {
  const { t } = useLanguage();
  
  const attractions = [
    {
      title: t('tourism.attractions.historical.title'),
      description: t('tourism.attractions.historical.description'),
      icon: <Landmark className="h-8 w-8 text-primary" />
    },
    {
      title: t('tourism.attractions.museum.title'),
      description: t('tourism.attractions.museum.description'),
      icon: <Wine className="h-8 w-8 text-primary" />
    },
    {
      title: t('tourism.attractions.conero.title'),
      description: t('tourism.attractions.conero.description'),
      icon: <Trees className="h-8 w-8 text-primary" />
    },
    {
      title: t('tourism.attractions.church.title'),
      description: t('tourism.attractions.church.description'),
      icon: <Church className="h-8 w-8 text-primary" />
    },
    {
      title: t('tourism.attractions.castles.title'),
      description: t('tourism.attractions.castles.description'),
      icon: <Castle className="h-8 w-8 text-primary" />
    },
    {
      title: t('tourism.attractions.frasassi.title'),
      description: t('tourism.attractions.frasassi.description'),
      icon: <MapPin className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8 prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">{t('tourism.attractions.title')}</h2>
        <p className="mb-4">
          {t('tourism.attractions.description1')}
        </p>
        <p>
          {t('tourism.attractions.description2')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attractions.map((attraction, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                {attraction.icon}
                <CardTitle className="text-lg">{attraction.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-sm">
                {attraction.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23247.036907532143!2d13.09269082562253!3d43.44824338351776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132dfb17accc70e5%3A0x52ae8dafb17e07bf!2s60034%20Cupramontana%2C%20Ancona%2C%20Italien!5e0!3m2!1sde!2sde!4v1716487851998!5m2!1sde!2sde"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('tourism.attractions.map.title')}
        ></iframe>
      </div>
    </div>
  );
};

// Add Wine icon component (since we're using it but it's not imported from Lucide)
function Wine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 22h8"></path>
      <path d="M12 11v11"></path>
      <path d="M17 3l1 7c0 3-2 5-6 5s-6-2-6-5l1-7h10z"></path>
      <path d="M6 3h12"></path>
    </svg>
  );
}

export default AttractionsTab;
