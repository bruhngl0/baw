import React, { useEffect, useRef, useState } from 'react';
import '../styles/baw.scss'

const ScrollZoomComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateZoom = (sectionIndex) => {
    const sectionHeight = window.innerHeight;
    const sectionStart = sectionIndex * sectionHeight;
    const sectionMiddle = sectionStart + sectionHeight / 2;
    const distanceFromMiddle = Math.abs(scrollPosition - sectionMiddle);
    const maxZoom = 1.5;
    const minZoom = 1;
    
    if (distanceFromMiddle < sectionHeight / 4) {
      return maxZoom - (distanceFromMiddle / (sectionHeight / 4)) * (maxZoom - minZoom);
    }
    return minZoom;
  };

  return (
    <div ref={containerRef} className="scroll-container">
      <div className="sticky-container">
        <div className="content-wrapper">
          <div
            className="content-section about-us"
            style={{
              transform: `scale(${calculateZoom(0)})`,
              opacity: calculateZoom(0) === 1 ? 0.5 : 1,
            }}
          >
            About Us
          </div>
          <div
            className="content-section our-team"
            style={{
              transform: `scale(${calculateZoom(1)}) translate(-50%, -50%)`,
              opacity: calculateZoom(1) === 1 ? 0.5 : 1,
            }}
          >
            Our Team
          </div>
          <div
            className="content-section mission"
            style={{
              transform: `scale(${calculateZoom(2)}) translate(-50%, -50%)`,
              opacity: calculateZoom(2) === 1 ? 0.5 : 1,
            }}
          >
            Mission
          </div>
          <div
            className="content-section vision"
            style={{
              transform: `scale(${calculateZoom(3)}) translate(-50%, -50%)`,
              opacity: calculateZoom(3) === 1 ? 0.5 : 1,
            }}
          >
            Vision
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollZoomComponent;