import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class PositionTech extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classNames("row")}>
        <div className={classNames("col-12")}>
          <h1>{this.props.company}</h1>
          <small>{this.props.date}</small>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}
