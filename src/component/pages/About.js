import React from "react";
import Headshot from "../../images/headshot.JPG"

const About = () => (
  <div>
    <main className="container">
      <header className="row">
        <div className="col-md-12">
          <h2>About Me</h2>
        </div>
      </header>
    </main>

      <section>
        <div className="row">
          <div className="bio">
            <figure className="col-md-12">
              <img
                src={Headshot}
                alt="your image"
                id="bio-image"
              />
            </figure>

            <h1>Richard Gabaree</h1>
            <p>
              I am a conscious leader professional with over 20 years of
              experience in sales, retail and wholesale. marketing, print
              production, finance, and customer care. Manage multiple short and
              long-term projects with a cross-functional team in a fast-paced
              environment.
            </p>

            <p>
              I have an established work history in leadership in marketing with
              a focus on the customer experience. I am looking for a Full-Stack
              Developer position where I can utilize my experience with clients
              to build a stronger and more user-forward experience with clients.
              I also have worked in the sales and financial industry, so I have
              a well-rounded background to build upon. I’m self-driven and am
              used to working in a team environment as well as independently.
            </p>

            <p>
              A consumer-minded expert in teamwork, communication, and
              multi-tasking with an aptitude for Microsoft Office, SharePoint,
              MerchLogix, social networking platforms, and basic Photoshop,
              Illustrator, and InDesign skills.
            </p>

            <p>
              Passions include local wine and food, animal compassion and taking
              care of the environment.
            </p>
          </div>
        </div>
      </section>
  </div>
);

export default About;
