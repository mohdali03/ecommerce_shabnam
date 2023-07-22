import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const FooterBanner = ({}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        <h1>Contact Us</h1>
        <br />
        <h1>Alvira - Shabnam Bags</h1>
        <br />
        <h3><a href="https://goo.gl/maps/EGGFiXqgHVUGBRTHA" target="_blank" rel="noopener noreferrer">
          Shop No. 180 - 216 / 218, Ground Floor, Lohe Ki Chawl, (Mumbai Bag
          Market), M. Azad Road, Opp. K.K. Art House, 
          <br />
          Madanpura, Mumbai - 400 008.
          </a>
        </h3>
        <br />
        <h3>GST No.: </h3>
        <br />
        <h3>Mr. Jamaluddin: 9320919157</h3>
        <br />
        <h3>Mr. Saddam: 9594679390 / 7977175538</h3>
        </div>
        <div className="right">
          <img className="Shopimg" src="./Shop.jpg" alt="Shop" />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
