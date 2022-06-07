import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <ul className="social-icons">
        <li>
          <a
            className="facebook"
            href="https://es-la.facebook.com/"
            target="_black"
          >
            <i className="fa fa-facebook">
              <BsFacebook />
            </i>
          </a>
        </li>
        <li>
          <a
            className="twitter"
            href="https://twitter.com/?lang=es"
            target="_black"
          >
            <i className="fa fa-twitter">
              <BsTwitter />
            </i>
          </a>
        </li>
        <li>
          <a
            className="dribbble"
            href="https://www.instagram.com/"
            target="_black"
          >
            <i className="fa fa-dribbble">
              <BsInstagram />
            </i>
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            href="https://ar.linkedin.com"
            target="_black"
          >
            <i className="fa fa-linkedin">
              <BsLinkedin />
            </i>
          </a>
        </li>
        <li>
          <a className="github" href="https://github.com/" target="_black">
            <i className="fa fa-github">
              <BsGithub />
            </i>
          </a>
        </li>
        <p className="copyright-text">
          Frontend Developer | Juan Carlos Iasenza™ 2022
        </p>
      </ul>
    </footer>
  );
};
export default Footer;
