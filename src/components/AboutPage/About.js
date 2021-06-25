import React from 'react';
import { SiCodechef, SiPinterest } from 'react-icons/si';
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';

import superhero from '../../assets/superhero.svg';
import avatar from '../../assets/avatar.svg';

const About = () => {
  return (
    <React.Fragment>
      <div className="About">
        <div className="About__container container">
          <div className="About__contents">
            <div className="About__left">
              <h1 className="About__left--heading">About Captain Crunch!</h1>
              <img
                src={superhero}
                alt="superhero"
                className="About__left--img"
              />
              <h1 className="About__left--heading">
                Hello and Welcome to EatsMe <SiCodechef />
              </h1>
              <p className="About__left--subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                reiciendis esse, illum dignissimos, amet tenetur architecto sint
                tempore? Obcaecati quo magnam, aspernatur? Eum, maiores labore
                consequuntur quas laborum voluptates numquam. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Totam reiciendis esse,
                illum dignissimos, amet tenetur architecto sint tempore?
                Obcaecati quo magnam, aspernatur? Eum, maiores labore
                consequuntur quas laborum voluptates numquam.
              </p>
              <h1 className="About__left--heading">My Story</h1>
              <p className="About__left--subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                reiciendis esse, illum dignissimos, amet tenetur architecto sint
                tempore? Obcaecati quo magnam, aspernatur? Eum, maiores labore
                consequuntur quas laborum voluptates numquam. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Totam reiciendis esse,
                illum dignissimos, amet tenetur architecto sint tempore?
                Obcaecati quo magnam, aspernatur? Eum, maiores labore
                consequuntur quas laborum voluptates numquam. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Totam reiciendis esse,
                illum dignissimos, amet tenetur architecto sint tempore?
                Obcaecati quo magnam, aspernatur? Eum, maiores labore
                consequuntur quas laborum voluptates numquam.
              </p>
            </div>
            <div className="About__right">
              <img
                src={avatar}
                alt="male avatar"
                className="About__right--img"
              />
              <section className="About__right--text">
                <h3 className="About__right--heading">
                  Hello and Welcome to EatsMe!
                </h3>
                <p className="About__right--desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti adipisci ipsa temporibus quo doloribus autem alias
                  iusto, obcaecati praesentium consequatur quod dolorem
                  voluptates, labore debitis repellat nemo perspiciatis, iste
                  ducimus.
                </p>
                <div className="About__right--icons">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://facebook.com"
                    className="About__right--icon"
                  >
                    <AiFillFacebook />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://instagram.com"
                    className="About__right--icon"
                  >
                    <AiFillInstagram />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com"
                    className="About__right--icon"
                  >
                    <AiFillTwitterSquare />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://pinterest.com"
                    className="About__right--icon"
                  >
                    <SiPinterest />
                  </a>
                </div>
              </section>
              <section className="About__right--news">
                <h3 className="About__right--news-title">
                  Never Miss a Review
                </h3>
                <p className="About__right--news-desc">
                  Signup to get the latest reviews
                </p>
                <input
                  placeholder="your Email"
                  type="email"
                  className="About__right--news-input"
                />
                <FaArrowRight className="About__right--news-icon" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
