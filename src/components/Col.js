import React from 'react';
import '../styles.css';
import classNames from "classnames";

export class Col extends React.Component {
  constructor(props) {
    super(props);
    this.content = props.content;
    this.width = props.width;
  }

  render() {
    return(
      <div className={classNames(this.width)}>
        {this.content}
      </div>
    );
  }

  // Default Props
  static defaultProps = {
    width: "col",
    content: "Empty Column"
  }
}
