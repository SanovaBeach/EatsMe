import React from 'react'
import tasting from '../../assets/tasting.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <React.Fragment>
      <div className="Header">
        <div className="Header__container container">
          <div className="Header__content">
            <img src={tasting} alt="header logo" className='Header__content--img' />
            <div className="Header__content--desc">
              <h1 className="Header__content--title">
                Hi There, I'm Crunch!
              </h1>
              <p className="Header__content--about">
                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Ea eius hic eaque sapiente, nemo, natus voluptatibus. Dignissimos, officia consequatur ex natus omnis ut itaque in dolores architecto rem iure ipsa.
              </p>
              <Link to='/about' className="Header__content--link">
                More About Captain Crunch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header