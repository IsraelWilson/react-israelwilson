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
          <div className={classNames("chronology")}>
            <h3>{this.props.company}</h3>
            <h6>{this.props.date}</h6>
            <h4>{this.props.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}
