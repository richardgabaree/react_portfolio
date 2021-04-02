import React from "react";
import Notetaker from "../../images/notetaker.png";
import Passwordgenerator from "../../images/passwordgenerator.png";
import RescueSpot from "../../images/rescuespotimage.png";
import Workdaycalendar from "../../images/workdaycalendar.png";
import Yay from "../../images/yayornay.png";

const Projects = () => (
  <div>
    <main className="container">
            <header className="row">
                <div className="col-md-12">
                    <h1>Portfolio</h1>
                </div>
            </header>
        
        <section className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src={RescueSpot} alt="Rescue Spot" className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">Rescue Spot</h5>
                  <p className="card-text"> This app is created for a animal lovers looking to adopt a dog. App allows you to save favorites as well as links to local resources.</p>
                  <a href="https://richardgabaree.github.io/Project-1-Rescue-Spot/" target="_blank" rel="noreferrer" className="btn btn-primary">Link</a>
                </div>
              </div>
            </div>
      
        <div className="col">
          <div className="card h-100">
            <img
              src={Passwordgenerator}
              alt="password generator"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
                The password generator creates a automated password based off
                the answers to questions about letters, numbers, symbols, and
                capital characters you want to include i.
              </p>
              <a
                href="https://richardgabaree.github.io/JavaScript-Password-Generator/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Link
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img
              src={Workdaycalendar}
              alt="workdayscheduler"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">WorkDay Scheduler</h5>
              <p className="card-text">
                Looking to keep track of you daily tasks? This app allows you to
                update with title and description of events"
              </p>
              <a
                href="https://richardgabaree.github.io/workdayscheduler/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Link
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src={Notetaker} alt="Note Taker" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
                The note taker app allows you to create notes, which are added
                to a saved list. You can update or delete is task is complete.
              </p>
              <a
                href="https://gabaree-note-taker.herokuapp.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Link
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src={Yay} alt="yaynay" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Yay or Nay Vote App</h5>
              <p className="card-text">
                The Yay or Nay app is set up to solve any office decision. The
                app is set up to allow a full company vote or department
                specific votes on any issue you would like to get a consensus
                about.
              </p>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Link
              </a>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={""} alt="NCC" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Novice Coding Connection</h5>
                <p className="card-text">
                  The Novice Coding Connection builds a community were students
                  and learers can find resourse, ask question and build networks
                  for support.
                </p>
                <a
                  href="https://gabaree-note-taker.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
</div>

);

export default Projects;
