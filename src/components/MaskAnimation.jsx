import React, { useState, useEffect } from 'react';
import Services from './Services';
import Sliding from './Sliding'; // Second component
import '../styles/mask.scss';

const MaskAnimation = () => {
  const [isTransitionComplete, setIsTransitionComplete] = useState(false); // Tracks if the transition has happened

  // Handle the one-time transition using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitionComplete(true); // Switch to the second component after 3 seconds
    }, 3000); // Mask after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="mask-container">
      <div className="component-wrapper">
        <div className={`masked-component ${!isTransitionComplete ? 'visible' : ''}`}>
          <Sliding />  {/* First component */}
        </div>
        <div className={`masked-component ${isTransitionComplete ? 'visible' : ''}`}>
          <Services />  {/* Second component */}
        </div>
      </div>
    </div>
  );
};

export default MaskAnimation;







