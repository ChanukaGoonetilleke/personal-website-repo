import React from "react";

import { useSelector } from "react-redux";

import Modal from "../UI/Modal";

import classes from "./ProjectDisplay.module.css";

import { Carousel } from "react-bootstrap";
import { BsX } from "react-icons/bs";

import { BlackjackData } from "./projectImages/ImageData";
import { OslData } from "./projectImages/ImageData";
import { PowerData } from "./projectImages/ImageData";
import { adProData } from "./projectImages/ImageData";
import { seleniumData } from "./projectImages/ImageData";
import { powerBIData } from "./projectImages/ImageData";
import { hackathonData } from "./projectImages/ImageData";
import { awsData } from "./projectImages/ImageData";

const ProjectDisplay = (props) => {
  const id = useSelector((state) => state.id.id);

  let view;

  let title = "";
  let discription = "";

  if (id === "1") {
    view = BlackjackData;
    title = "Blackjack";
    discription =
      "During my enrollment at Ontario Tech University, I undertook the task of recreating the classic game of Blackjack as part of my web development course. Employing a diverse set of technologies, including HTML, CSS, SVG, JavaScript, JQuery, D3, and AJAX, I crafted an engaging frontend experience for the game. Additionally, for the backend infrastructure, I harnessed the power of Node.js and leveraged the capabilities of SQLite. This project not only provided an enjoyable creative outlet but also served to enhance my proficiency as a Blackjack player.";
  } else if (id === "2") {
    view = OslData;
    title = "OSL Laptop Organizer";
    discription =
      "Autonomously engineered a comprehensive laptop inventory management application for OSL, enabling streamlined tracking and organization of laptops. Leveraging the capabilities of React Typescript for the frontend and Firebase for the backend, the application was meticulously designed to ensure efficient and reliable functionality.";
  } else if (id === "3") {
    view = PowerData;
    title = "PowerPlant Farms";
    discription =
      "At PowerPlant Farms, a dynamic startup in Pickering, Ontario, dedicated to pioneering a cutting-edge vertical farming solution, my pivotal responsibility entailed crafting the Human Machine Interface (HMI) with React. Additionally, my role necessitated seamless communication with a Flask Backend API to execute multifaceted functions and present data in an innovative and engaging format.";
  } else if (id === "4") {
    view = adProData;
    title = "AdPro";
    discription =
      "During my enriching 12-month co-op tenure at the Treasury Board Secretariat, I actively contributed to the development of the AdPro Project, a pioneering Tax Case Management Application. This innovative solution was meticulously crafted, utilizing Outsystems 11 for the frontend and leveraging Azure for the seamless integration of backend events and infrastructure. My multifaceted involvement in this project included serving as a diligent QA tester, addressing frontend debugging challenges, and contributing significantly to the backend's letter generation feature within the .NET Framework.";
  } else if (id === "5") {
    view = seleniumData;
    title = "CSS Selenium";
    discription =
      "I oversaw the implementation and execution of automated Selenium tests for the Child Support Service (CSS) portal application. Each day, I received an extensive spreadsheet from a Senior Systems Analyst, encompassing numerous test scenarios. Utilizing a meticulously developed Selenium program written in C#, I seamlessly extracted data from the Excel file, enabling the automated execution of tests as per the spreadsheet configurations. Subsequently, I proficiently communicated the test results to the Senior Systems Analyst via email. Additionally, I authored comprehensive documentation outlining the intricacies of the Selenium test process, ensuring that my colleagues could effortlessly conduct the tests as well.";
  } else if (id === "6") {
    view = hackathonData;
    title = "Microsoft Hackathon";
    discription =
      "During my second co-op work term at the Treasury Board Secretariat, I actively participated in a Microsoft-hosted hackathon aimed at fostering innovative solutions using the Microsoft Power Platform tools. Tasked with creating a product to assist our colleagues, our team of co-op students conceptualized and developed a job application filtering app. Leveraging an array of Power Platform tools including Power Apps, Power Automate, AI Builder, and Dataverse, we seamlessly crafted the application. My key responsibilities encompassed establishing the data model, creating Dataverse tables, and establishing crucial connections between Dataverse and our Power Automate flow. Additionally, I took the lead in curating the compelling video presentation, a pivotal component that contributed to our second-place victory in the hackathon.";
  } else if (id === "7") {
    view = powerBIData;
    title = "Power BI Reports";
    discription =
      "In the final stages of the AdPro project, I undertook the task of meticulously crafting 10 Key Performance Indicator (KPI) reports utilizing Power BI. Collaborating closely with our esteemed client, I ensured that the Power BI reports were tailored precisely to their preferences, both in appearance and functionality. Beyond the creation of these reports, I facilitated their seamless deployment across various environments, utilizing the deploy functionality within Power BI to transition them effectively to the DEV, TEST, and UAT environments.";
  } else if (id === "8") {
    view = awsData;
    title = "Siker Media AWS Migration";
    discription =
      "Siker Media, an advertising agency headquartered in Toronto, Canada, sought my assistance in migrating to AWS. Initially relying on HostGator for deploying multiple WordPress websites, they encountered persistent latency issues and server-side errors. I provided comprehensive consultation to the Siker team, orchestrating a seamless transition of their hosting and DNS services to AWS, ensuring improved quality of service and cost-efficiency.";
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
