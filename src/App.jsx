import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import ScreenFour from './components/ScreenFour';
import ScreenFive from './components/ScreenFive';
import ScreenSix from './components/ScreenSix';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';
import Scroll from './components/Scroll';
import ClientOne from './components/ClientOne';

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
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Scroll />} />
        <Route path="/clients" element={<ClientOne />} />
        <Route path="/screen-three" element={<ScreenThree />} />
        <Route path="/screen-four" element={<ScreenFour />} />
        <Route path="/screen-five" element={<ScreenFive />} />
        <Route path="/screen-six" element={<ScreenSix />} />
        <Route path="/main-layout" element={<MainLayout />} />
        <Route path="/item/:1" element={<ClientOne />} />
      </Routes>
    
    </Router>
  );
}

export default App;








