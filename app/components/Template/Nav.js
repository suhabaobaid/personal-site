import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img className="logo-image" src={`${BASE_PATH}/images/logo.svg`} alt="" />
      </Link>
      <header>
        <p><a href="mailto:suha.baobaid@gmail.com">suha.baobaid@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Suha. A Computer Engineering graduate from <a href="https://antalya.edu.tr/en">Antalya Bilim University</a>, currently working
        as a freelance Mobile Developer. Recently started diving into UI/UX design.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Suha Baobaid.</p>
    </section>
  </section>
);

export default Nav;
