import React from "react";
import airbnbLogo from "../images/airbnbLogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={airbnbLogo} alt="logo" className="navbar--logo" />
    </nav>
  );
}

export default Navbar;
