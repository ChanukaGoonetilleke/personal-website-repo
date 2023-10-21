import React from "react";

import classes from "./ExpirenceList.module.css";

import ops from "../../images/ops.jpeg";
import osl from "../../images/osl.jpeg";
import ims from "../../images/ims.jpeg";

import Expirence from "./Expirence";

const ExpirenceList = () => {
  return (
    <React.Fragment>
      <div data-aos="fade-right" className={classes.wrapper}>
        <h2 className={classes.title}>Experience</h2>
        <Expirence
          image={ops}
          jobTitle="Junior Programmer"
          company="Ontario Treasury Board Secretariat"
          date="Sept 2021 - Sept 2022"
          location="Oshawa, Ontario, Canada"
          discription="Provided application support for a portfolio of applications. Tasks included user account maintenance, troubleshooting application issues and data management. Provided general support to developers, project managers and managers as required. Actively participate in team projects in a variety of roles throughout life cycle - analysis, development, testing, implementation."
        />
        <Expirence
          image={osl}
          jobTitle="Electronic Sales Associate"
          company="OSL Retail Services"
          date="Jul 2020 - Jul 2021"
          location="Oakville, Ontario"
          discription="In my role, I was responsible for managing photo orders and promoting select electronic products. Additionally, I spearheaded the creation of a comprehensive laptop inventory web application utilizing React.js and Firebase. This application effectively monitored the stock levels of laptops within the store, streamlining inventory management processes."
        />
        <Expirence
          image={ims}
          jobTitle="Student Software Tester (QA)"
          company="International Medical Solutions, L.L.C."
          date="Jul 2016 - Aug 2016"
          location="Mississauga, Ontario"
          discription="
          During my high school years, I eagerly embraced an opportunity to work at International Medical Solutions (IMS) as an intern. In this role, I was one of two Quality Assurance interns entrusted with the vital task of meticulously conducting comprehensive tests on the IMS software, diligently adhering to a detailed checklist."
        />
      </div>
    </React.Fragment>
  );
};

export default ExpirenceList;
