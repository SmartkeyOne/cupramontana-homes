
import React from 'react';
import { Home, Compass, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: t('features.realEstate.title'),
      description: t('features.realEstate.description'),
      route: "/real-estate"
    },
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: t('features.tourism.title'),
      description: t('features.tourism.description'),
      route: "/tourism"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: t('features.jobs.title'),
      description: t('features.jobs.description'),
      route: "/jobs"
    }
  ];

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="border border-border bg-card transition-all duration-200 hover:shadow-lg hover:scale-105 hover:border-primary/50 cursor-pointer"
            onClick={() => handleCardClick(feature.route)}
          >
            <CardHeader className="p-4">
              <div className="flex items-center gap-3">
                <div>{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardDescription className="text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
