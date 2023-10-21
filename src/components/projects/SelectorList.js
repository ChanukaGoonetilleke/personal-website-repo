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

  const allOnClickHandler = (event) => {
    event.preventDefault();
    setAll(true);
    setJavaScript(false);
    setReact(false);
    setOutsystems(false);
    setSelenium(false);
    setPowerPlatform(false);
    dispatch(selectorActions.javaScriptProjectShow());
    dispatch(selectorActions.reactProjectShow());
    dispatch(selectorActions.outsystemsProjectShow());
    dispatch(selectorActions.seleniumProjectShow());
    dispatch(selectorActions.powerPlatformProjectShow());
  };

  const javaScriptOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setJavaScript(true);
    setReact(false);
    setOutsystems(false);
    setSelenium(false);
    setPowerPlatform(false);
    dispatch(selectorActions.javaScriptProjectShow());
    dispatch(selectorActions.reactProjectHide());
    dispatch(selectorActions.outsystemsProjectHide());
    dispatch(selectorActions.seleniumProjectHide());
    dispatch(selectorActions.powerPlatformProjectHide());
  };

  const reactOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setJavaScript(false);
    setReact(true);
    setOutsystems(false);
    setSelenium(false);
    setPowerPlatform(false);
    dispatch(selectorActions.javaScriptProjectHide());
    dispatch(selectorActions.reactProjectShow());
    dispatch(selectorActions.outsystemsProjectHide());
    dispatch(selectorActions.seleniumProjectHide());
    dispatch(selectorActions.powerPlatformProjectHide());
  };

  const outsystemsOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setJavaScript(false);
    setReact(false);
    setOutsystems(true);
    setSelenium(false);
    setPowerPlatform(false);
    dispatch(selectorActions.javaScriptProjectHide());
    dispatch(selectorActions.reactProjectHide());
    dispatch(selectorActions.outsystemsProjectShow());
    dispatch(selectorActions.seleniumProjectHide());
    dispatch(selectorActions.powerPlatformProjectHide());
  };

  const seleniumOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setJavaScript(false);
    setReact(false);
    setOutsystems(false);
    setSelenium(true);
    setPowerPlatform(false);
    dispatch(selectorActions.javaScriptProjectHide());
    dispatch(selectorActions.reactProjectHide());
    dispatch(selectorActions.outsystemsProjectHide());
    dispatch(selectorActions.seleniumProjectShow());
    dispatch(selectorActions.powerPlatformProjectHide());
  };

  const powerPlatformOnClickHandler = (event) => {
    event.preventDefault();
    setAll(false);
    setJavaScript(false);
    setReact(false);
    setOutsystems(false);
    setSelenium(false);
    setPowerPlatform(true);
    dispatch(selectorActions.javaScriptProjectHide());
    dispatch(selectorActions.reactProjectHide());
    dispatch(selectorActions.outsystemsProjectHide());
    dispatch(selectorActions.seleniumProjectHide());
    dispatch(selectorActions.powerPlatformProjectShow());
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
      </div>
    </React.Fragment>
  );
};

export default SelectorList;
