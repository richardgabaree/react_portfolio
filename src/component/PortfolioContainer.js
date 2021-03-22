import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// import Footer from ".pages/Footer";


class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } 
    else if (this.state.currentPage === "About") {
      return <About />;
    } 
    else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } 
    else {
      return <Projects />;
    }
    // else {
    //   return <Resume />;
    // }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
    
      </div>
      
    );
  }
}

export default PortfolioContainer;
