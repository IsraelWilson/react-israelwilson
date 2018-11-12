import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class LinkImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.url}><img src={this.props.filePath}/></a>
    );
  }
}
