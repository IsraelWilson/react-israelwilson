import React from 'react';

export class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: "Fantasy"};
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div>Books</div>
    );
  }
}
