import React from "react";

import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        <nav className={classes.navLogo}>
          <ul>
            <li>
              <NavLink to="/">
                CG
              </NavLink>
            </li>
          </ul>
        </nav>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/projects" activeClassName={classes.active}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeClassName={classes.active}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
