import React from 'react';
import '../styles.css';
import classNames from "classnames";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames("row", "navbar")}>
        <h3>IsraelWilson</h3>
        <ul>
          <li><button className={this.props.activeTab.home ? classNames("active") : classNames("inactive")} type="button" onClick={() => this.props.linkClick("Home")}>Home</button></li>
          <li><button className={this.props.activeTab.projects ? classNames("active") : classNames("inactive")} type="button" onClick={() => this.props.linkClick("Projects")}>Projects</button></li>
          <li><button className={this.props.activeTab.resume ? classNames("active") : classNames("inactive")} type="button" onClick={() => this.props.linkClick("Resume")}>Resume</button></li>
          <li><button className={this.props.activeTab.hobbies ? classNames("active") : classNames("inactive")} type="button" onClick={() => this.props.linkClick("Hobbies")}>Hobbies</button></li>
          <li><button className={this.props.activeTab.about ? classNames("active") : classNames("inactive")} type="button" onClick={() => this.props.linkClick("About")}>About</button></li>
        </ul>
      </div>
    );
  }
}
