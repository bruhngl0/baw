import React from 'react'
import { Link } from 'react-router-dom'

const ClientFour = () => {
  return (
    <div className='client-one'>
      <h1 className='client-one-heading'>HOOVU<br/>KITCHEN</h1>
      <p className='client-one-des'>Entity+ <br/> Creative</p>

      <p className='client-one-para'>BRANDING</p>

      <h1 className='client-one-year'>2023</h1>
      
      <Link to = "/screen-six-int">
      <p className='back'>BACK</p>
      </Link>   

      <Link to = "/client-five">
      <p>next</p>
      </Link>
    </div>
  )
}

export default ClientFour
