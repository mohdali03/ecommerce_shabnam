import React from "react";
// import { AiFillInstagram, AiOutlineTwitter} from 'react-icons';
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <strong>&copy; 2023 Shabnam Bag</strong>{" "}
      </p>
      <Link className="companylink" href={`https://geekytechh.netlify.app`}>
        <a target="_blank">
          Created By <strong>Geeky Techh</strong>
        </a>
      </Link>
    </div>
    // <div className="footer-container">
    // </div>
  );
};

export default Footer;
