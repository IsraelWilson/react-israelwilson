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
        <div className={classNames("row", "center-content-wrap")}>
          <div className={classNames("col-12")}>
            <h1>{this.props.header}</h1>
            <div className={classNames("row")}>
              {this.pictures}
            </div>
          </div>
        </div>
    );
  }
}
