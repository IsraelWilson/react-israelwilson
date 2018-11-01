import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home/Home";
import {Projects} from "./pages/Projects/Projects";
import {Resume} from "./pages/Resume/Resume";
import {Hobbies} from "./pages/Hobbies/Hobbies";
import {About} from "./pages/About/About";

class Website extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activePage: <Home />};
  }

  changePage(page) {
    switch(page) {
      case "Home":
        this.setState({activePage: <Home />});
        break;
      case "Projects":
        this.setState({activePage: <Projects />});
        break;
      case "Resume":
        this.setState({activePage: <Resume />});
        break;
      case "Hobbies":
        this.setState({activePage: <Hobbies />});
        break;
      case "About":
        this.setState({activePage: <About />});
        break;
      default:
        this.setState({activePage: <Home />});
    }
  }

  render() {
    return(
      <React.Fragment>
        <NavBar linkClick={page => this.changePage(page)}/>
          {this.state.activePage}
        <Footer linkClick={page => this.changePage(page)}/>
      </React.Fragment>
    );
  }
}

// ========================================

ReactDOM.render(
  <Website />,
  document.getElementById('root')
);
