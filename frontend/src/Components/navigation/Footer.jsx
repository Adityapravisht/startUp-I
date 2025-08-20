// import React from "react";
import MyImage from "../atoms/MyImage";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const socialImg = [
  {
    src: "./InstaImg.png",
    alt: "instaImg",
  },
  {
    src: "./facebookImg.png",
    alt: "facebookImg",
  },
  {
    src: "./XImg.png",
    alt: "xImg",
  },
  {
    src: "./youtubeImg.png",
    alt: "youtubeImg",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footerImage">
        <MyImage src={"./archsImage.png"} />

        <MyImage src={"./archsImage.png"} className="revimage"/>
      </div> */}

      <div className="footer-content">
        <div className="footer-left">
          <MyImage src={"StartUp&I.png"} className="footerStrartUpImg" />

          <p className="description">
            Startup&I aims to venture into unexplored Startup domains, guiding
            you through every step of the entrepreneurial journey with insights,
            news, and resources.
          </p>
          <div className="social-icons">
            <div>
              {socialImg.map((img, idx) => (
                <MyImage src={img.src} key={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Middle column: Quick Links */}
        <div className="footer-middle">
          <p>Quick Links</p>
          <ul className="links">
            <li>
              <a href=".">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/tech-partner">Tech Partner</a>
            </li>
            <li>
              <a href="/subscribe">Subscribe</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        {/* Right column: Contact information */}
        <div className="footer-right">
          <p >Contact Us</p>
          <ul>
            <li className="contact-info">
              <MdLocationPin />
              1185 Dubai Park Ave, Floor 5, Dubai
            </li>
            <li className="contact-info" >
              <FaPhone />
              +91 98765 43210
            </li>
            <li className="contact-info">
              <MdMail />
              info@startupandi.com
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="footer-bottom">
        <p>Copyright &copy; Startup & I 2025. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
