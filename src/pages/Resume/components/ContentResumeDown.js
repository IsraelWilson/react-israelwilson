import React from 'react';
import {Button} from "../../../components/Button";
import '../../../styles.css';
import classNames from "classnames";

export class ContentResumeDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <div className={classNames("col-6")}>
          <h3>Curricilum Vitae</h3>
          <button type="button">Download</button>
        </div>

        <div className={classNames("col-6")}>
          <h3>Technical Resume</h3>
          <button type="button">Download</button>
        </div>
    </React.Fragment>
    );
  }
}
