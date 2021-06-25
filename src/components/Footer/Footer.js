import React from 'react';
import { SiCodechef, SiPinterest } from 'react-icons/si';
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="Footer">
        <div className="Footer__container container">
          <div className="Footer__left">
            <h1 className="Footer__left--title">
              EatsMe <SiCodechef />
            </h1>
            <p className="Footer__left--about">
              Hello and welcome to EatsMe! I’m Crunch, a real food lover,
              meal prep fanatic, massive wanderluster and dreamer. I’m also a
              big advocate of self-care and taking life “down a notch” – while
              chasing adventures half-way across the globe! Because it’s all
              about balance.
            </p>
            <div className="Footer__left--icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel='noreferrer'
                className="Footer__left--icon"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel='noreferrer'
                className="Footer__left--icon"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel='noreferrer'
                className="Footer__left--icon"
              >
                <AiFillTwitterSquare />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel='noreferrer'
                className="Footer__left--icon"
              >
                <SiPinterest />
              </a>
            </div>
          </div>
          <div className="Footer__right">
            <div className="Footer__right--column">
              <h3 className="Footer__right--title">Follow</h3>
                
              <a href="https://facebook.com" className="Footer__right--link">
                Facebook
              </a>
              <a href="https://instagram.com" className="Footer__right--link">
                Instagram
              </a>
              <a href="https://twitter.com" className="Footer__right--link">
                Twitter
              </a>
              <a href="https://pinterest.com" className="Footer__right--link">
                Pinterest
              </a>
            </div>
            <div className="Follow__right--column">
              <h3 className="Footer__right--title">Information</h3>
              <Link to='/about' className="Footer__right--link">
                About Me
              </Link>
              <a href="#" className="Footer__right--link">
                Contact
              </a>
            </div>
            <div className="Follow__right--column">
              <h3 className="Footer__right--title">Browse</h3>
              <Link to='/foods' className="Footer__right--link">
                Foods
              </Link>
              <Link to='#' className="Footer__right--link">
                Seafood
              </Link>
              <Link to='#' className="Footer__right--link">
                Healthy Foods
              </Link>
              <Link to='#' className="Footer__right--link">
                Recommended
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
