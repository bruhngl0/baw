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
import ClientTwo from './components/ClientTwo';
import ClientThree from './components/ClientThree';
import ClientFour from './components/ClientFour';
import ClientFive from './components/ClientFive';
import ClientSix from './components/ClientSix';
import ClientSeven from './components/ClientSeven';
import ScreenSixInt from './components/ScreenSixInt';
import Services from './components/Services';
import AnimatedServices from './components/AnimateServices';
import ClientLayout from './components/ClientLayout';
import Baw from './components/Baw';



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
import '../src/styles/services.scss'
import '../src/styles/ani.scss'


function App() {
  return (
    <Router>
 
      <Routes>
        <Route path="/" element={<Scroll />} />
      
        <Route path="/screen-three" element={<ScreenThree />} />
        <Route path="/screen-four" element={<ScreenFour />} />
        <Route path="/screen-five" element={<ScreenFive />} />
        <Route path="/screen-six" element={<ScreenSix />} />
        <Route path="/main-layout" element={<MainLayout />} />
        <Route path="/clients" element={<ScreenFive/>} />
        <Route path="/client-one" element={<ClientOne />} />
        <Route path="/client-two" element={<ClientTwo />} />
        <Route path="/client-three" element={<ClientThree />} />
        <Route path="/client-four" element={<ClientFour />} />
        <Route path="/client-five" element={<ClientFive />} />
        <Route path="/client-six" element={<ClientSix />} />
        <Route path="/client-seven" element={<ClientSeven />} />
        <Route path= "/screen-six-int" element={<ScreenSixInt/>} />
        <Route path= "/servicess" element={<Services/>} />   
        <Route path= "/textscroll" element = {<AnimatedServices/>} /> 
        <Route path= "/baw" element = {<Baw/>} /> 
           
      </Routes>
    
    </Router>
  );
}

export default App;








