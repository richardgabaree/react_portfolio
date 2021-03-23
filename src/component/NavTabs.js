import React from "react";
import { Link } from "react-router-dom";
import Resume from "../images/RichardGabareeResume.pdf";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          className={
            props.currentPage === "Home" ? "nav-link active" : "nav-link"
          }
        >
          <Link to="/">Home</Link>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={
            props.currentPage === "About" ? "nav-link active" : "nav-link"
          }
        >
          <Link to="/About">About</Link>
        </a>
      </li>
      <li className="nav-item">
        <a
          // href="#projects"
          // onClick={() => props.handlePageChange("Projects")}
          className={
            props.currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          <Link to="/Projects">Projects</Link>
        </a>
      </li>
      <li className="nav-item">
        <a
          href={Resume}
          target="_blank"
          rel="noreferrer noopener"
          // onClick={() => props.handlePageChange("Resume")}
          className={
            props.currentPage === "Resume" ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          // href="#contact"
          // onClick={() => props.handlePageChange("Contact")}
          className={
            props.currentPage === "Contact" ? "nav-link active" : "nav-link"
          }
        >
          <Link to="/Contact">Contact</Link>
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
