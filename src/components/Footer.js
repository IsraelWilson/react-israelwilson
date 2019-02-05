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
          <p>&copy; 2019 Israel Wilson</p>
        </div>

        <div className={classNames("col-4")}>
          <ul>
            <li><button className={classNames("button-nav")} type="button" onClick={() => this.props.linkClick("Home")}>HOME</button></li>
            <li><button className={classNames("button-nav")} type="button" onClick={() => this.props.linkClick("Projects")}>PROJECTS</button></li>
            <li><button className={classNames("button-nav")} type="button" onClick={() => this.props.linkClick("Resume")}>RESUME</button></li>
            <li><button className={classNames("button-nav")} type="button" onClick={() => this.props.linkClick("Hobbies")}>HOBBIES</button></li>
            <li><button className={classNames("button-nav")} type="button" onClick={() => this.props.linkClick("About")}>ABOUT</button></li>
          </ul>
        </div>

          <div className={classNames("col-4")}>

          </div>
      </footer>
    );
  }
}
