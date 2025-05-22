
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AttractionsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Historisches Zentrum</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Erkunden Sie die mittelalterlichen Gassen und Plätze von Cupramontana, 
              mit seiner charmanten Architektur und historischen Gebäuden.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Museo del Vino</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Besuchen Sie das Weinmuseum und erfahren Sie mehr über die reiche 
              Weinbautradition der Region und den berühmten Verdicchio.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conero Nationalpark</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Nur eine kurze Fahrt entfernt bietet der Monte Conero spektakuläre 
              Ausblicke auf die Adriaküste und wunderschöne Wanderwege.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttractionsTab;
