import React from 'react';
import '../styles.css';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div>
          <h3>Site Map</h3>
          <ul>
            <button type="button" onClick={() => this.props.linkClick("Home")}><li>Home</li></button>
            <button type="button" onClick={() => this.props.linkClick("Projects")}><li>Projects</li></button>
            <button type="button" onClick={() => this.props.linkClick("Resume")}><li>Resume</li></button>
            <button type="button" onClick={() => this.props.linkClick("Hobbies")}><li>Hobbies</li></button>
            <button type="button" onClick={() => this.props.linkClick("About")}><li>About</li></button>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>312.478.5154</li>
            <li><button type="button">Shoot Me an Email</button></li>
          </ul>
        </div>

        <div>
          <h3>Copyrights</h3>
        </div>
      </footer>
    );
  }
}
