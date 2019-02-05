import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class Row extends React.Component {
  constructor(props) {
    super(props);
    this.columns = props.columns;
  }

  render() {
    return(
      <div className={classNames("row")}>
        {this.columns}
      </div>
    );
  }
}
