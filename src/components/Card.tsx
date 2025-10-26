import { useRef } from 'react';

export interface Position {
  x: number;
  y: number;
}

interface CardProps {
  title: string;
  content: string;
  image: string;
  mousePosition: Position;
}

function Card({
  title = 'Title missing',
  content = 'Card content is missing.',
  image = 'placeholder.jpg',
  mousePosition,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function getGradientPosition(
    mousePosition: Position,
    element: HTMLDivElement
  ): Position {
    const rect = element.getBoundingClientRect();

    const percentX = ((mousePosition.x - rect.left) / rect.width) * 100;
    const percentY = ((mousePosition.y - rect.top) / rect.height) * 100;

    return {
      x: percentX,
      y: percentY,
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
    <div key={title} className='card' ref={cardRef}>
      <div
        className='card-border'
        style={{
          background: `radial-gradient(
          circle at ${getGradientRatio()},
          rgba(240, 128, 128, 1) 0%,
          rgba(14, 14, 14, 1) 25%
          )`,
        }}
      ></div>
      <div className='card-container'>
        <div
          className='card-background'
          style={{ backgroundImage: `url('/images/${image}')` }}
        />
        <div className='card-title'>{title}</div>
        <div className='card-content'>{content}</div>
      </div>
    </div>
  );
}

export default Card;
