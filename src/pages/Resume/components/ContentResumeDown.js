import React from 'react';
import {Button} from "../../../components/Button";

export class ContentResumeDown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <h3>Curricilum Vitae</h3>
          <button type="button">Download</button>
        </div>

        <div>
          <h3>Technical Resume</h3>
          <button type="button">Download</button>
        </div>
    </React.Fragment>
    );
  }
}
