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
      <div className={classes["flip-card"]}>
        <div className={classes["flip-card-inner"]}>
          <div className={classes["flip-card-front"]}>
            <img className={classes.img} src={props.image} alt={props.alt} />
          </div>
          <div className={classes["flip-card-back"]}>
            <h1>{props.title}</h1>
            <p>{props.tools}</p>
            <button className={classes.button} onClick={onClickHandler}>
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectItem;
