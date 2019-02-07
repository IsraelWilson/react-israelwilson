import React from 'react';
import {Pane} from "../../components/Pane";
import {Row} from "../../components/Row";
import {ContentResumeTech} from "./components/ContentResumeTech";
import {ContentResumeCV} from "./components/ContentResumeCV";
import {ContentResumeDown} from "./components/ContentResumeDown";
import '../../styles.css';
import classNames from "classnames";

export class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {resume: <ContentResumeTech />,
                  paneButtons: [{click: () => {this.changeResume("Technical")}, title: "Technical", active: true},
                                {click: () => {this.changeResume("CV")}, title: "CV", active: false},
                                {click: () => {this.changeResume("Download")}, title: "Download", active: false}]};
  }

  changeResume(resume) {
    switch(resume) {
      case "Technical":
        this.setState({resume: <ContentResumeTech />,
                       paneButtons: [{click: () => {this.changeResume("Technical")}, title: "Technical", active: true},
                                     {click: () => {this.changeResume("CV")}, title: "CV", active: false},
                                     {click: () => {this.changeResume("Download")}, title: "Download", active: false}]});
        break;
      case "CV":
        this.setState({resume: <ContentResumeCV />,
                       paneButtons: [{click: () => {this.changeResume("Technical")}, title: "Technical", active: false},
                                     {click: () => {this.changeResume("CV")}, title: "CV", active: true},
                                     {click: () => {this.changeResume("Download")}, title: "Download", active: false}]});
        break;
      case "Download":
        this.setState({resume: <ContentResumeDown />,
                       paneButtons: [{click: () => {this.changeResume("Technical")}, title: "Technical", active: false},
                                     {click: () => {this.changeResume("CV")}, title: "CV", active: false},
                                     {click: () => {this.changeResume("Download")}, title: "Download", active: true}]});
        break;
      default:
        this.setState({resume: <ContentResumeTech />,
                       paneButtons: [{click: () => {this.changeResume("Technical")}, title: "Technical", active: true},
                                     {click: () => {this.changeResume("CV")}, title: "CV", active: false},
                                     {click: () => {this.changeResume("Download")}, title: "Download", active: false}]});
    }
  }

  render() {
    const ui = [<Pane paneButtons={this.state.paneButtons} />,
                <div className={classNames("col")}>
                  {this.state.resume}
                </div>];
    return (
        <Row columns={ui} classes="content" />
      );
  }
}
