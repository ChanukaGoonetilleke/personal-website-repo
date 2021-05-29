import React, { useState } from "react";

const ProjectContext = React.createContext({
  id: "",
  setId: (value) => {},
  reactProject: true,
  setReactProject: (value) => {},
  javaScriptProject: true,
  setJavaScriptProject: (value) => {},
});

export const ProjectContextProvider = (props) => {
  const [id, setId] = useState("");
  const [reactProject, setReactProject] = useState(true);
  const [javaScriptProject, setJavaScriptProject] = useState(true);

  const setIdHandler = (value) => {
    setId(value);
  };

  const setReactProjectHandler = (value) => {
    setReactProject(value);
  };

  const setJavaScriptProjectHandler = (value) => {
    setJavaScriptProject(value);
  };

  const contextValue = {
    id: id,
    setId: setIdHandler,
    reactProject: reactProject,
    setReactProject: setReactProjectHandler,
    javaScriptProject: javaScriptProject,
    setJavaScriptProject: setJavaScriptProjectHandler,
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
