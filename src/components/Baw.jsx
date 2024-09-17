import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import newsImage from '../../public/news.png';

const Baw = () => {
  const containerRef = useRef(null);
 
  const imageSrc = newsImage;

  const zoomPoints = [
    { x: -500, y: -300, zoom: 2 },
    { x: -500, y: 300, zoom: 2 },
    { x: 300, y: 200, zoom: 2 },
    { x: 300, y: -300, zoom: 2 },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const numPoints = zoomPoints.length;
  const scrollInput = [0];
  const scaleOutput = [1];
  const xOutput = [0];
  const yOutput = [0];

  zoomPoints.forEach((point, index) => {
    const startProgress = (index + 0.5) / numPoints;
    const endProgress = (index + 1) / numPoints;

    scrollInput.push(startProgress, endProgress);
    scaleOutput.push(point.zoom, 1);
    xOutput.push(-point.x * (point.zoom - 1), 0);
    yOutput.push(-point.y * (point.zoom - 1), 0);
  });

  const scale = useTransform(scrollYProgress, scrollInput, scaleOutput);
  const x = useTransform(scrollYProgress, scrollInput, xOutput);
  const y = useTransform(scrollYProgress, scrollInput, yOutput);

  return (
    <div ref={containerRef} style={{ height: '800vh', overflow: 'hidden' }}>
      <motion.div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          overflow: 'hidden',
          marginTop: "5rem",
          marginLeft: "17rem"
        }}
      >
        <motion.img
          src={imageSrc}
          alt="Zoomable Image"
          style={{
            width: '70%',
            height: '100%',
            objectFit: 'cover',
            scale,
            x,
            y
          }}
        />
      </motion.div>
    </div>
  );
};

export default Baw;

