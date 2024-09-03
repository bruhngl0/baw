import { useState, useEffect } from 'react';

import Header from './components/Header';
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import ScreenFour from './components/ScreenFour';
import ScreenFive from './components/ScreenFive';
import ScreenSix from './components/ScreenSix';
import Footer from './components/Footer';
import Layout from './components/Layout';
import MainLayout from './components/MainLayout';

import '../src/styles/screenTwo.scss';
import '../src/styles/header.scss';
import '../src/styles/screenOne.scss';
import '../src/styles/footer.scss';
import '../src/styles/screenThree.scss';
import '../src/styles/screenFour.scss';
import '../src/styles/screenFive.scss';
import '../src/styles/screensix.scss';
import '../src/styles/layout.scss';
import '../src/styles/mainLayout.scss'

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const screens = [ScreenOne, ScreenSix, ScreenThree, ScreenFour, ScreenFive, MainLayout];

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

export default App;







