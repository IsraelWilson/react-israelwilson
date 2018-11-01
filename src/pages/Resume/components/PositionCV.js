import React from 'react';

export class PositionCV extends React.Component {
  constructor(props) {
    super(props);
    this.responsibilities = props.responsibilities.map(responsibility => (<li>{responsibility}</li>));
  }

  render() {
    return(
      <div>
        <h1>{this.props.company}</h1>
        <h1>{this.props.date}</h1>

        <p>
          {this.props.description}
        </p>

        <h1>{this.props.title}</h1>
        <h1>Responsibilities</h1>

        <ul>
          {this.responsibilities}
        </ul>
      </div>
    );
  }
}
