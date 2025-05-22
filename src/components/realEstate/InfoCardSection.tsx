
import React from 'react';
import InfoCard from './InfoCard';

const InfoCardSection: React.FC = () => {
  const cards = [
    {
      titleKey: 'realestate.card1.title',
      descriptionKey: 'realestate.card1.description',
      items: [
        'realestate.card1.item1',
        'realestate.card1.item2',
        'realestate.card1.item3',
        'realestate.card1.item4',
      ],
    },
    {
      titleKey: 'realestate.card2.title',
      descriptionKey: 'realestate.card2.description',
      items: [
        'realestate.card2.item1',
        'realestate.card2.item2',
        'realestate.card2.item3',
        'realestate.card2.item4',
      ],
    },
    {
      titleKey: 'realestate.card3.title',
      descriptionKey: 'realestate.card3.description',
      items: [
        'realestate.card3.item1',
        'realestate.card3.item2',
        'realestate.card3.item3',
        'realestate.card3.item4',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {cards.map((card, index) => (
        <InfoCard
          key={index}
          titleKey={card.titleKey}
          descriptionKey={card.descriptionKey}
          items={card.items}
        />
      ))}
    </div>
  );
};

export default InfoCardSection;
