import React from 'react';
import '../styles/clientLayout.scss'
import { Link } from 'react-router-dom';

const ClientThree = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerText}>
        <h1 style={styles.mainTitle}>
          <span className="word slide-up">KAFKA'S</span>
        </h1>
        <p style={styles.subTitle}>
        <span className="word slide-up-down">Entity+ <br/> Creative</span>
        </p>
        <p className="slide-up" style={styles.subTitle}>BRANDING</p>
      </div>
      <div style={styles.yearSection}>
      <span className="word slide-up-down" style= {styles.subTitle}>At Holykicks, we believe that luxury extends to every detail, right down to your shoes. Our brand is dedicated to providing a premium shoe cleaning service that revitalizes, protects, and enhances your footwear, ensuring they look as pristine.</span>
        <h1 className="slide-up late-animation" style={styles.year}>2019</h1>
        <Link to= "/"><p className="slide-up late-animation" style={styles.backText}>BACK</p> </Link>
        <Link to= "/client-two"><p className="slide-up late-animation" style={styles.backText}>➪</p> </Link>
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
    fontSize: '8rem',
    margin: '0',
    fontWeight: 'bold',
    
  },
  subTitle: {
    fontSize: '1rem',
    marginTop: '10px',
    width: "600px"

     
  },
  yearSection: {
    textAlign: 'left',
    margin: "1rem",
     
 
  },
  year: {
    fontSize: '100px',
    marginTop: '0',
    fontWeight: '400',
    letterSpacing: "-0.05em"
    
    
  },
  backText: {
    fontSize: '2rem',
    margin: '0',
     color: 'white'
  },
};

export default ClientThree;