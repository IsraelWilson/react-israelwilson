import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class ProgressBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <span className={classNames("chronology")}>
        <h6>{this.props.title}</h6>
        <progress value={this.props.value} max={this.props.max}>Progress Here</progress>
      </span>
    );
  }
}
