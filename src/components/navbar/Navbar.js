import React, {useState} from 'react'
import './NavbarStyle.css'
import {SiDatabricks} from 'react-icons/si'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div name="top" className='navbar'>
        <div className="container">
            <div className="logo">
                <SiDatabricks className='icon' />
                <h1>Seguridad</h1>
            </div>

            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li> <Link to='/'> Home </Link></li>
                <li><Link to='/recover'>Recuperación</Link></li>
                <li><Link to='/cloud'>Cloud</Link></li>
                <li><Link to='/contact'>Contácto</Link></li>
                <button>Log in</button>
            </ul>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />) }
            </div>
        </div>
    </div>
  )
}
