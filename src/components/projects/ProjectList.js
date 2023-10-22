import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import ProjectItem from "./ProjectItem";

import blackjack from "../../images/blackjack.jpg";
import outsystems from "../../images/outsystems.png";
import osl from "../../images/osl.jpeg";
import power from "../../images/power.jpg";
import seleniumImage from "../../images/selenium.png";
import powerBIImage from "../../images/powerBI.png";
import powerPlatformImage from "../../images/powerPlatform.png";

import classes from "./ProjectList.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

const ProjectList = (props) => {
  const reactProject = useSelector((state) => state.selector.reactProject);
  const javaScriptProject = useSelector(
    (state) => state.selector.javaScriptProject
  );
  const outsystemsProject = useSelector(
    (state) => state.selector.outsystemsProject
  );
  const seleniumProject = useSelector(
    (state) => state.selector.seleniumProject
  );
  const powerPlatformProject = useSelector(
    (state) => state.selector.powerPlatformProject
  );
  const awsProject = useSelector((state) => state.selector.awsProject);

  const blackjackId = "1";
  const oslId = "2";
  const powerId = "3";
  const adProId = "4";
  const seleniumId = "5";
  const hackathonId = "6";
  const powerBiId = "7";
  const awsSikerId = "8";

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div data-aos="fade" className={classes.div}>
          {javaScriptProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={blackjack}
                alt="blackjack"
                id={blackjackId}
                title="Backjack Game"
                tools="JavaScript / Node JS"
              />
            </React.Fragment>
          )}
          {reactProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={power}
                alt="power"
                id={powerId}
                title="PowerPlant Farms"
                tools="React JS / Python"
              />

              <ProjectItem
                onClick={props.onShowDisplay}
                image={osl}
                alt="osl"
                id={oslId}
                title="Laptop Organizer"
                tools="React JS / Firebase"
              />
            </React.Fragment>
          )}
          {outsystemsProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={outsystems}
                alt="adPro"
                id={adProId}
                title="AdPro"
                tools="Outsystems / Azure"
              />
            </React.Fragment>
          )}
          {seleniumProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={seleniumImage}
                alt="selenium"
                id={seleniumId}
                title="CSS Selenium"
                tools="Selenium / C#"
              />
            </React.Fragment>
          )}
          {powerPlatformProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={powerBIImage}
                alt="powerBI"
                id={powerBiId}
                title="Power BI Reports"
                tools="Power BI / SQL Server"
              />
            </React.Fragment>
          )}
          {powerPlatformProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image={powerPlatformImage}
                alt="hackathon"
                id={hackathonId}
                title="Microsoft Hackathon"
                tools="Power Platform"
              />
            </React.Fragment>
          )}
          {awsProject && (
            <React.Fragment>
              <ProjectItem
                onClick={props.onShowDisplay}
                image="https://yt3.googleusercontent.com/HRJKaJg70sqBrCNh7Tf2RSjXTb_5hCUn7Hht7mxUJMg77EWkihh55JklD-KhwAMhwY31ox5O=s900-c-k-c0x00ffffff-no-rj"
                alt="hackathon"
                id={awsSikerId}
                title="Siker Media"
                tools="AWS"
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectList;
