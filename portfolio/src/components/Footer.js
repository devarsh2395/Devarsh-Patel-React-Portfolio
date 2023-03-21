import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-2 mb-lg-0">
            <p className="m-0">
              &copy; 2023 Devarsh Patel. All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <a href="https://github.com/yourusername">
                <FontAwesomeIcon icon={faGithub} className="mr-3" />
              </a>
              <a href="https://linkedin.com/in/yourusername">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;