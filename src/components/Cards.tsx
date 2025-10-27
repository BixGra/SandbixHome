import { useEffect, useState } from 'react';
import Card from './Card.tsx';
import type { Position } from './Card.tsx';

interface CardData {
  title: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  image: string;
  link: string;
}

interface CardsProps {
  language?: 'fr' | 'en';
  mousePosition: Position;
}

function Cards({ language = 'fr', mousePosition }: CardsProps) {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    async function getCards() {
      const res = await fetch('/data/cards.json');
      const data: CardData[] = await res.json();
      setCards(data);
    }
    getCards();
  }, []);

  return (
    <div className='cards'>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title[language]}
          content={card.content[language]}
          image={card.image}
          link={card.link}
          mousePosition={mousePosition}
        />
      ))}
    </div>
  );
}

export default Cards;
