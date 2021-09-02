import React, { useEffect } from "react";

import classes from "./Languages.module.css";

import reactImage from "../../images/react.png";
import java from "../../images/java.png";
import python from "../../images/python.png";
import cSharp from "../../images/cSharp.png";
import junit from "../../images/junit.png";
import oracle from "../../images/oracle.png";
import postgres from "../../images/postgres.png";
import docker from "../../images/docker.png";
import node from "../../images/mongo.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Languages = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div className={classes.wrap}>
        <h1 className={classes.title}>
          Qualified in the following Technologies
        </h1>
        <div data-aos="fade-right" className={classes.div}>
          <img className={classes.img} src={reactImage} alt="React" />
          <img className={classes.img} src={cSharp} alt="C#" />
          <img className={classes.img} src={junit} alt="junit5" />
        </div>
        <div data-aos="fade-right" className={classes.div}>
          <img className={classes.img} src={oracle} alt="Oracle Database" />
          <img className={classes.img} src={node} alt="mongoDB" />
          <img className={classes.img} src={docker} alt="Docker" />
        </div>
        <div data-aos="fade-right" className={classes.div}>
          <img className={classes.img} src={java} alt="Java" />
          <img className={classes.img} src={python} alt="Python" />
          <img className={classes.img} src={postgres} alt="SQL" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Languages;
