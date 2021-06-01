import React, { useContext, useEffect } from "react";
import ProjectItem from "./ProjectItem";

import blackjack from "../../images/blackjack.jpg";
import hackon from "../../images/hackon.jpg";
import construction from "../../images/construction.jpg";

import classes from "./ProjectList.module.css";
import ProjectContext from "../../store/project-context";

import Aos from 'aos';
import "aos/dist/aos.css";

const ProjectList = (props) => {
  const displayCtx = useContext(ProjectContext);

  const blackjackId = "1";
  const oslId = "2";
  const hackonId = "3";

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <React.Fragment>
      <div className={classes.div}>
        <div data-aos="slide-down" className={classes.wrap}>
          {displayCtx.javaScriptProject && (
            <React.Fragment >
              <ProjectItem
                onClick={props.onShowDisplay}
                image={blackjack}
                alt="blackjack"
                id={blackjackId}
              />
            </React.Fragment>
          )}
          {displayCtx.reactProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={hackon}
                alt="hackon"
                id={hackonId}
              />
              <ProjectItem
                onClick={props.onShowDisplay}
                image={construction}
                alt="osl"
                id={oslId}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectList;
