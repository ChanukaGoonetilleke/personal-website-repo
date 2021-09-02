import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { BsX } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";

import { useDispatch } from "react-redux";
import { selectorActions } from "../../store/index";

import classes from "./MainNavigation.module.css";

import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const resetSelector = () => {
    dispatch(selectorActions.reactProjectShow());
    dispatch(selectorActions.javaScriptProjectShow());
  };

  return (
    <>
      <nav className={classes["navbar"]}>
        <div className={classes["nav-container"]}>
          <Link
            to="home"
            className={classes["nav-logo"]}
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            CG
            <i className={classes["fas fa-code"]}></i>
          </Link>

          <ul className={click ? classes["nav-menuChan"] : classes["nav-menu"]}>
            <li className={classes["nav-item"]}>
              <Link
                to="projects"
                activeClassName={classes["active"]}
                className={classes["nav-links"]}
                onClick={handleClick}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="contacts"
                activeClassName={classes["active"]}
                className={classes["nav-links"]}
                offset={-100}
                onClick={() => {
                  handleClick();
                }}
              >
                Contacts
              </Link>
            </li>
          </ul>
          <div className={classes["nav-icon"]} onClick={handleClick}>
            <i> {click ? <BsX /> : <VscMenu />}</i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
