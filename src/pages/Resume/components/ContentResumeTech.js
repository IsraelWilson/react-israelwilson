import React from 'react';
import {PositionTech} from "./PositionTech";
import {ProgressBar} from "./ProgressBar";
import {Col} from "../../../components/Col";
import {Row} from "../../../components/Row";
import '../../../styles.css';
import classNames from "classnames";

export class ContentResumeTech extends React.Component {
  constructor(props) {
    super(props);
    this.experience = <Col width="col-2" content={<h2>Experience</h2>}/>;
    this.posTechList = [<PositionTech company="DXC"
                                       date="May 2016 - May 2018"
                                       title="Associate Professional Application Designer"/>,
                         <PositionTech company="Urban Prep"
                                       date="August 2015 - May 2016"
                                       title="Urban Prep Fellow"/>,
                         <PositionTech company="Blue 1647"
                                       date="July 2015 - August 2016"
                                       title="Programming Instructor"/>,

                         <PositionTech company="Club Scientific"
                                       date="July 2014"
                                       title="Science Teacher"/>,

                         <PositionTech company="Fulton County Information Technology"
                                       date="May 2012 - May 2013"
                                       title="Technical Support"/>,

                         <PositionTech company="Google"
                                       date="July 2010 - August 2010"
                                       title="Computer Science Summer Institute Intern"/>];
    this.positions = <Col width="col-10" content={this.posTechList} />;
    this.col1 = [this.experience, this.positions];

    this.skills = <Col width="col-2" />;
    this.languages = <Col width="col-10" />;
    this.os = <Col width="col-10" />;
    this.software = <Col width="col-10" />;

    this.education = <Col width="col-2" />;
    this.schools = <Col width="col-10" />;
  }

  render() {
    return(
      <React.Fragment>
        <Row columns={this.col1} />

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
              <div className={classNames("col-6")}>
                <h5>2016</h5>
                <h2>B.S. Computer Science</h2>
                <h3>Morehouse College</h3>
              </div>

              <div className={classNames("col-6")}>
                <h5>2010</h5>
                <h2>Highschool Diploma</h2>
                <h3>Urban Prep Academies, Englewood</h3>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
    );
  }
}
