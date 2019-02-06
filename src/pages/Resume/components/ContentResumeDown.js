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
        <span>
          <h3>Curricilum Vitae</h3>
          <button type="button">Download</button>
        <span>

        </span>
          <h3>Technical Resume</h3>
          <button type="button">Download</button>
        </span>
    );
  }
}
