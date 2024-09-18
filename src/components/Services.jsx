import React from 'react';
import { motion } from 'framer-motion';
import AnimatedServices from './AnimateServices';
import Header from './Header';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.9
      }
    }
  };

  const leftVariants = {
    hidden: { y: '-100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 120,
        damping: 40,
        delay: 2.5 // Adds a delay of 1.5 seconds before starting
      }
    }
  };

  const rightVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 120,
        damping: 40,
        delay: 2.5 // Adds a delay of 1.5 seconds before starting
      }
    }
  };

  return (
    <>
      <motion.div 
        className='services-main'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className='services-one' variants={leftVariants}>
          <p>
            BIG<br/>
            AGENCY<br/>
            THINKING<br/>
          </p>
        </motion.div>
         
        <motion.div className='services-two' variants={rightVariants}>
          <p>
            WITH A<br/>
            SMALL AGENCY<br/>
            ATTITUDE<br/>
          </p>
        </motion.div>
      </motion.div>
    
      <AnimatedServices />
   
    </>
  );
};

export default Services
