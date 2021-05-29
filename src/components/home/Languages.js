import React from "react";

import classes from "./Languages.module.css";

import reactImage from "../../images/react.png";
import js from "../../images/js.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import cPlus from "../../images/c++.png";
import dart from "../../images/dart.png";
import java from "../../images/java.png";
import python from "../../images/python.png";
import sql from "../../images/sql.png";

const Languages = () => {
  return (
    <React.Fragment>
      <div className={classes.wrap}>
        <h1 className={classes.title}>
          Qualified in the following programming languages
        </h1>
        <div className={classes.div}>
          <img className={classes.img} src={reactImage} alt="React" />
          <img className={classes.img} src={js} alt="JavaScript" />
          <img className={classes.img} src={html} alt="HTML" />
        </div>
        <div className={classes.div}>
          <img className={classes.img} src={css} alt="CSS" />
          <img className={classes.img} src={cPlus} alt="C++" />
          <img className={classes.img} src={dart} alt="Dart" />
        </div>
        <div className={classes.div}>
          <img className={classes.img} src={java} alt="Java" />
          <img className={classes.img} src={python} alt="Python" />
          <img className={classes.img} src={sql} alt="SQL" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Languages;
