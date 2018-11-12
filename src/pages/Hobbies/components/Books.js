import React from 'react';
import '../../../styles.css';
import classNames from "classnames";

export class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: []};
  }

  componentDidMount() {
    if(this.props.type == "Fantasy") {
      fetch("../../../php/getDirectoryContents.php", {
        method: "POST",
        body: {directory: "Hobbies/images/books/Fantasy"}
        })
        .then(res => res.text())
        .then(
          result => {
            console.log(result);
          },
          error => {
            console.log(error);
            }
            )
    } else {
      fetch("../../../php/getDirectoryContents.php");
    }
  }

  buildFantasy(data) {

  }

  buildSelfHelp(data) {

  }

  render() {
    return(
      <div className={classNames("row")}>Books</div>
    );
  }
}
