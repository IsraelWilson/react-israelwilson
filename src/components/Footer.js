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
            <button type="button"><li>Home</li></button>
            <button type="button"><li>Projects</li></button>
            <button type="button"><li>Resume</li></button>
            <button type="button"><li>Hobbies</li></button>
            <button type="button"><li>About</li></button>
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
