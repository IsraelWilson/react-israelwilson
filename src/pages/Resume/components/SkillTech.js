import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class SkillTech extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        {this.props.skill}
        {this.props.content}
      </React.Fragment>
    );
  }
}
