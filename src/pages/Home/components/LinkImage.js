import React from 'react';
//import '../styles/home.css';

export class LinkImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.url}><img src={this.props.filePath}/></a>
    );
  }
}
