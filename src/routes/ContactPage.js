import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import { Contact } from '../components/contact/Contact'


export const ContactPage = () => {
  return (
    <>
        <Navbar/>
          <Contact/>
        <Footer />
    </>
  )
}

export default ContactPage
