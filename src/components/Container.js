import React from 'react';
import '../styles.css';
import classNames from "classnames";

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.content = props.content;
  }

  render() {
    return(
      <div className={classNames("container")}>
        {this.content}
      </div>
    );
  }
}
