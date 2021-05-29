import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/layout/Layout";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/contacts" exact>
            <Contacts />
          </Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
