import React from 'react'
import { Link } from 'react-router-dom'
const ClientSix = () => {
  return (
    <div className='client-one'>
    <h1 className='client-one-heading'>FASTRACK<br/>BAGS</h1>
    <p className='client-one-des'>Entity+ <br/> Creative</p>

    <p className='client-one-para'>PHOTOGRAPHY</p>

    <h1 className='client-one-year'>2019</h1>
   
    <Link to = "/screen-six-int">
      <p className='back'>BACK</p>
      </Link>   

      <Link to = "/client-seven">
      <p>next</p>
      </Link> 
  </div>
  )
}

export default ClientSix
