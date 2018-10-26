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
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Projects</li></a>
          <a href="#"><li>Resume</li></a>
          <a href="#"><li>Hobbies</li></a>
          <a href="#"><li>About</li></a>
        </ul>
      </div>
    );
  }
}
