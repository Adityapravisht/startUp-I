// import React from "react";
import MyImage from "../Atoms/MyImage";
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

function Footer() {
  return (
    <footer className="footer">
      <div className="footerImage">
        <MyImage src={"./archsImage.png"} />

        <MyImage src={"./archsImage.png"} />
      </div>

      <div className="footer-content">
        {/* Left column: Logo, description, social icons */}

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
          <h4>Quick Links</h4>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Tech Partner</a>
            </li>
            <li>
              <a href="#">Subscribe</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Right column: Contact information */}
        <div className="footer-right">
          <h4>Contact Us</h4>
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
