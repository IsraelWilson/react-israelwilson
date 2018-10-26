import React from 'react';
//import '../styles/home.css';

export class InfoRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <div>
          <p>
            {this.props.paragraph}
          </p>
        </div>
      </div>
    );
  }
}
