import React from 'react';
import {Pane} from "../../components/Pane";
import {Books} from "./components/Books";
import {Comics} from "./components/Comics";
import {Games} from "./components/Games";
import {Art} from "./components/Art";
import '../../styles.css';
import classNames from "classnames";

export class Hobbies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hobby: <Books type="Fantasy"/>,
                  books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                  comics: {active: false, type: {manga: {active: false}, marvel: {active: false}}},
                  games: {active: false, type: {pc: {active: false}, playstation: {active: false}}},
                  art: {active: false, type: {fan: {active: false}, original: {active: false}}},
                  buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: true, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: true}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                            {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                            {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                            {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]};

  }

  onHobbyClick(hobby) {
    switch(hobby){
      case "Books":
        if(!this.state.books.active) {
          this.setState({hobby: <Books type="Fantasy"/>,
                         books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                         comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: true, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: true}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                   {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                   {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                   {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
        }
        break;
      case "Comics":
      if(!this.state.comics.active) {
          this.setState({hobby: <Comics type="Manga"/>,
                         comics: {active: true, type: {manga: {active: true}, marvel: {active: false}}},
                         books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                   {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: true, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: true}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                   {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                   {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
        }
        break;
      case "Games":
        if(!this.state.games.active) {
          this.setState({hobby: <Games type="PC"/>,
                         games: {active: true, type: {pc: {active: true}, playstation: {active: false}}},
                         comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                   {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                   {click: () => {this.onHobbyClick("Games")}, title: "Games", active: true, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: true}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                   {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
        }
        break;
      case "Art":
      if(!this.state.art.active) {
          this.setState({hobby: <Art type="FanArt"/>,
                         art: {active: true, type: {fan: {active: true}, original: {active: false}}},
                         comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                         buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                   {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                   {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                   {click: () => {this.onHobbyClick("Art")}, title: "Art", active: true, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: true}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
        }
        break;
      default:
      this.setState({hobby: <Books type="Fantasy"/>,
                     books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                     comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: true, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: true}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                               {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                               {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                               {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
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
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: true, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: true}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                 {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                 {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                 {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
      }
      break;
      case "Self Help":
      if(!this.state.books.type.selfHelp.active) {
        this.setState({hobby: <Books type="SelfHelp"/>,
                       books: {active: true, type: {fantasy: {active: false}, selfHelp: {active: true}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: true, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: true}]},
                                 {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                 {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                 {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
      }
      break;
      case "Manga/Webtoons":
      if(!this.state.comics.type.manga.active) {
        this.setState({hobby: <Comics type="Manga"/>,
                       comics: {active: true, type: {manga: {active: true}, marvel: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                 {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: true, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: true}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                 {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                 {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
      }
      break;
      case "Marvel":
      if(!this.state.comics.type.marvel.active) {
        this.setState({hobby: <Comics type="Marvel"/>,
                       comics: {active: true, type: {manga: {active: false}, marvel: {active: true}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                 {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: true, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: true}]},
                                 {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                 {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
      }
      break;
      case "PC":
      if(!this.state.games.type.pc.active) {
        this.setState({hobby: <Games type="PC"/>,
                       games: {active: true, type: {pc: {active: true}, playstation: {active: false}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                 {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                 {click: () => {this.onHobbyClick("Games")}, title: "Games", active: true, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: true}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                 {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
      }
      break;
      case "Playstation":
      if(!this.state.games.type.playstation.active) {
        this.setState({hobby: <Games type="Playstation"/>,
                       games: {active: true, type: {pc: {active: false}, playstation: {active: true}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                 {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                 {click: () => {this.onHobbyClick("Games")}, title: "Games", active: true, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: true}]},
                                 {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
      }
      break;
      case "Fan Art":
      if(!this.state.art.type.fan.active) {
        this.setState({hobby: <Art type="FanArt"/>,
                       art: {active: true, type: {fan: {active: true}, original: {active: false}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                 {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                 {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                 {click: () => {this.onHobbyClick("Art")}, title: "Art", active: true, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: true}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
      }
      break;
      case "Original":
      if(!this.state.art.type.original.active) {
        this.setState({hobby: <Art type="Original"/>,
                       art: {active: true, type: {fan: {active: false}, original: {active: true}}},
                       comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       books: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                       buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: false, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: false}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                                 {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                                 {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                                 {click: () => {this.onHobbyClick("Art")}, title: "Art", active: true, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: true}]},]});
      }
      break;
      default:
      this.setState({hobby: <Books type="Fantasy"/>,
                     books: {active: true, type: {fantasy: {active: true}, selfHelp: {active: false}}},
                     comics: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     games: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     art: {active: false, type: {fantasy: {active: false}, selfHelp: {active: false}}},
                     buttons: [{click: () => {this.onHobbyClick("Books")}, title: "Books", active: true, content: [{click: () => {this.onSubHobbyClick("Fantasy")}, title: "Fantasy", active: true}, {click: () => {this.onSubHobbyClick("Self Help")}, title: "Self Help", active: false}]},
                               {click: () => {this.onHobbyClick("Comics")}, title: "Comics", active: false, content: [{click: () => {this.onSubHobbyClick("Manga/Webtoons")}, title: "Manga/Webtoons", active: false}, {click: () => {this.onSubHobbyClick("Marvel")}, title: "Marvel", active: false}]},
                               {click: () => {this.onHobbyClick("Games")}, title: "Games", active: false, content: [{click: () => {this.onSubHobbyClick("PC")}, title: "PC", active: false}, {click: () => {this.onSubHobbyClick("Playstation")}, title: "Playstation", active: false}]},
                               {click: () => {this.onHobbyClick("Art")}, title: "Art", active: false, content: [{click: () => {this.onSubHobbyClick("Fan Art")}, title: "Fan Art", active: false}, {click: () => {this.onSubHobbyClick("Original")}, title: "Original", active: false}]},]});
    }
  }

  render() {
    return (
      <div className={classNames("container")}>
        <Pane paneButtons={this.state.buttons}/>
        <div className={classNames("col-10")}>
          {this.state.hobby}
        </div>
      </div>
      );
  }
}
