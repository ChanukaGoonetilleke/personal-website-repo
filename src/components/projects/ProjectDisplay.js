import React, { useContext } from "react";
import ProjectContext from "../../store/project-context";

import Modal from "../UI/Modal";

import classes from "./ProjectDisplay.module.css";

import { Carousel } from "react-bootstrap";
import { BsX } from "react-icons/bs";

import blackjack1 from "../../images/blackjack1.png";
import blackjack2 from "../../images/blackjack2.png";
import blackjack3 from "../../images/blackjack3.png";

import construction from "../../images/construction.jpg";

const ProjectDisplay = (props) => {
  let image1;
  let image2;
  let image3;

  let title = "";
  let discription = "";

  const displayCtx = useContext(ProjectContext);

  if (displayCtx.id === "1") {
    image1 = blackjack1;
    image2 = blackjack2;
    image3 = blackjack3;
    title = "Blackjack";
    discription =
      "I remade Blackjack for my web development course at Ontario Tech University. For the frontend of the game I use HTML, CSS, SVG, Javascript, JQuery, D3 and AJAX. For the backend of the game I used Node.js, Vue.js, Pug,  and SQLite. This game was very fun to make and I think it made me a better blackjack player.";
  } else if (displayCtx.id === "2") {
    image1 = construction;
    image2 = construction;
    image3 = construction;
    title = "OSL Laptop Organizer";
    discription = "Application is in development phase";
  }

  return (
    <React.Fragment>
      <Modal onClose={props.onHideDisplay}>
        <div className={classes.content}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="Third slide" />
            </Carousel.Item>
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
