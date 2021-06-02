import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";

import { BsX } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";

import {useDispatch} from 'react-redux';
import { selectorActions } from '../../store/index'; 

import classes from './MainNavigation.module.css';

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
          <NavLink exact to="/" className={classes["nav-logo"]} onClick={resetSelector}>
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
                onClick={() => {handleClick(); resetSelector();}}
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
