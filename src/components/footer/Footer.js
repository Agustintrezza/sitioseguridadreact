import React from 'react'
import './FooterStyles.css'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiGithub, FiInstagram, FiFacebook, FiLinkedin, FiDribbble, FiMail } from 'react-icons/fi'

import {Link} from 'react-scroll'

export const Footer = () => {
  return (
    <div className="footer">
      <div className='container'>
          <div className='top'>
              <div className='logo-footer'>
                <SiDatabricks className='icon'/>
                <h2>Seguridad React</h2>
              </div>
              <Link activeClass="active" to="top" spy={true} smooth={true} duration= {500 }>
                <BsFillArrowUpCircleFill className="icon"/>
              </Link>

          </div>
          <div className="col-container">
              <div className="col">
                  <h3>Navegación</h3>
                  <p>Home</p>
                  <p>Data</p>
                  <p>Cloud</p>
                  <p>Contacto</p>
              </div>
              <div className="col">
                  <h3>Mi Cuenta</h3>
                  <p>Home</p>
                  <p>Data</p>
                  <p>Cloud</p>
                  <p>Contacto</p>
              </div>
              <div className="col">
                  <h3>Información</h3>
                  <p>Home</p>
                  <p>Data</p>
                  <p>Cloud</p>
                  <p>Contacto</p>
              </div>
              <div className="col">
                  <h3>Legales</h3>
                  <p>Home</p>
                  <p>Data</p>
                  <p>Cloud</p>
                  <p>Contacto</p>
              </div>
              <form>
                <h3>Sumáte a nuestro equipo</h3>
                <input type="email" placeholder='Ingresa tu email'/>
                <FiMail className="mail-icon"/>

                <div className="social-group">
                    <FiInstagram className='social-icon' />
                    <FiFacebook className='social-icon' />
                    <FiLinkedin className='social-icon' />
                    <FiDribbble className='social-icon' />
                    <FiGithub className='social-icon' />
                </div>
              </form>
                
          </div>
      </div>
    </div>
  )
}
