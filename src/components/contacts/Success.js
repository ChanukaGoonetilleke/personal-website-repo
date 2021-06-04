import React from "react";

import { BsX } from "react-icons/bs";

import classes from './Success.module.css';

const Success = (props) => {

  return (
    <React.Fragment>
      <div className={`${props.className} ${classes.div}`}>
        <p className={classes.p}>Your message was sent successfully. Thanks!</p>
        <a className={classes.a} onClick={props.onClose}>
          <BsX size="1.5em" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default Success;
