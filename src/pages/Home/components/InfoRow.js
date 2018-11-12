import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class InfoRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames("row")}>
        <div className={classNames("col-4")}>
          <h1>{this.props.header}</h1>
          <div>
            <p>
              {this.props.paragraph}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
