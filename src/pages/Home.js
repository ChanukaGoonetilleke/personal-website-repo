import React, { useEffect, useState } from "react";
import About from "../components/home/About";
import Introduction from "../components/home/Introduction";
import Languages from "../components/home/Languages";
import TrateList from "../components/home/TrateList";
import ProjectDisplay from "../components/projects/ProjectDisplay";
import ProjectList from "../components/projects/ProjectList";
import SelectorList from "../components/projects/SelectorList";
import ContactForm from "../components/contacts/ContactForm";

const Home = () => {
  const [displayIsShown, setDisplayIsShown] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showDisplayHandler = () => {
    setDisplayIsShown(true);
  };

  const hideDisplayHandler = () => {
    setDisplayIsShown(false);
  };

  return (
    <React.Fragment>
      <Introduction />
      <TrateList />
      <Languages />
      <About />
      {displayIsShown && <ProjectDisplay onHideDisplay={hideDisplayHandler} />}
      <SelectorList />
      <ProjectList onShowDisplay={showDisplayHandler} />
      <ContactForm />
    </React.Fragment>
  );
};

export default Home;
