import React from 'react';
import bawlogo from "../../public/logobaw.png"
import "../styles/sliding.scss"

const Sliding = () => {
  return (
    <div className="baw-mains">
      <div className="wrapper-baw">
        <div className="container-baw">
          <img
            src= {bawlogo}
            alt="example"
          />
        </div>
      </div>
    </div>
  );
};

export default Sliding;
