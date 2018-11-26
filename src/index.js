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
    this.state = {activePage: <Home />,
                  activeTab: {home: true, projects: false, resume: false, hobbies: false, about: false}};
  }

  changePage(page) {
    switch(page) {
      case "Home":
        this.setState({activePage: <Home />,
                       activeTab: {home: true, projects: false, resume: false, hobbies: false, about: false}});
        break;
      case "Projects":
        this.setState({activePage: <Projects />,
                       activeTab: {home: false, projects: true, resume: false, hobbies: false, about: false}});
        break;
      case "Resume":
        this.setState({activePage: <Resume />,
                       activeTab: {home: false, projects: false, resume: true, hobbies: false, about: false}});
        break;
      case "Hobbies":
        this.setState({activePage: <Hobbies />,
                       activeTab: {home: false, projects: false, resume: false, hobbies: true, about: false}});
        break;
      case "About":
        this.setState({activePage: <About />,
                       activeTab: {home: false, projects: false, resume: false, hobbies: false, about: true}});
        break;
      default:
        this.setState({activePage: <Home />,
                       activeTab: {home: true, projects: false, resume: false, hobbies: false, about: false}});
    }
  }

  render() {
    return(
      <React.Fragment>
        <NavBar linkClick={page => this.changePage(page)} activeTab={this.state.activeTab}/>
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
