import React from 'react';

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
        .then(res => res.json())
        .then(
          result => {
            alert("Success");
            this.setState({});
          },
          error => {
            alert(error);
            this.setState({});
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
      <div>Books</div>
    );
  }
}
