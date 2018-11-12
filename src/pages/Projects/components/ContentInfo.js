import React from 'react';
import {PictureCard} from "./PictureCard"
import '../../../styles.css';
import classNames from "classnames";

export class ContentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.tools = props.toolsInfo.map(info => (<PictureCard filePath={info.filePath} header={info.header} paragraph={info.paragraph}/>));
  }

  render() {
    return (
      <div className={classNames("row")}>
        <img src={this.props.filePath}/>
        <p>
          {this.props.paragraph}
        </p>
        <div>
          {this.tools}
        </div>
      </div>
      );
  }
}
