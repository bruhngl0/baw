import React, { useState, useEffect } from 'react';
import '../styles/baw.scss'

const Baw = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDiv((prev) => (prev + 1) % 5); // 0-4, where 0 is the initial state
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const getTransform = () => {
    switch (activeDiv) {
      case 1: return 'scale(1.2) translate(25%, 0%)';
      case 2: return 'scale(1.2) translate(-25%, 25%)';
      case 3: return 'scale(1.2) translate(25%, -25%)';
      case 4: return 'scale(1.2) translate(-25%, -25%)';
      default: return 'scale(1) translate(0, 0)';
    }
  };

  return (
    <div className="animated-grid">
      <img 
        src= "news.png" 
        alt="Background" 
        className="background-image" 
        style={{ transform: getTransform() }} // Apply the same transform to the image
      />
      <div 
        className="grid-container" 
        style={{ transform: getTransform() }} // Apply the same transform to the grid container
      >
        <div className="grid-item" style={{ top: '40%', left: '10%' }}></div>
        <div className="grid-item" style={{ top: '0%', right: '10%' }}></div>
        <div className="grid-item" style={{ bottom: '10%', left: '10%' }}></div>
        <div className="grid-item" style={{ bottom: '10%', right: '10%' }}></div>
      </div>
    </div>
  );
};

export default Baw;


