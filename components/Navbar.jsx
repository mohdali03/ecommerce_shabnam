import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
// import img1 from '/public/ALVIRA.jpg'
import ReactWhatsapp from "react-whatsapp";
// import Image from "./ALVIRA.jpg";

import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        {/* <Image className="logo img" src="./ALVIRA.jpg"></Image> */}
        <a href="/">
          <img className="logo img" src="./ALVIRA.jpg" alt="Logo" />
        </a>
      </p>

      <button type="button" className="cart-icon whatsapp">
        <a
          href="https://wa.me/918828081163?text=Hii%2C%0AI%20am%20at%20your%20online%20store%20and%20need%20some%20help."
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWhatsApp />
        </a>
        {/* <ReactWhatsapp number="+91 88280 81163" message="Hello World!!!" /> */}
      </button>
    </div>
  );
};

export default Navbar;
