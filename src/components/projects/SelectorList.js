import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { selectorActions } from "../../store/index";

import classes from "./SelectorList.module.css";

const SelectorList = () => {
  const dispatch = useDispatch();

  const [all, setAll] = useState(true);
  const [javeScript, setJavaScript] = useState(false);
  const [react, setReact] = useState(false);
  const [outsystems, setOutsystems] = useState(false);
  const [selenium, setSelenium] = useState(false);
  const [powerPlatform, setPowerPlatform] = useState(false);
  const [aws, setAws] = useState(false);

  const allOnClickHandler = (event) => {
    event.preventDefault();
    setAll(true);
    setReact(false);
    setPowerPlatform(false);
    setAws(false);
    dispatch(selectorActions.javaScriptProjectShow());
    dispatch(selectorActions.reactProjectShow());
    dispatch(selectorActions.outsystemsProjectShow());
    dispatch(selectorActions.seleniumProjectShow());
    dispatch(selectorActions.powerPlatformProjectShow());
    dispatch(selectorActions.awsProjectShow());
  };

  const reactOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setReact(true);
    setPowerPlatform(false);
    setAws(false);
    dispatch(selectorActions.javaScriptProjectHide());
    dispatch(selectorActions.reactProjectShow());
    dispatch(selectorActions.outsystemsProjectHide());
    dispatch(selectorActions.seleniumProjectHide());
    dispatch(selectorActions.powerPlatformProjectHide());
    dispatch(selectorActions.awsProjectHide());
  };

  const powerPlatformOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setReact(false);
    setPowerPlatform(true);
    setAws(false);
    dispatch(selectorActions.javaScriptProjectHide());
    dispatch(selectorActions.reactProjectHide());
    dispatch(selectorActions.outsystemsProjectHide());
    dispatch(selectorActions.seleniumProjectHide());
    dispatch(selectorActions.powerPlatformProjectShow());
    dispatch(selectorActions.awsProjectHide());
  };

  const awsOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setReact(false);
    setPowerPlatform(false);
    setAws(true);
    dispatch(selectorActions.javaScriptProjectHide());
    dispatch(selectorActions.reactProjectHide());
    dispatch(selectorActions.outsystemsProjectHide());
    dispatch(selectorActions.seleniumProjectHide());
    dispatch(selectorActions.powerPlatformProjectHide());
    dispatch(selectorActions.awsProjectShow());
  };

  return (
    <React.Fragment>
      <div className={classes.div} id="projects">
        <h1 className={classes.title}>Projects</h1>
        <button
          className={all ? classes.active : classes.button}
          onClick={allOnClickHandler}
        >
          ALL
        </button>

        <button
          className={react ? classes.active : classes.button}
          onClick={reactOnClickHandler}
        >
          REACT.JS
        </button>

        <button
          className={powerPlatform ? classes.active : classes.button}
          onClick={powerPlatformOnClickHandler}
        >
          POWER PLATFORM
        </button>

        <button
          className={aws ? classes.active : classes.button}
          onClick={awsOnClickHandler}
        >
          AWS
        </button>
      </div>
    </React.Fragment>
  );
};

export default SelectorList;
