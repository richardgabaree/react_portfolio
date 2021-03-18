import React from "react";
import Git from "../../images/github_128_black.png"
import Linkedin from "../../images/linkedInicon-128.png"
const Contact = () => (
  <div>
    <main className="container">
            <header className="row">
                <div className="col-md-8">
                    <h2>Contact</h2>
                </div>
            </header>

        <section>
            <div className="row">
                <div className="col-md-8">

                    {/* <form>
                        <div className="mb-3">
                            <label for="inputName" className="form-label ">Name</label>
                            <input type="name" className="form-control" id="inputName">
                        </div>
                        <div className="mb-3">
                            <label for="inputEmail1" className="form-label ">Email address</label>
                            <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp">
                        </div>

                        <div className="mb-3">
                            <label for="inputMessage " className="form-label ">Message</label>
                            <input type="email" className="form-control" id="inputEmail1" aria-describedby="message">
                        </div>
                        <button type="submit " className="btn btn-primary ">Submit</button>
                    </form> */}
                    <h3>ADDRESS</h3>
                    <h4>
                      7430 Pusch Ridge Loop
                      Austin, TX 78749
                    </h4>

                    <h3>PHONE</h3>
                      <h4>
                        Cell: 512.750.5837
                      </h4>

                      <h3>Email</h3>
                      <h4>
                        richard.gabaree@gmail.com
                      </h4>

                   
                    
                </div>
            </div>
        </section>
    </main>
  </div>
);

export default Contact;
