import React from 'react'
import {Link} from 'react-router-dom'
import {SiCodechef} from 'react-icons/si'

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="Navbar__menu container">
          <h1 className="Navbar__logo">
          <Link to='/' className='Navbar__links--link'>
            EatsMe <SiCodechef className='Navbar__logo--icon' />
          </Link>
          </h1>
          <ul className="Navbar__links">
            <li className="Navbar__links--item">
              <Link to ='/' className='Navbar__links--link'>
                Home
              </Link>
            </li>  
            <li  className="Navbar__links--item">
              <Link to='/foods' className='Navbar__links--link'>
                Foods
              </Link>
            </li>
            <li  className="Navbar__links--item">
              <Link to='/about' className='Navbar__links--link'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar