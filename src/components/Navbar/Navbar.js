import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {SiCodechef} from 'react-icons/si'
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  function closeMobileMenu() {
    setClick(false)
  }
  function handleClick() {
    setClick(!click)
  }

  function showButton() {
    if(window.innerWidth <= 768) {
      setButton(false)
    } else {
      setButton(true)
    }
  }


  useEffect(()=> {
    showButton()
  }, [])

  return (
    <React.Fragment>
      <div className="Navbar">
        <div 
          className={`Navbar__menu container`} 
        >
          <h1 className="Navbar__logo" onClick={closeMobileMenu}>
          <Link to='/' className='Navbar__links--link'>
            EatsMe <SiCodechef className='Navbar__logo--icon' />
          </Link>
          </h1>
          <div className="Navbar__mobileIcon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`Navbar__links ${click ? 'show-nav' : 'not-show'}`}>
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