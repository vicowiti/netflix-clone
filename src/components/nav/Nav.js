import React, { useState, useEffect } from "react";
import "./nav.css";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShowBackground(true) : setShowBackground(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${showBackground && "showbg"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
      />
      <FaUserCircle className="nav-icon" />
    </nav>
  );
};

export default Nav;
