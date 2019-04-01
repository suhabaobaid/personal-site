import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';
import ControlledCarousel from '../components/Template/ControlledCarousel';

import AboutImages from '../data/about';

const count = AboutImages.length;

const About = () => (
  <Main>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <img
            className="main-logo"
            src={require('../../public/images/logo.svg')}
            alt="Logo"
          />
          <h2><Link to="/about">About Me</Link></h2>
          <p>(in about {count} sketches)</p>


        </div>
      </header>
      <ControlledCarousel />
    </article>
  </Main>
);

export default About;
