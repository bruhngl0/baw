import React from 'react';
import '../styles/clientLayout.scss'
import { Link } from 'react-router-dom';

const ClientTwo = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerText}>
        <h1 style={styles.mainTitle}>
          <span className="word slide-up">HOOVU <br/>KITCHEN</span>
        </h1>
        <p style={styles.subTitle}>
        <span className="word slide-up-down">Entity+ <br/> Creative</span>
        </p>
        <p className="slide-up" style={styles.subTitle}>BRANDING</p>
      </div>
      <div style={styles.yearSection}>
        <h1 className="slide-up late-animation" style={styles.year}>2023</h1>
        <Link to= "/screen-six-int"><p className="slide-up late-animation" style={styles.backText}>BACK</p> </Link>
        <Link to= "/client-three"><p className="slide-up late-animation" style={styles.backText}>➪</p> </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
   
    color: 'white',
    width: '100vw',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    
  },
  headerText: {
    textAlign: 'left',
    margin: '1rem'
  },
  mainTitle: {
    fontSize: '4rem',
    margin: '0',
    fontWeight: 'bold',
    
  },
  subTitle: {
    fontSize: '1rem',
    marginTop: '10px'

     
  },
  yearSection: {
    textAlign: 'left',
   
     
 
  },
  year: {
    fontSize: '200px',
    marginTop: '0',
    fontWeight: '400',
   letterSpacing: '-0.05em'
    
    
  },
  backText: {
    fontSize: '2rem',
    margin: '0',
     color: 'white'
  },
};

export default ClientTwo;
