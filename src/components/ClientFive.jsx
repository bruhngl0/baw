import React from 'react'
import { Link } from 'react-router-dom'

const ClientFive = () => {
  return (
    <div className='client-one'>
    <h1 className='client-one-heading'>BHARATH<br/>BENZ</h1>
    <p className='client-one-des'>Entity+ <br/> Creative</p>

    <p className='client-one-para'>PHOTOGRAPHY</p>

    <h1 className='client-one-year'>2016</h1>

   
    <Link to = "/screen-six-int">
      <p className='back'>BACK</p>
      </Link> 

      <Link to = "/client-six">
      <p>next</p>
      </Link>
  </div>

  )
}

export default ClientFive
