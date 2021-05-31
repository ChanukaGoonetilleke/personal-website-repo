import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";

import { BsX } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className={classes["navbar"]}>
        <div className={classes["nav-container"]}>
          <NavLink exact to="/" className={classes["nav-logo"]}>
            CG
            <i className={classes["fas fa-code"]}></i>
          </NavLink>

          <ul className={click ? classes["nav-menuChan"] : classes["nav-menu"]}>
           
            <li className={classes["nav-item"]}>
              <NavLink
                exact
                to="/projects"
                activeClassName={classes["active"]}
                className={classes["nav-links"]}
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink
                exact
                to="/contacts"
                activeClassName={classes["active"]}
                className={classes["nav-links"]}
                onClick={handleClick}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className={classes["nav-icon"]} onClick={handleClick}>
            <i> {click ? <BsX /> : <VscMenu/>}</i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
