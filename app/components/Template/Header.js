import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

/*
 * This is the header that appears on top. With Nav label and Nav links next to it.
 * Links are taken from the routes file
 */
const Header = () => (
  <header id="header">
    {/* This filters to get the index of the routes and takes the label of it */}
    <h1 className="index-link">
      {routes.filter(l => l.index).map(l => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    {/* These are the nav links */}
    <nav className="links">
      <ul>
        {routes.filter(l => !l.index).map(l => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Header;
