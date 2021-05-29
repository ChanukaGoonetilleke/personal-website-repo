import React, { useState } from "react";
import ProjectDisplay from "../components/projects/ProjectDisplay";
import ProjectList from "../components/projects/ProjectList";
import SelectorList from "../components/projects/SelectorList";

const Projects = () => {
  const [displayIsShown, setDisplayIsShown] = useState(false);

  const showDisplayHandler = () => {
    setDisplayIsShown(true);
  };

  const hideDisplayHandler = () => {
    setDisplayIsShown(false);
  };

  return (
    <React.Fragment>
      {displayIsShown && <ProjectDisplay onHideDisplay={hideDisplayHandler} />}
      <SelectorList />
      <ProjectList onShowDisplay={showDisplayHandler} />
    </React.Fragment>
  );
};

export default Projects;
