import React from "react";
import About from "../components/home/About";
import Introduction from "../components/home/Introduction";
import Languages from "../components/home/Languages";
import TrateList from "../components/home/TrateList";


const Home = () => {
  return (
    <React.Fragment>
      <Introduction />
      <TrateList />
      <Languages />
      <About />
    </React.Fragment>
  );
};

export default Home;
