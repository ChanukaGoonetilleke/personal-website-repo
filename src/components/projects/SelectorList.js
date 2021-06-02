import React, { useState } from "react";

import { useDispatch } from 'react-redux';
import { selectorActions } from '../../store/index';

import classes from "./SelectorList.module.css";

const SelectorList = () => {

  const dispatch = useDispatch();

  const [all, setAll] = useState(true);
  const [javeScript, setJavaScript] = useState(false);
  const [react, setReact] = useState(false);

  const allOnClickHandler = (event) => {
    event.preventDefault();
    setAll(true);
    setJavaScript(false);
    setReact(false);
    dispatch(selectorActions.javaScriptProjectShow());
    dispatch(selectorActions.reactProjectShow());

  };

  const javaScriptOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setJavaScript(true);
    setReact(false);
    dispatch(selectorActions.javaScriptProjectShow());
    dispatch(selectorActions.reactProjectHide());
  };

  const reactOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setJavaScript(false);
    setReact(true);
    dispatch(selectorActions.javaScriptProjectHide());
    dispatch(selectorActions.reactProjectShow());
  };

  return (
    <React.Fragment>
      <div className={classes.div}>
        <button className={all ? classes.active: classes.button} onClick={allOnClickHandler}>ALL</button>
        <button className={javeScript ? classes.active : classes.button} onClick={javaScriptOnClickHandler}>JAVASCRIPT</button>
        <button className={react ? classes.active : classes.button} onClick={reactOnClickHandler}>REACT.JS</button>
      </div>
    </React.Fragment>
  );
};

export default SelectorList;
