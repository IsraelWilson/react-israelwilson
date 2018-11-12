import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class ProgressBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <div>Progress Here</div>
      </div>
    );
  }
}
