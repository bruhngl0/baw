import React, { useEffect, useState } from 'react';
import '../styles/screenOne.scss'; // Assuming you save the CSS in this file

const ScreenOne = ({ onClick }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='sc-one' onClick={onClick}>
      <img src="magic.png" alt="Magic" />
      <div className='ipad'>
        <img src="IPAD.png" alt="iPad" />
      </div>
      <div className='ipad-text-one' key={`text-one-${key}`}>
        {"BLACK&WHITE".split("").map((char, index) => (
          <span key={index} className='letter'>{char}</span>
        ))}
      </div>
      <div className='ipad-text-two' key={`text-two-${key}`}>
        {"STUDIOS".split("").map((char, index) => (
          <span key={index} className='letter-one'>{char}</span>
        ))}
      </div>
    </div>
  );
}

export default ScreenOne;

