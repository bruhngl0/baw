import React from 'react'
import Layout from './Layout'
import Layout2 from './Layout2'
import Layout3 from './Layout3'
import Layout4 from './Layout4'

const MainLayout = () => {
  return (
    <div className='gallery'>
      <Layout className="one-layout"/>
      <Layout2 className= "two-layout"/>
      <div className='mid'>
      <Layout3 />
      <Layout4 />
      </div>
    </div>
  )
}

export default MainLayout
