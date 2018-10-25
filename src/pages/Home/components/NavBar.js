import React from 'react';
import ReactDOM from 'react-dom';
//import '../styles/home.css';

export class NavBar extends React.Component {
  constructor() {

  }

  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Hobbies</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}
