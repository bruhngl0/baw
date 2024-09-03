import React from 'react'

const ScreenFive = ({onClick}) => {
  return (
    <div className='main-five' onClick={onClick}>
      <h1>CLIENTS</h1>
      <div className='grid-main-box'>
         <div className='grid-row-one'>
            <div className='grid-col-one'>
                <img src= "logo1.png"  className='logos'/>
            </div>
            <div className='grid-col-two'>
               <img src= "logo2.png"  className='logos-nvdia'/>
            </div>
            <div className='grid-col-three'>
            <img src= "logo3.png"  className='logos-coca'/>
            </div>
         </div>

         <div className='grid-row-two'>
            <div className='grid-col-one'>
              <img src= "logo4.png"  className='logos-circle'/>
            </div>
            <div className='grid-col-two'>
              <img src= "logo5.png"  className='logos-fastrack'/>
            </div>
            <div className='grid-col-three'>
             <img src= "logo6.png"  className='logos-circle-one'/>
            </div>
         </div>

         <div className='grid-row-three'>
            <div className='grid-col-one'>
             <img src= "logo7.png"  className='logos-circle-one'/>
            </div>
            <div className='grid-col-two'>
             <img src= "logo8.png"  className='logos-fastrack-one'/>
            </div>
            <div className='grid-col-three'>
            <img src= "logo9.png"  className='logos-sh'/>
            </div>
         </div>


         <div className='grid-row-four'>  
            <div className='grid-col-one'>
             <img src= "logo10.png"  className='logos-sh'/>
            </div>
            <div className='grid-col-two'>
              <img src= "logo11.png"  className='logos-sh'/>
            </div>
            <div className='grid-col-three'>
            <img src= "logo12.png"  className='logos-kr'/>
            </div>
         </div>


         <div className='grid-row-five'>
            <div className='grid-col-one'>
            <img src= "logo13.png"  className='logos-ho'/>
            </div>
            <div className='grid-col-two'>
            <img src= "logo14.png"  className='logos-sq'/>
            </div>
            <div className='grid-col-three'>
            <img src= "logo15.png"  className='logos-hc'/>
            </div>
         </div>

      </div>
    </div>
  )
}

export default ScreenFive
