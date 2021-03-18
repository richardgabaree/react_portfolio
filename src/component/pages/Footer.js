import React, { Component } from 'react';

export default class Footer extends Component {

    render() {

        let resumeData = this.props.resumeData;

        return (

            <footer>
                <div className = 'row'>
                    <div className = 'twelve columns'>
                        <ul className = 'social-links'>
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((item) => { 

                                    return (
                                        <figure>
                        <a href="https://github.com/richardgabaree" target="_blank"><img src={Git} alt="link to Richard's GitHub page" />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/richard-gabaree-2ba0bb1b/" 
                        target="_blank">
                          <img src={Linkedin} />

                        </a>

                    </figure>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div id = 'go-top'><a className = 'smoothscroll' title = 'Back to Top' href = '#home'><i className = 'icon-up-open' /></a></div>

                </div>
            </footer>
        )
    }
}