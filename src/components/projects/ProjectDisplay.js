import React from "react";

import { useSelector } from "react-redux";

import Modal from "../UI/Modal";

import classes from "./ProjectDisplay.module.css";

import { Carousel } from "react-bootstrap";
import { BsX } from "react-icons/bs";

import blackjack1 from "../../images/blackjack1.png";
import blackjack2 from "../../images/blackjack2.png";
import blackjack3 from "../../images/blackjack3.png";

import hackon1 from "../../images/hackon1.png";
import hackon2 from "../../images/hackon2.png";
import hackon3 from "../../images/hackon3.png";

import construction from "../../images/construction.jpg";

const ProjectDisplay = (props) => {
  const id = useSelector((state) => state.id.id);

  let image1;
  let image2;
  let image3;

  let title = "";
  let discription = "";

  if (id === "1") {
    image1 = blackjack1;
    image2 = blackjack2;
    image3 = blackjack3;
    title = "Blackjack";
    discription =
      "I remade Blackjack for my web development course at Ontario Tech University. For the frontend of the game I use HTML, CSS, SVG, Javascript, JQuery, D3 and AJAX. For the backend of the game I used Node.js, Vue.js, Pug,  and SQLite. This game was very fun to make and I think it made me a better blackjack player.";
  } else if (id === "2") {
    image1 = construction;
    image2 = construction;
    image3 = construction;
    title = "OSL Laptop Organizer";
    discription = "Application is in development phase";
  } else if (id === "3") {
    image1 = hackon1;
    image2 = hackon2;
    image3 = hackon3;
    title = "Check Yourself!";
    discription =
      "Check yourself is an application my team and I made for the Hackon 2.0 coding competition. This application is intended to help people better deal with their own mental health issues. The application is a questionnaire assessment to find out more about yourself so you can figure out what you need more/less of in your life.";
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
