import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { socialMediaLinks } from '../data/portfolio'

const Footer = () => {

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {socialMediaLinks.link &&
            socialMediaLinks.link.map((network) => {
              const { name, url } = network;
              return (
                <a
                  key={name}
                  href={url || 'https://github.com/dimasyogapra'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - by{' '}
          <a href="https://github.com/dimasyogapra" target="_blank" rel="noopener noreferrer">
            Dimas Yoga
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;