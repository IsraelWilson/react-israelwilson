import React from 'react';

export class PictureCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
