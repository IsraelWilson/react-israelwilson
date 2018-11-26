import React from 'react';
import {Pane} from "../../components/Pane";
import {ContentInfo} from "./components/ContentInfo";
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
    this.winkTools = [{filePath: "../images/android_studio.png", header: "Android Studio", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/adobe_illustrator.png", header: "Adobe Illustrator", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/mysql.png", header: "Mysql", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/java.png", header: "Java", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/json.png", header: "Json", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/xml.png", header: "XML", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.blenderTools = [{filePath: "../images/android_studio.png", header: "Blender", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.unrealTools = [{filePath: "../images/android_studio.png", header: "Unreal Engine", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.websiteTools = [{filePath: "../images/android_studio.png", header: "React", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
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
          <ContentInfo filePath="..images/wink.png" toolsInfo={this.winkTools} paragraph="Wink is a rating app based on smileys and colors." />
          <ContentInfo filePath="..images/wink.png" toolsInfo={this.blenderTools} paragraph="Wink is a rating app based on smileys and colors." />
          <ContentInfo filePath="..images/wink.png" toolsInfo={this.unrealTools} paragraph="Wink is a rating app based on smileys and colors." />
          <ContentInfo filePath="..images/wink.png" toolsInfo={this.websiteTools} paragraph="Wink is a rating app based on smileys and colors." />
        </div>
      </div>
      );
  }
}
