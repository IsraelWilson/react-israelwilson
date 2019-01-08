import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class ProgressBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className={classNames("chronology")}>
        <h6>{this.props.title}</h6>
        <div>Progress Here</div>
      </div>
    );
  }
}
