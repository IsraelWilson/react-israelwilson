import React from 'react';

export class ContentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.tools = props.toolsInfo.map(info => (<PictureCard filePath={info.filePath} header={info.header} paragraph={info.paragraph}/>));
  }

  render() {
    return (
      <div>
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
