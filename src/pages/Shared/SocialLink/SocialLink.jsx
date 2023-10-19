import React from "react";
import "./SocialLink.css";
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaDribbble,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";
const SocialLink = () => {
  return (
    <div className="social-link">
      <ul className="social-icon">
        <li className="facebook">
          <a href="https://facebook.com/home">
            <FaFacebookF></FaFacebookF>
          </a>
        </li>
        <li className="twitter">
          <a href="https://twitter.com/home">
            <FaTwitter></FaTwitter>
          </a>
        </li>
        <li className="behance">
          <a href="https://www.behance.net/">
            <FaBehance></FaBehance>
          </a>
        </li>
        <li className="instagram">
          <a href="https://www.instagram.com/">
            <FaInstagram></FaInstagram>
          </a>
        </li>
        <li className="dribble">
          <a href="https://dribbble.com/">
            <FaDribbble></FaDribbble>
          </a>
        </li>
        <li>
          <a href="tel:+8801723659531">
            <FaPhoneAlt></FaPhoneAlt> (+880)1723659531
          </a>
        </li>
        <li>
          <a href="mailto:alhasanulbanna@gmail.com">
            <FaRegEnvelope></FaRegEnvelope> info@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
