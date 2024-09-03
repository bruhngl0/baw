import React, { useEffect, useRef } from 'react'


const ScreenTwo = ({onClick}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      let isPaused = false;

      const pauseAndResume = () => {
        if (isPaused) {
          container.style.animationPlayState = 'running';
          isPaused = false;
          setTimeout(pauseAndResume, 6250); // Run for 10 seconds
        } else {
          container.style.animationPlayState = 'paused';
          isPaused = true;
          setTimeout(pauseAndResume, 3000); // Pause for 3 seconds
        }
      };

      // Start the cycle
      setTimeout(pauseAndResume, 6250); // Initial run for 10 seconds
    }
  }, []);

  return (
    <div className='sliding-container' onClick= {onClick}>
      <div className='sliding-content' ref={containerRef}>
        <img src="art1.png" className='img-1' alt="Art 1" />
        <img src="art2.png" className='img-2' alt="Art 2" />
        <img src="art3.png" className='img-1' alt="Art 3" />
        <img src="art4.png" className='img-2' alt="Art 4" />
        <img src="art5.png" className='img-1' alt="Art 5" />
        {/* Duplicate images for seamless loop */}
        <img src="art1.png" className='img-2' alt="Art 1" />
        <img src="art2.png" className='img-1' alt="Art 2" />
        <img src="art3.png" className='img-2' alt="Art 3" />
        <img src="art4.png" className='img-1' alt="Art 4" />
        <img src="art5.png" className='img-2' alt="Art 5" />

        <img src="art1.png" className='img-1' alt="Art 1" />
        <img src="art2.png" className='img-2' alt="Art 2" />
        <img src="art3.png" className='img-1' alt="Art 3" />
        <img src="art4.png" className='img-2' alt="Art 4" />
        <img src="art5.png" className='img-1' alt="Art 5" />

      
      </div>
    </div>
  )
}

export default ScreenTwo