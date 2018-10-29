import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home/Home";
import {Projects} from "./pages/Projects/Projects";

class Website extends React.Component {
  constructor(props) {
    super(props);
    this.activePage = [{Home: true}, {Projects: false}, {Resume: false}, {Hobbies: false}, {About: false}];
  }

  render() {
    return(
      <React.Fragment>
        <NavBar />
          <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

// ========================================

ReactDOM.render(
  <Website />,
  document.getElementById('root')
);
