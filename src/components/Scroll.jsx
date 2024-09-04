import { useState, useEffect } from 'react';

import Header from './Header';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import ScreenFour from './ScreenFour';
import ScreenFive from './ScreenFive';
import ScreenSix from './ScreenSix';
import Footer from './Footer';
import Layout from './Layout';
import MainLayout from './MainLayout';



function Scroll() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const screens = [ScreenOne, ScreenSix, ScreenThree, ScreenFour, MainLayout];

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const newScreenIndex = Math.floor(scrollPosition / screenHeight);

      if (newScreenIndex !== currentScreen && newScreenIndex < screens.length) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentScreen(newScreenIndex);
          setIsTransitioning(false);
        }, 500); // Adjust transition timing as needed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentScreen, screens.length]);

  const CurrentScreenComponent = screens[currentScreen];

  return (
    <>
        <Header />
      <div className={`screen-container ${isTransitioning ? 'fade-out' : ''}`}>
        <CurrentScreenComponent />
      </div>
      {/* Create scrollable space */}
      {Array(screens.length).fill().map((_, index) => (
        <div key={index} style={{ height: '110vh' }}></div>
      ))}
  
    </>
  );
}

export default Scroll;