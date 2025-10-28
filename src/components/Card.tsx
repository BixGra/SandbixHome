import { useRef } from 'react';

export interface Position {
  x: number;
  y: number;
}

interface CardProps {
  title: string;
  content: string;
  image: string;
  link: string;
  mousePosition: Position;
}

function Card({
  title = 'Title missing',
  content = 'Card content is missing.',
  image = 'placeholder.jpg',
  link = 'https://sandbix.fr',
  mousePosition,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function getGradientPosition(
    mousePosition: Position,
    element: HTMLDivElement
  ): Position {
    const rect = element.getBoundingClientRect();

    return {
      x: ((mousePosition.x - rect.left) / rect.width) * 100,
      y: ((mousePosition.y - rect.top) / rect.height) * 100,
    };
  }

  function getGradientRatio(): string {
    return `${
      cardRef.current === null
        ? 50
        : getGradientPosition(mousePosition, cardRef.current).x
    }% ${
      cardRef.current === null
        ? 50
        : getGradientPosition(mousePosition, cardRef.current).y
    }%`;
  }

  return (
    <div
      key={title}
      className='card'
      ref={cardRef}
      onClick={() => window.open(link, '_blank')}
    >
      <div
        className='card-border'
        // colors in css variables
        style={{
          background: `radial-gradient(
          circle at ${getGradientRatio()},
          var(--accent) 0%,
          var(--bg) 25%
          )`,
        }}
      ></div>
      <div className='card-container'>
        <div
          className='card-background'
          style={{ backgroundImage: `url('/images/${image}')` }}
        />
        <div className='card-title'>{title}</div>
        <div
          className='card-content'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}

export default Card;
