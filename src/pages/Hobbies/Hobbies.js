import React from 'react';
import {Pane} from "../../components/Pane";

export class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hobby: "Books",
                  books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                  comics: {active: false, type: {manga: {active: false}, marvel: {active: false}}},
                  games: {active: false, type: {pc: {active: false}, playstation: {active: false}}},
                  art: {active: false, type: {fan: {active: false}, original: {active: false}}}};

    this.paneButtons = [{click: () => {this.state.hobby == <Books /> ? this.setState({hobby: <Books />})}, title: "Books"},
                        {click: () => {this.setState({hobby: <Comics />})}, title: "Comics"},
                        {click: () => {this.setState({hobby: <Games />})}, title: "Games"},
                        {click: () => {this.setState({hobby: <Art />})}, title: "Art"}];

    this.paneSubButtons = [{click: () => {this.setState({hobby: <Books />})}, titles: ["Fantasy", "Self Help"]},
                           {click: () => {this.setState({hobby: <Comics />})}, titles: ["Manga/Webtoons", "Marvel"]},
                           {click: () => {this.setState({hobby: <Games />})}, titles: ["PC", "Playstation"]},
                           {click: () => {this.setState({hobby: <Art />})}, titles: ["Fan Art", "Original"]}];
  }

  renderHobby(hobby) {
    switch(hobby) {
      case "Books":
        this.state.books.fantasy.active ? return <Books /> : return <Books />;
        break;
      case "Comics":
        this.state.comics.manga.active ? return <Comics /> : return <Comics />;
        break;
      case "Games":
        this.state.games.pc.active ? return <Games /> : return <Games />;
        break;
      case "Art":
        this.state.art.fan.active ? return <Art /> : return <Art />;
        break;
      default:
        return <Books />;
  }

  setActiveSubHobby(subHobby) {

  }

  resetHobbies() {

  }

  onHobbyClick(hobby) {
    case "Books":
      if(!this.state.books.active) {
        this.setState({hobby: "Books",
                       books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}}});
      }
      break;
    case "Comics":
    if(!this.state.books.active) {
        this.setState({hobby: "Comics",
                       comics: {active: true, type: {manga: {active: true}, marvel: {active: false}}}});
      }
      break;
    case "Games":
      if(!this.state.books.active) {
        this.setState({hobby: "Games",
                       games: {active: true, type: {pc: {active: true}, playstation: {active: false}}}});
      }
      break;
    case "Art":
    if(!this.state.books.active) {
        this.setState({hobby: "Art",
                       art: {active: true, type: {fan: {active: true}, original: {active: false}}}});
      }
      break;
    default:
    this.setState({hobby: "Books",
                  books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}}});
  }

  onSubHobbyClick(subHobby) {

  }

  render() {
    return (
      <React.Fragment>
        <Pane navButtons={this.paneButtons}/>
        <div>
          {this.state.hobby}
        </div>
      </React.Fragment>
      );
  }
}
