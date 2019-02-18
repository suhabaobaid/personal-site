import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Carousel from 'react-bootstrap/Carousel';

import Main from '../layouts/Main';

import markdown from '../data/about.md';
import 'bootstrap/dist/css/bootstrap.css';

const count = markdown.split(/\s+/)
  .map(s => s.replace(/\W/g, ''))
  .filter(s => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main>
    <Helmet title="About" />
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link to="/about">About Me</Link></h2>
          <p>(in about {count} sketches)</p>
        </div>
      </header>
      <Carousel
      >
        <Carousel.Item>
          <img
            className="d-block w-90 h-50"
            src={`${BASE_PATH}/images/about/intro.svg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${BASE_PATH}/images/logo.svg`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${BASE_PATH}/images/logo.svg`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </article>
  </Main>
);

export default About;
