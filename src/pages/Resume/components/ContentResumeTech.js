import React from 'react';
import {PositionTech} from "./PositionTech";
import {ProgressBar} from "./ProgressBar";

export class ContentResumeTech extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <div>
            <h1>Experience</h1>
          </div>
          <div>
            <PositionTech company="DXC"
                          date="May 2016 - May 2018"
                          title="Associate Professional Application Designer"/>

            <PositionTech company="Urban Prep"
                          date="August 2015 - May 2016"
                          title="Urban Prep Fellow"/>

            <PositionTech company="Blue 1647"
                          date="July 2015 - August 2016"
                          title="Programming Instructor"/>

            <PositionTech company="Club Scientific"
                          date="July 2014"
                          title="Science Teacher"/>

            <PositionTech company="Fulton County Information Technology"
                          date="May 2012 - May 2013"
                          title="Technical Support"/>

            <PositionTech company="Google"
                          date="July 2010 - August 2010"
                          title="Computer Science Summer Institute Intern"/>
          </div>

          <div>
            <div>
              <h1>Skills</h1>
            </div>
            <div>
              <h1>Languages</h1>
              <ProgressBar title="Java"/>
              <ProgressBar title="Java"/>
              <ProgressBar title="Java"/>
              <ProgressBar title="Java"/>
              <ProgressBar title="Java"/>
              <ProgressBar title="Java"/>

              <h1>Operating Systems</h1>
              <ProgressBar title="Java"/>
              <ProgressBar title="Java"/>

              <h1>Software</h1>
              <ProgressBar title="Java"/>
              <ProgressBar title="Java"/>
              <ProgressBar title="Java"/>
            </div>
          </div>

          <div>
            <div>
              <h1>Education</h1>
            </div>
            <div>
              <h1>B.S. Computer Sciecne <small>Morehouse College</small></h1>
              <h3>2016</h3>
              <h1>Highschool Diploma <small>Urban Prep Academies, Englewood</small></h1>
              <h3>2010</h3>
            </div>
          </div>

          <div>
            <div>
              <h1>Contact</h1>
            </div>
            <div>
              <h1><small>Email</small>israelsjwilson@gmail.com</h1>
              <h1><small>Cell</small>312.478.5154</h1>
            </div>
          </div>
        </div>
    </React.Fragment>
    );
  }
}
