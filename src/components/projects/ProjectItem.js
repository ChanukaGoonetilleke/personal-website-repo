import React, { useState, useContext } from "react";

import classes from "./ProjectItem.module.css";
import ProjectContext from '../../store/project-context';

const ProjectItem = (props) => {
  const displayCtx = useContext(ProjectContext);

  const onClickHandler = (event) => {
    event.preventDefault();
    displayCtx.setId(props.id);
    props.onClick();
  };

  return (
    <React.Fragment>
      <img
        onClick={onClickHandler}
        className={classes.img}
        src={props.image}
        alt={props.alt}
      />
    </React.Fragment>
  );
};

export default ProjectItem;
