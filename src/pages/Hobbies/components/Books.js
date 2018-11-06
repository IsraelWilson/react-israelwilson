import React from 'react';

export class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: "Fantasy"};
  }

  componentDidMount() {
    if(this.props.type == "Fantasy") {
      });
    } else {
      });
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
