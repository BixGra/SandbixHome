import { useEffect, useState } from 'react';
import Cards from './components/Cards.tsx';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import type { Position } from './components/Card.tsx';

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [mousePosition, setPosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function updatePosition(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Cards language={language} mousePosition={mousePosition} />
      <Footer language={language} />
    </>
  );
}

export default App;
