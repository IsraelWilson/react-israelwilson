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
        <div className={classNames("col-12")}>
          <div className={classNames("row")}>
            <div className={classNames("col-6", "horivert")}>
              <img src={this.props.filePath}/>
            </div>
            <div className={classNames("col-6", "horivert")}>
              <p>
                {this.props.paragraph}
              </p>
            </div>
          </div>

          <div className={classNames("row")}>
            {this.tools}
          </div>
        </div>
      </div>
      );
  }
}
