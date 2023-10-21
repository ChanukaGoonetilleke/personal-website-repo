import React from "react";

import classes from "./About.module.css";

import otu from "../../images/otu.png";
import azurefunda from "../../images/az900.png";
import react from "../../images/react.png";
import Expirence from "./Expirence";
import ExpirenceList from "./ExpirenceList";

const About = () => {
  const paragraphAboutMe =
    "Having originated from Sri Lanka, I relocated to Canada in 2008, where I received my education within the Canadian system. My fascination with software development began at the age of 15, as I delved into crafting Android applications for my close circle. During my university years, my focus shifted to mastering the intricacies of web development, igniting a deep-seated passion within me. Post-graduation, I have dedicated myself to the pursuit of designing impactful solutions for various organizations, allowing my passion to guide my professional path.";

  return (
    <React.Fragment>
      <div data-aos="fade-left" className={classes.div}>
        <div className={classes.wrap}>
          <h1 className={classes.title}>About me</h1>
          <p className={classes.sentence}>{paragraphAboutMe}</p>
          <ExpirenceList />
          <h2 className={classes.edu}>Education</h2>
          <div className={classes.uni}>
            <img className={classes.img} src={otu} alt="otu" />
            <p className={classes.sentenceEdu}>
              Bachelors of Science (honours) in Computer Science from Ontario
              Tech University
            </p>
          </div>
          <h2 className={classes.edu}>Certifications</h2>
          <div className={classes.uni}>
            <img
              className={classes.img}
              src={azurefunda}
              alt="azure fundamentals"
            />
            <a
              href="https://www.credly.com/badges/fcfe40fc-2324-4cf7-803f-d152637f398c"
              className={classes.sentenceEdu}
            >
              AZ-900: Microsoft Azure Fundamentals Certification
            </a>
            <img
              className={classes.img}
              src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png"
              alt="react"
            />
            <a
              href="https://www.credly.com/badges/479c0321-57bc-4c77-9c5c-7eca4683d8e3/public_url"
              className={classes.sentenceEdu}
            >
              AWS Certified Solutions Architect – Associate
            </a>

            <img
              className={classes.img}
              src="https://miro.medium.com/v2/resize:fit:300/0*puFT00gVK-7ik0Bt.png"
              alt="react"
            />
            <a className={classes.sentenceEdu}></a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
