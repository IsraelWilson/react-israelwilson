import React from 'react';
import {Pane} from "../../components/Pane";

export class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.paneButtons = [{click: () => {alert("Clicked")}, title: "Technical"},
                        {click: () => {alert("Clicked")}, title: "CV"},
                        {click: () => {alert("Clicked")}, title: "Download"}];
  }

  render() {
    return (
      <React.Fragment>
        <Pane navButtons={this.paneButtons}/>
        <div>

        </div>
      </React.Fragment>
      );
  }
}
