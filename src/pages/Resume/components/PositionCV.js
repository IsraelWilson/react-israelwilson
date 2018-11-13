import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class PositionCV extends React.Component {
  constructor(props) {
    super(props);
    this.responsibilities = props.responsibilities.map(responsibility => (<li>{responsibility}</li>));
  }

  render() {
    return(
      <div className={classNames("col-12")}>
      <div className={classNames("row")}>
        <h1>{this.props.company}</h1>
        <h1>{this.props.date}</h1>
      </div>

        <p>
          {this.props.description}
        </p>

        <div className={classNames("row")}>
          <h1>Position:</h1>
          <h1>{this.props.title}</h1>
        </div>

        <h1>Responsibilities</h1>
        <ul className={classNames("col")}>
          {this.responsibilities}
        </ul>
      </div>
    );
  }
}
