import React from "react";

import classes from "./About.module.css";

import otu from "../../images/otu.png";

const About = () => {
  const paragraphAboutMe =
    "I was born and raised in Sri lanka. I immigrated to Canada in 2008 and I was brought up in the Canadian educational system. I have been passionate about software development since I was 15 years old. Initially, I started creating Android apps for my friends and family. Then in university, I started learning Web development after I took a third year Web Devlopment (CSCI 3230U) class taught by Randy J. Fortier. I find developing software and learn about new technology very enjoyable. This is why I feel like I can be in the Tech Industry for a very long time.";

  return (
    <React.Fragment>
      <div className={classes.div}>
        <div className={classes.wrap}>
          <h1 className={classes.title}>About me</h1>
          <p className={classes.sentence}>{paragraphAboutMe}</p>
          <h2 className={classes.edu}>Education</h2>
          <div className={classes.uni}>
            <img className={classes.img} src={otu} alt="otu" />
            <p className={classes.sentenceEdu}>
              Bachelors of Science (honours) in Computer Science from Ontario
              Tech University
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
