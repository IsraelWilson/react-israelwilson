import React from 'react';
//import '../styles/home.css';

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
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Hobbies</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>312.478.5154</li>
            <li><a href="#">Shoot Me an Email</a></li>
          </ul>
        </div>

        <div>
          <h3>Copyrights</h3>
        </div>
      </footer>
    );
  }
}
