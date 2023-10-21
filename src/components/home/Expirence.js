import React from "react";

import classes from "./Expirence.module.css";

import otu from "../../images/otu.png";

const Expirence = (props) => {

    return (
        <React.Fragment>
            <div className={classes.div}>
                <img className={classes.img} src={props.image} alt="img" />
                <div className={classes.content}>
                    <h4>{props.jobTitle}</h4>
                    <h5>{props.company}</h5>
                    <h6>{props.date}</h6>
                    <h6>{props.location}</h6>
                    <p>{props.discription}</p>
                </div>
            </div>

            
        </React.Fragment>
    );

};

export default Expirence;