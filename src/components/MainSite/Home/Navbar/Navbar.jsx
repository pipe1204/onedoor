import React, { useState } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

import config from '../../../../config';

function Navbar() {
  const [clickIcon, setClickIcon] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const validateRedirect = ["registro", "login"];

  function handleClick() {
    setClickIcon(!clickIcon);
  }

  function changeIcon() {
    setClickIcon(!clickIcon);
  }

  const addShadow = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', addShadow)

  return (
    <nav className={ navbar ? "NavbarItems active" : "NavbarItems" }>
      <div className="language-nav">
        <Link to="/">
          <img src="../Logo-no-background.png" className="navbar-logo" />
        </Link>
        <div className="language-div">
            <a href="https://es.useonedoor.co/" className="language">🇦🇺</a>
            <a href="https://useonedoor.co/" className="language">🇨🇴</a>
        </div>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clickIcon ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clickIcon ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          const { id, title, cName, direct } = item;
          let propsLink = {};
          const validate = validateRedirect.includes(direct);
          if (validate) {
            propsLink = {
              to: {
                pathname: `${config.dashboarPath}/${direct}`,
              },
              target: "_blank",
            };
          } else {
            propsLink = {
              to: direct,
            };
          }
          return (
            <Link {...propsLink} className="nav-links" key={id}>
              <li onClick={changeIcon}>
                <a className={cName}>{title}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
