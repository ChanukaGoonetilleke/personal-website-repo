import React from "react";

import { BsX } from "react-icons/bs";

import classes from "./Error.module.css";

const Error = (props) => {
  return (
    <React.Fragment>
      <div className={`${props.className} ${classes.div}`}>
        <p className={classes.p}>
          Your message was sent unsuccessfully. Please try again!
        </p>
        <a className={classes.a} onClick={props.onClose}>
          <BsX size="1.5em" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default Error;