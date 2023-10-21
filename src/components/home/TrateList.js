import React, { useEffect } from "react";
import Trate from "./Trate";

import passion from "../../images/passion.png";
import solver from "../../images/solver.png";
import commuication from "../../images/commuication.png";

import classes from "./TrateList.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

const TrateList = () => {
  const passionTitle = "Passion";
  const passionDisc =
    "I am not solely focused on finishing tasks; my aim is to craft meaningful, enduring, and customized solutions.";

  const solverTitle = "Problem Solver";
  const solverDisc =
    "I firmly believe that every problem, whether direct or indirect, has a viable solution.";

  const commTitle = "Soft Skills";
  const commDisc =
    "I thrive on interpersonal connections and relish the opportunity to both impart knowledge and gain insights from my peers.";

  useEffect(() => {
    Aos.init({ duration: 2000 });
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
