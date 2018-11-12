import React from 'react';
import {Pane} from "../../components/Pane";
import {ContentResumeTech} from "./components/ContentResumeTech";
import {ContentResumeCV} from "./components/ContentResumeCV";
import {ContentResumeDown} from "./components/ContentResumeDown";
import '../../styles.css';
import classNames from "classnames";

export class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {resume: <ContentResumeTech />};
    this.paneButtons = [{click: () => {this.setState({resume: <ContentResumeTech />})}, title: "Technical"},
                        {click: () => {this.setState({resume: <ContentResumeCV />})}, title: "CV"},
                        {click: () => {this.setState({resume: <ContentResumeDown />})}, title: "Download"}];
  }

  render() {
    return (
      <div className={classNames("container")}>
        <Pane navButtons={this.paneButtons} subNavButtons={null}/>
        <div className={classNames("col-10")}>
          {this.state.resume}
        </div>
      </div>
      );
  }
}
