import React, { useContext } from "react";
import ProjectContext from "../../store/project-context";

import classes from "./SelectorList.module.css";

const SelectorList = () => {
  const displayCtx = useContext(ProjectContext);

  const allOnClickHandler = (event) => {
    event.preventDefault();
    displayCtx.setJavaScriptProject(true);
    displayCtx.setReactProject(true);
  };

  const javaScriptOnClickHandler = (event) => {
    event.preventDefault();
    displayCtx.setJavaScriptProject(true);
    displayCtx.setReactProject(false);
  };

  const reactOnClickHandler = (event) => {
    event.preventDefault();
    displayCtx.setJavaScriptProject(false);
    displayCtx.setReactProject(true);
  };

  return (
    <React.Fragment>
      <div className={classes.div}>
        <button autoFocus className={classes.button} onClick={allOnClickHandler}>ALL</button>
        <button className={classes.button} onClick={javaScriptOnClickHandler}>JAVASCRIPT</button>
        <button className={classes.button} onClick={reactOnClickHandler}>REACT.JS</button>
      </div>
    </React.Fragment>
  );
};

export default SelectorList;
