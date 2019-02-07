import React from 'react';
import '../styles.css';
import classNames from "classnames";

export class Row extends React.Component {
  constructor(props) {
    super(props);
    this.columns = props.columns;
    this.classes = props.classes;
  }

  render() {
    return(
      <div className={classNames("row", this.classes)}>
        {this.columns}
      </div>
    );
  }
}
