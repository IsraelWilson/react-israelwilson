import React from 'react';
//import '../styles/home.css';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <button type="button" onClick={() => this.props.linkClick("Home")}><li>Home</li></button>
          <button type="button" onClick={() => this.props.linkClick("Projects")}><li>Projects</li></button>
          <button type="button" onClick={() => this.props.linkClick("Resume")}><li>Resume</li></button>
          <button type="button" onClick={() => this.props.linkClick("Hobbies")}><li>Hobbies</li></button>
          <button type="button" onClick={() => this.props.linkClick("About")}><li>About</li></button>
        </ul>
      </div>
    );
  }
}
