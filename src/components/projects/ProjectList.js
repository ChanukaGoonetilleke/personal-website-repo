import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";

import blackjack from "../../images/blackjack.jpg";
import hackon from '../../images/hackon.jpg'
import construction from "../../images/construction.jpg";

import classes from "./ProjectList.module.css";
import ProjectContext from "../../store/project-context";

const ProjectList = (props) => {
  const displayCtx = useContext(ProjectContext);

  const blackjackId = "1";
  const oslId = "2";
  const hackonId = "3";

  return (
    <React.Fragment>
      <div className={classes.div}>
        <div className={classes.wrap}>
          {displayCtx.javaScriptProject && (
            <React.Fragment>
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
