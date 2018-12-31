import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class PictureCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames("col-3", "center-content-wrap")}>
        <div>
          <img src={this.props.filePath} />
          <h3>{this.props.header}</h3>
        </div>
        <p>
          {this.props.paragraph}
        </p>
      </div>
      );
  }
}
