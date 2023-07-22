import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterBanner = ({}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h1>Contact Us</h1>
          <br />
          <h1>Alvira - Shabnam Bags</h1>
          <br />
          <h3>
            <Link
              href={`https://goo.gl/maps/EGGFiXqgHVUGBRTHA`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <a className="addresslink" target="_blank">
                Shop No. 180 - 216 / 218, Ground Floor, Lohe Ki Chawl, (Mumbai
                Bag Market), M. Azad Road, Opp. K.K. Art House,
                <br />
                Madanpura, Mumbai - 400 008.
              </a>
            </Link>
          </h3>
          <br />
          <h3>GST No.: </h3>
          <br />
          <h3>Mr. Jamaluddin: 9320919157</h3>
          <br />
          <h3>Mr. Saddam: 9594679390 / 7977175538</h3>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
