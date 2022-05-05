import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Cloud } from '../components/cloud/Cloud'
import { Footer } from '../components/footer/Footer'



export const CloudPage = () => {
  return (
    <>
        <Navbar />
        <Cloud />
        <Footer/>
    </>
  )
}


export default CloudPage;