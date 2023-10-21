import React, { useEffect } from "react";

import chan from "../../images/Personal_Photo.png";
import classes from "./Introduction.module.css";

import Typical from "react-typical";

import Aos from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div data-aos="flip-right" className={classes.div}>
        <div className={classes.first}>
          <img className={classes.image} src={chan} alt="Chan" />
        </div>
        <div className={classes.second}>
          <h2>
            Hi, I'm <span className={classes.name}>Chanuka Goonetilleke</span>
          </h2>
          <h2>
            I'm a{" "}
            <Typical
              className={classes.typical}
              steps={["Solutions Architect", 2000, "Software Engineer", 2000]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Introduction;
