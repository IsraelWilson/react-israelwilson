import React from 'react';
import '../styles.css';
import classNames from "classnames";

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button type="button" onClick={() => this.props.onClick()}>{this.props.title}</button>
    );
  }
}
