import React from 'react';
import '../styles.css';
import classNames from "classnames";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames("row")}>
        <ul>
          <li><button type="button" onClick={() => this.props.linkClick("Home")}>Home</button></li>
          <li><button type="button" onClick={() => this.props.linkClick("Projects")}>Projects</button></li>
          <li><button type="button" onClick={() => this.props.linkClick("Resume")}>Resume</button></li>
          <li><button type="button" onClick={() => this.props.linkClick("Hobbies")}>Hobbies</button></li>
          <li><button type="button" onClick={() => this.props.linkClick("About")}>About</button></li>
        </ul>
      </div>
    );
  }
}
