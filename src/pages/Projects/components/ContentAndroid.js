import React from 'react';

export class ContentAndroid extends React.Component {
  constructor(props) {
    super(props);
    this.tools = [];
  }

  function createCards() {
    
  }

  render() {
    return (
      <div>
        <img src={this.props.filePath}/>
        <p>
          {this.props.paragraph}
        </p>
        <div>
          {}
        </div>
      </div>
      );
  }
}
