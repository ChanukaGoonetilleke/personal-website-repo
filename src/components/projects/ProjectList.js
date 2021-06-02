import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

import ProjectItem from "./ProjectItem";

import blackjack from "../../images/blackjack.jpg";
import hackon from "../../images/hackon.jpg";
import construction from "../../images/construction.jpg";

import classes from "./ProjectList.module.css";

import Aos from 'aos';
import "aos/dist/aos.css";

const ProjectList = (props) => {

  const reactProject = useSelector((state) => state.selector.reactProject);
  const javaScriptProject = useSelector((state) => state.selector.javaScriptProject);

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
          {javaScriptProject && (
            <React.Fragment >
              <ProjectItem
                onClick={props.onShowDisplay}
                image={blackjack}
                alt="blackjack"
                id={blackjackId}
              />
            </React.Fragment>
          )}
          {reactProject && (
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
