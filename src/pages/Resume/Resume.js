import React from 'react';
import {Pane} from "../../components/Pane";
import {ContentResumeTech} from "./components/ContentResumeTech";
import {ContentResumeCV} from "./components/ContentResumeCV";
//import {ContentResumeDown} from "./components/ContentResumeDown";

export class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {resume: <ContentResumeTech />};
    this.paneButtons = [{click: () => {this.setState({resume: <ContentResumeTech />})}, title: "Technical"},
                        {click: () => {this.setState({resume: <ContentResumeCV />})}, title: "CV"},
                        {click: () => {alert("Clicked")}, title: "Download"}];
  }

  render() {
    return (
      <React.Fragment>
        <Pane navButtons={this.paneButtons}/>
        <div>
          {this.state.resume}
        </div>
      </React.Fragment>
      );
  }
}
