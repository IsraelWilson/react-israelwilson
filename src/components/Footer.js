import React from 'react';
import '../styles.css';
import classNames from "classnames";

export class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={classNames("row")}>
        <div className={classNames("col-4")}>
          <ul className={classNames("col")}>
            <h3>Site Map</h3>
            <li><button type="button" onClick={() => this.props.linkClick("Home")}>Home</button></li>
            <li><button type="button" onClick={() => this.props.linkClick("Projects")}>Projects</button></li>
            <li><button type="button" onClick={() => this.props.linkClick("Resume")}>Resume</button></li>
            <li><button type="button" onClick={() => this.props.linkClick("Hobbies")}>Hobbies</button></li>
            <li><button type="button" onClick={() => this.props.linkClick("About")}>About</button></li>
          </ul>
        </div>

        <div className={classNames("col-4")}>
          <ul className={classNames("col")}>
            <h3>Contact</h3>
            <li>312.478.5154</li>
            <li><button type="button">Shoot Me an Email</button></li>
          </ul>
        </div>

        <div className={classNames("col-4")}>
          <h3>Copyrights</h3>
        </div>
      </footer>
    );
  }
}
