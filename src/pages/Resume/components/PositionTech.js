import React from 'react';

export class PositionTech extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>{this.props.company}</h1>
        <small>{this.props.date}</small>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
