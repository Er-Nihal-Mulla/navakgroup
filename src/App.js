import React from 'react';
import Home from './Home';
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Foot from './Foot';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route, Redirect} from "react-router-dom";
import { Helmet } from 'react-helmet'

const TITLE = 'NAVAK Group'


const App = () => {
  return(
      <>
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
      </Switch>
      <Foot/>
      </>
  );
};

export default App;
