import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
     <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>&copy; 2023 Devarsh Patel. All Rights Reserved.</p>
            <div className="social-icons">
              <a href="https://github.com/devarsh2395">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/devarsh-patel-111718124">
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