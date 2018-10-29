import React from 'react';
import {Pane} from "./components/Pane";
import {ContentInfo} from "./components/ContentInfo"

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.winkTools = [{filePath: "../images/android_studio.png", header: "Android Studio", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/adobe_illustrator.png", header: "Adpbe Illustrator", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/mysql.png", header: "Mysql", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/java.png", header: "Java", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/json.png", header: "Json", paragraph: "Android Studio is my development environment of choice for developing android applications."},
                      {filePath: "../images/xml.png", header: "XML", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.blenderTools = [{filePath: "../images/android_studio.png", header: "Blender", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.unrealTools = [{filePath: "../images/android_studio.png", header: "Unreal Engine", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
    this.websiteTools = [{filePath: "../images/android_studio.png", header: "React", paragraph: "Android Studio is my development environment of choice for developing android applications."}];
  }

  render() {
    return (
      <Pane/>
      <div>
        <ContentInfo filePath="..images/wink.png" toolsInfo={this.winkTools} paragraph="Wink is a rating app based on smileys and colors." />
        <ContentInfo filePath="..images/wink.png" toolsInfo={this.blenderTools} paragraph="Wink is a rating app based on smileys and colors." />
        <ContentInfo filePath="..images/wink.png" toolsInfo={this.unrealTools} paragraph="Wink is a rating app based on smileys and colors." />
        <ContentInfo filePath="..images/wink.png" toolsInfo={this.websiteTools} paragraph="Wink is a rating app based on smileys and colors." />
      </div>
      );
  }
}
