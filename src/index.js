import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from "./pages/Home/Home"

class Website extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Home />
    );
  }
}

// ========================================

ReactDOM.render(
  <Website />,
  document.getElementById('root')
);
