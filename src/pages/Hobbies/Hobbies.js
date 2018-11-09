import React from 'react';
import {Pane} from "../../components/Pane";
import {Books} from "./components/Books";
import {Comics} from "./components/Comics";
import {Games} from "./components/Games";
import {Art} from "./components/Art";
import '../../styles.css';

export class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.onHobbyClick = this.onHobbyClick.bind(this);
    this.onSubHobbyClick = this.onSubHobbyClick.bind(this);

    this.state = {hobby: <Books type="Fantasy"/>,
                  books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                  comics: {active: false, type: {manga: {active: false}, marvel: {active: false}}},
                  games: {active: false, type: {pc: {active: false}, playstation: {active: false}}},
                  art: {active: false, type: {fan: {active: false}, original: {active: false}}}};

    this.paneButtons = [{click: () => {this.onHobbyClick("Books")}, title: "Books"},
                        {click: () => {this.onHobbyClick("Comics")}, title: "Comics"},
                        {click: () => {this.onHobbyClick("Games")}, title: "Games"},
                        {click: () => {this.onHobbyClick("Art")}, title: "Art"}];

    this.paneSubButtons = [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy"},
                           {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help"},
                           {click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons"},
                           {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel"},
                           {click: () => {this.onSubHobbyClick("PC")}, title: "PC"},
                           {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation"},
                           {click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art"},
                           {click: () => {this.onSubHobbyClick("Original")}, title: "Original"}];
  }

  onHobbyClick(hobby) {
    switch(hobby){
      case "Books":
        if(!this.state.books.active) {
          this.setState({hobby: <Books type="Fantasy"/>,
                         books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                         comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
        }
        break;
      case "Comics":
      if(!this.state.comics.active) {
          this.setState({hobby: <Comics type="Manga"/>,
                         comics: {active: true, type: {manga: {active: true}, marvel: {active: false}}},
                         books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
        }
        break;
      case "Games":
        if(!this.state.games.active) {
          this.setState({hobby: <Games type="PC"/>,
                         games: {active: true, type: {pc: {active: true}, playstation: {active: false}}},
                         comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
        }
        break;
      case "Art":
      if(!this.state.art.active) {
          this.setState({hobby: <Art type="FanArt"/>,
                         art: {active: true, type: {fan: {active: true}, original: {active: false}}},
                         comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
        }
        break;
      default:
      this.setState({hobby: <Books type="Fantasy"/>,
                     books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                     comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
    }
  };

  onSubHobbyClick(subHobby) {
    switch(subHobby) {
      case "Fantasy":
      if(!this.state.books.type.fantasy.active) {
        this.setState({hobby: <Books type="Fantasy"/>,
                       books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
      }
      break;
      case "Self Help":
      if(!this.state.books.type.fantasy.active) {
        this.setState({hobby: <Books type="SelfHelp"/>,
                       books: {active: true, type: {fantasy: {active: false}, selfHelp: {active: true}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
      }
      break;
      case "Manga/Webtoons":
      if(!this.state.books.type.fantasy.active) {
        this.setState({hobby: <Comics type="Manga"/>,
                       comics: {active: true, type: {manga: {active: true}, marvel: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
      }
      break;
      case "Marvel":
      if(!this.state.books.type.fantasy.active) {
        this.setState({hobby: <Comics type="Marvel"/>,
                       comics: {active: true, type: {manga: {active: false}, marvel: {active: true}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
      }
      break;
      case "PC":
      if(!this.state.books.type.fantasy.active) {
        this.setState({hobby: <Games type="PC"/>,
                       games: {active: true, type: {pc: {active: true}, playstation: {active: false}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
      }
      break;
      case "Playstation":
      if(!this.state.books.type.fantasy.active) {
        this.setState({hobby: <Games type="Playstation"/>,
                       games: {active: true, type: {pc: {active: false}, playstation: {active: true}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
      }
      break;
      case "Fan Art":
      if(!this.state.books.type.fantasy.active) {
        this.setState({hobby: <Art type="FanArt"/>,
                       art: {active: true, type: {fan: {active: true}, original: {active: false}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
      }
      break;
      case "Original":
      if(!this.state.books.type.fantasy.active) {
        this.setState({hobby: <Art type="Original"/>,
                       art: {active: true, type: {fan: {active: false}, original: {active: true}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
      }
      break;
      default:
      this.setState({hobby: <Books type="Fantasy"/>,
                     books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                     comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}}});
    }
  }

  render() {
    return (
      <React.Fragment>
        <Pane navButtons={this.paneButtons} subNavButtons={this.paneSubButtons}/>
        <div>
          {this.state.hobby}
        </div>
      </React.Fragment>
      );
  }
}
