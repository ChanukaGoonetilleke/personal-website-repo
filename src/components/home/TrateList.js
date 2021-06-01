import React, { useEffect } from "react";
import Trate from "./Trate";

import passion from "../../images/passion.png";
import solver from "../../images/solver.png";
import commuication from '../../images/commuication.png';

import classes from "./TrateList.module.css";

import Aos from 'aos';
import "aos/dist/aos.css";

const TrateList = () => {
  const passionTitle = "Passion";
  const passionDisc =
    "I am not just looking to complete a job. I want to create real, lasting and personalized applications.";

  const solverTitle = "Problem Solver";
  const solverDisc = "I am a firm believer that there is no problem that does not have a direct or indirect solution.";

  const commTitle = "Soft Skills";
  const commDisc = "I am a people person and I love to teach and learn from my peers";

  useEffect(() => {
    Aos.init({duration: 2000})
  }, []);

  return (
    <div data-aos="fade-right" className={classes.div}>
      <Trate image={passion} title={passionTitle} disc={passionDisc} />
      <Trate image={solver} title={solverTitle} disc={solverDisc} />
      <Trate image={commuication} title={commTitle} disc={commDisc} />
    </div>
  );
};

export default TrateList;
