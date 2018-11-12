import React from 'react';
import {LinkImage} from "./LinkImage";
import '../../../styles.css';
import classNames from "classnames";

export class PictureRow extends React.Component {
  constructor(props) {
    super(props);
    this.pictures = props.links.map(link => (<LinkImage url={link.url} filePath={link.filePath}/>));
  }

  render() {
    return (
      <div className={classNames("row")}>
        <h1>{this.props.header}</h1>
        {this.pictures}
      </div>
    );
  }
}
