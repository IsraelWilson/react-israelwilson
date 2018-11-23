import React from 'react';

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  render() {
    return (
      <React.Fragment>
        <li>{this.props.title}</li>
        <div>

        </div>
      </React.Fragment>

    );
  }
}
