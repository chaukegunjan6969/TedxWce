import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../pagescss/footer.css'
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
            <p id="footer-home"><NavLink to = '/'>Home</NavLink></p>
            <p id="footer-register"><NavLink to = '/registration'>Register</NavLink></p>
            <p id="about-us"><NavLink to='/about_us'>About Us</NavLink></p>
            <p id="contact-us"><NavLink to='/contact'>Contact Us</NavLink></p>
          </div>
          <div>
            <p><NavLink to='/terms'>Terms and Conditions</NavLink></p>
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