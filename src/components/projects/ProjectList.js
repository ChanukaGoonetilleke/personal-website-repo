import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ProjectItem from "./ProjectItem";

import blackjack from "../../images/blackjack.jpg";
import hackon from "../../images/hackon.jpg";
import osl from "../../images/osl.jpeg";
import power from "../../images/power.jpg";

import classes from "./ProjectList.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

const ProjectList = (props) => {
  const reactProject = useSelector((state) => state.selector.reactProject);
  const javaScriptProject = useSelector(
    (state) => state.selector.javaScriptProject
  );

  const blackjackId = "1";
  const oslId = "2";
  const powerId = "3";

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div data-aos="fade" className={classes.div}>
          {javaScriptProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={blackjack}
                alt="blackjack"
                id={blackjackId}
                title="Backjack Game"
                tools="JavaScript / Node JS"
              />
            </React.Fragment>
          )}
          {reactProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={power}
                alt="power"
                id={powerId}
                title="PowerPlant Farms"
                tools="React JS / Python"
              />

              <ProjectItem
                onClick={props.onShowDisplay}
                image={osl}
                alt="osl"
                id={oslId}
                title="Laptop Organizer"
                tools="React JS / Firebase"
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectList;
