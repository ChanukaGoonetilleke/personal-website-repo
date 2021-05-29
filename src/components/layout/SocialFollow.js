import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./SocialFollow.module.css";

const SocialFollow = () => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <a
          className={classes.linkedin}
          href="https://www.linkedin.com/in/chan-goon"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className={classes.github}
          href="https://github.com/ChanukaGoonetilleke"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className={classes.instagram}
          href="https://www.instagram.com/chan_goonetilleke/"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default SocialFollow;
