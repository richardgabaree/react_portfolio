import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import PortfolioContainer from "./component/PortfolioContainer";
import NavTabs from "./component/NavTabs";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Projects from "./component/pages/Projects";
import Footer from "./component/pages/Footer"

const App = () => {
  return (
    <Router>
      <div>
        
        <NavTabs />

        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
