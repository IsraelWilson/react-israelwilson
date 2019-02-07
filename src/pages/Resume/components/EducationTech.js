import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class EducationTech extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <span className={classNames("chronology")}>
        <h5>{this.props.year}</h5>
        <h2>{this.props.degree}</h2>
        <h3>{this.props.school}</h3>
      </span>
    );
  }
}
