import React from "react";

import { useSelector } from "react-redux";

import Modal from "../UI/Modal";

import classes from "./ProjectDisplay.module.css";

import { Carousel } from "react-bootstrap";
import { BsX } from "react-icons/bs";

import { BlackjackData } from "./projectImages/ImageData";
import { OslData } from "./projectImages/ImageData";
import { PowerData } from "./projectImages/ImageData";

const ProjectDisplay = (props) => {
  const id = useSelector((state) => state.id.id);

  let view;

  let title = "";
  let discription = "";

  if (id === "1") {
    view = BlackjackData;
    title = "Blackjack";
    discription =
      "I remade Blackjack for my web development course at Ontario Tech University. For the frontend of the game I use HTML, CSS, SVG, Javascript, JQuery, D3 and AJAX. For the backend of the game I used Node.js, and SQLite. This game was very fun to make and I think it made me a better blackjack player.";
  } else if (id === "2") {
    view = OslData;
    title = "OSL Laptop Organizer";
    discription =
      "Independently developed a laptop inventory organization application to keep track of laptops for OSL. The application was developed using React Typescript for the frontend and Firebase for the backend.";
  } else if (id === "3") {
    view = PowerData;
    title = "PowerPlant Farms";
    discription =
      "PowerPlant Farms is a startup based in Pickering, Ontario that is building a next generation vertical farming solution to help culinary creatives bring their imagination to life. My role at PowerPlant Farms was to create the Human Machine Interface (HMI) using React. Furthermore, I would have to communicate with a Flask Backend API to perform functions, and display data in a creative manner.";
  }

  return (
    <React.Fragment>
      <Modal onClose={props.onHideDisplay}>
        <div className={classes.content}>
          <Carousel>
            {view.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={item.image} alt="slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.discription}>{discription}</p>
        <div className={classes.actions}>
          <a onClick={props.onHideDisplay}>
            <BsX size="2em" />
          </a>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ProjectDisplay;
