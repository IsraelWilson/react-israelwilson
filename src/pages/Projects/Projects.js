import React from 'react';
import {Pane} from "../../components/Pane";
import {ContentInfo} from "./components/ContentInfo";
import illustrator from "../../img/icons/illustrator.png";
import mysql from "../../img/icons/mysql.png";
import java from "../../img/icons/java.png";
import json from "../../img/icons/json.png";
import xml from "../../img/icons/xml.png";
import react from "../../img/icons/reacts.png";
import studio from "../../img/icons/studios.png";
import blender from "../../img/icons/blenders.png";
import unreal from "../../img/icons/unreals.png";
import wink from "../../img/icons/wink.png";
import '../../styles.css';
import classNames from "classnames";

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {paneButtons: [{click: () => {this.changeProject("All")}, title: "All", active: true},
                                {click: () => {this.changeProject("Android")}, title: "Android", active: false},
                                {click: () => {this.changeProject("Blender")}, title: "Blender", active: false},
                                {click: () => {this.changeProject("Unreal")}, title: "Unreal Studio", active: false},
                                {click: () => {this.changeProject("Websites")}, title: "Websites", active: false}]};
    this.winkTools = [{filePath: studio, header: "Android Studio", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: illustrator, header: "Adobe Illustrator", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: mysql, header: "Mysql", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: java, header: "Java", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: json, header: "Json", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: xml, header: "XML", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.blenderTools = [{filePath: blender, header: "Blender", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.unrealTools = [{filePath: unreal, header: "Unreal Engine", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.websiteTools = [{filePath: react, header: "React", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
  }

  changeProject(project) {
    switch(project) {
      case "All":
        this.setState({paneButtons: [{click: () => {this.changeProject("All")}, title: "All", active: true},
                      {click: () => {this.changeProject("Android")}, title: "Android", active: false},
                      {click: () => {this.changeProject("Blender")}, title: "Blender", active: false},
                      {click: () => {this.changeProject("Unreal")}, title: "Unreal Studio", active: false},
                      {click: () => {this.changeProject("Websites")}, title: "Websites", active: false}]});
        break;
      case "Android":
        this.setState({paneButtons: [{click: () => {this.changeProject("All")}, title: "All", active: false},
                      {click: () => {this.changeProject("Android")}, title: "Android", active: true},
                      {click: () => {this.changeProject("Blender")}, title: "Blender", active: false},
                      {click: () => {this.changeProject("Unreal")}, title: "Unreal Studio", active: false},
                      {click: () => {this.changeProject("Websites")}, title: "Websites", active: false}]});
        break;
      case "Blender":
        this.setState({paneButtons: [{click: () => {this.changeProject("All")}, title: "All", active: false},
                      {click: () => {this.changeProject("Android")}, title: "Android", active: false},
                      {click: () => {this.changeProject("Blender")}, title: "Blender", active: true},
                      {click: () => {this.changeProject("Unreal")}, title: "Unreal Studio", active: false},
                      {click: () => {this.changeProject("Websites")}, title: "Websites", active: false}]});
        break;
      case "Unreal":
        this.setState({paneButtons: [{click: () => {this.changeProject("All")}, title: "All", active: false},
                      {click: () => {this.changeProject("Android")}, title: "Android", active: false},
                      {click: () => {this.changeProject("Blender")}, title: "Blender", active: false},
                      {click: () => {this.changeProject("Unreal")}, title: "Unreal Studio", active: true},
                      {click: () => {this.changeProject("Websites")}, title: "Websites", active: false}]});
        break;
      case "Websites":
        this.setState({paneButtons: [{click: () => {this.changeProject("All")}, title: "All", active: false},
                      {click: () => {this.changeProject("Android")}, title: "Android", active: false},
                      {click: () => {this.changeProject("Blender")}, title: "Blender", active: false},
                      {click: () => {this.changeProject("Unreal")}, title: "Unreal Studio", active: false},
                      {click: () => {this.changeProject("Websites")}, title: "Websites", active: true}]});
        break;
      default:
        this.setState({paneButtons: [{click: () => {this.changeProject("All")}, title: "All", active: true},
                      {click: () => {this.changeProject("Android")}, title: "Android", active: false},
                      {click: () => {this.changeProject("Blender")}, title: "Blender", active: false},
                      {click: () => {this.changeProject("Unreal")}, title: "Unreal Studio", active: false},
                      {click: () => {this.changeProject("Websites")}, title: "Websites", active: false}]});
    }
  }

  render() {
    return (
      <div className={classNames("container")}>
        <Pane paneButtons={this.state.paneButtons} />
        <div className={classNames("col-10")}>
          <ContentInfo filePath={wink} toolsInfo={this.winkTools} paragraph="Wink is a rating app based on smileys and colors." />
          <ContentInfo filePath={wink} toolsInfo={this.blenderTools} paragraph="Wink is a rating app based on smileys and colors." />
          <ContentInfo filePath={wink} toolsInfo={this.unrealTools} paragraph="Wink is a rating app based on smileys and colors." />
          <ContentInfo filePath={wink} toolsInfo={this.websiteTools} paragraph="Wink is a rating app based on smileys and colors." />
        </div>
      </div>
      );
  }
}
