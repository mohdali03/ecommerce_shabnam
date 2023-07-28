import React from "react";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Image from "next/image";

import { useStateContext } from "../context/StateContext";

const Navbar = () => {

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link className="logo img logo text"href={`/`}>
          <a >Shabnam Bag</a>
        </Link>
      </p>

      <button type="button" className="cart-icon whatsapp">
        <Link
          href={`https://wa.me/918828081163?text=Hii%2C%0AI%20am%20at%20your%20online%20store%20and%20need%20some%20help.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWhatsApp />
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
