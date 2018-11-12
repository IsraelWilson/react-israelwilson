import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class Comics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classNames("row")}>Comics</div>
    );
  }
}
