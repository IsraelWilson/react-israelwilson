import React from 'react';
import {PositionTech} from "./PositionTech";
import {SkillTech} from "./SkillTech";
import {EducationTech} from "./EducationTech";
import {ProgressBar} from "./ProgressBar";
import {Col} from "../../../components/Col";
import {Row} from "../../../components/Row";
import '../../../styles.css';
import classNames from "classnames";

export class ContentResumeTech extends React.Component {
  constructor(props) {
    super(props);
    this.experienceList = [<PositionTech company="DXC"
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
    this.experience = <Col width="col-w" content={<h2>Experience</h2>}/>;
    this.experienceCol = <Col width="col-w" content={this.experienceList} />;
    this.experienceContent = [this.experience, this.experienceCol];

    this.languageList = [<ProgressBar title="Java" value="25" />,
                         <ProgressBar title="Java" value="25" />,
                         <ProgressBar title="Java" value="25" />,
                         <ProgressBar title="Java" value="25" />,
                         <ProgressBar title="Java" value="25" />,
                         <ProgressBar title="Java" value="25" />];
    this.osList = [<ProgressBar title="Java" value="25" />,
                   <ProgressBar title="Java" value="25" />];
    this.softwareList = [<ProgressBar title="Java" value="25" />,
                         <ProgressBar title="Java" value="25" />,
                         <ProgressBar title="Java" value="25" />];
    this.skillsList = [<SkillTech skill={<h2>Languages</h2>} content={this.languageList} />,
                       <SkillTech skill={<h2>Operating Systems</h2>} content={this.osList} />,
                       <SkillTech skill={<h2>Software</h2>} content={this.softwareList} />];
    this.skills = <Col width="col-w" content={<h2>Skills</h2>} />;
    this.skillsCol = <Col width="col-w" content={this.skillsList} />
    this.skillContent = [this.skills, this.skillsCol];

    this.morehouse = <Col width="col-6" content={<EducationTech year="2015" degree="B.S. Computer Science" school="Morehouse College" />} />;
    this.urbanPrep = <Col width="col-6" content={<EducationTech year="2010" degree="Highschool Diploma" school="Urban Prep Academies, Englewood" />} />;
    this.educationList = <Row columns={[this.morehouse, this.urbanPrep]} />;
    this.education = <Col width="col-w" content={<h2>Education</h2>} />;
    this.educationCol = <Col width="col-w" content={this.educationList} />;
    this.educationContent = [this.education, this.educationCol];
  }

  render() {
    return(
      <React.Fragment>
        <Row columns={this.experienceContent} />
        <Row columns={this.skillContent} />
        <Row columns={this.educationContent} />
    </React.Fragment>
    );
  }
}
