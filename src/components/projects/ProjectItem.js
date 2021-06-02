import React from "react";

import classes from "./ProjectItem.module.css";

import { useDispatch } from "react-redux";
import { idActions } from "../../store/index";

const ProjectItem = (props) => {

  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    event.preventDefault();
    dispatch(idActions.setId(props.id));
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
