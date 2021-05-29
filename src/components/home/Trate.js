import React from "react"; 

import classes from "./Trate.module.css";

const Trate = (props) => {
  return (
    <React.Fragment>
        <div className={classes.div}>
          <img className={classes.img} src={props.image} alt="trate" />
          <h4 className={classes.title}>{props.title}</h4>
          <p className={classes.discription}>{props.disc}</p>
        </div>
    </React.Fragment>
  );
};

export default Trate;
