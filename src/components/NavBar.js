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
      <div className="left-right">
        <h3>Israel Wilson</h3>
        <ul>
          <li><button className={this.props.activeTab.home ? classNames("active", "button-nav") : classNames("inactive", "button-nav")} type="button" onClick={() => this.props.linkClick("Home")}>HOME</button></li>
          <li><button className={this.props.activeTab.projects ? classNames("active", "button-nav") : classNames("inactive", "button-nav")} type="button" onClick={() => this.props.linkClick("Projects")}>PROJECTS</button></li>
          <li><button className={this.props.activeTab.resume ? classNames("active", "button-nav") : classNames("inactive", "button-nav")} type="button" onClick={() => this.props.linkClick("Resume")}>RESUME</button></li>
          <li><button className={this.props.activeTab.hobbies ? classNames("active", "button-nav") : classNames("inactive", "button-nav")} type="button" onClick={() => this.props.linkClick("Hobbies")}>HOBBIES</button></li>
          <li><button className={this.props.activeTab.about ? classNames("active", "button-nav") : classNames("inactive", "button-nav")} type="button" onClick={() => this.props.linkClick("About")}>ABOUT</button></li>
        </ul>
        </div>
      </div>
    );
  }
}
