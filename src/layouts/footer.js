import React from "react";
import { Outlet } from "react-router-dom";
import '../assets/footer/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = ()=>{
    return(
      <footer>
        <Outlet></Outlet>
        <div className="footer">
          <div id="Branding">
            <img src="https://i.ibb.co/2cmf2h7/logo-white.png" alt="TEDxLogo" id="ted-logo"/>
            <div className="copy-right top">&copy; 2023 TEDXWCESangli</div>
            <div className="copy-right">ALL RIGHTS RESERVED</div>
          </div>
          <div id="social-handles">
            <p id="Closing">Follow TEDXWCESangli</p>
            <div id="Social-Branding">
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div>
            <p id="footer-home">Home</p>
            <p id="footer-register">Register</p>
            <p id="about-us">About Us</p>
            <p id="contact-us">Contact Us</p>
          </div>
          <div>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p></p>
            <p>Support</p>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>

      </footer>
      
    )
}

export default Footer;