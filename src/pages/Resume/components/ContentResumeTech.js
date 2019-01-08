import React from 'react';
import {PositionTech} from "./PositionTech";
import {ProgressBar} from "./ProgressBar";
import '../../../styles.css';
import classNames from "classnames";

export class ContentResumeTech extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <div className={classNames("row")}>
          <div className={classNames("col-2")}>
            <h2>Experience</h2>
          </div>
          <div className={classNames("col-10")}>
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
        </div>

        <div className={classNames("row")}>
          <div className={classNames("col-2")}>
            <h2>Skills</h2>
          </div>
          <div className={classNames("col-10")}>
            <div className={classNames("row")}>
              <div className={classNames("col-12")}>
                <h2>Languages</h2>
                <ProgressBar title="Java"/>
                <ProgressBar title="Java"/>
                <ProgressBar title="Java"/>
                <ProgressBar title="Java"/>
                <ProgressBar title="Java"/>
                <ProgressBar title="Java"/>
              </div>
            </div>

            <div className={classNames("row")}>
              <div className={classNames("col-12")}>
                <h2>Operating Systems</h2>
                <ProgressBar title="Java"/>
                <ProgressBar title="Java"/>
              </div>
            </div>

            <div className={classNames("row")}>
              <div className={classNames("col-12")}>
                <ProgressBar title="Java"/>
                <ProgressBar title="Java"/>
                <ProgressBar title="Java"/>
              </div>
            </div>

          </div>
        </div>

        <div className={classNames("row")}>
          <div className={classNames("col-2")}>
            <h2>Education</h2>
          </div>
          <div className={classNames("col-10")}>
            <div className={classNames("row")}>
              <div className={classNames("col-6", "chronology")}>
                <h1>B.S. Computer Sciecne <small>Morehouse College</small></h1>
                <h3>2016</h3>
              </div>

              <div className={classNames("col-6", "chronology")}>
                <h1>Highschool Diploma <small>Urban Prep Academies, Englewood</small></h1>
                <h3>2010</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={classNames("row")}>
          <div className={classNames("col-2")}>
            <h2>Contact</h2>
          </div>
          <div className={classNames("col-10")}>
            <div className={classNames("row")}>
              <div className={classNames("col-6")}>
                <h1><small>Email</small>israelsjwilson@gmail.com</h1>
              </div>

              <div className={classNames("col-6")}>
                <h1><small>Cell</small>312.478.5154</h1>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
    );
  }
}
