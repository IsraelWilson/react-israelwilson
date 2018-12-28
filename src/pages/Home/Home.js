import React from 'react';
import {PictureRow} from "./components/PictureRow";
import {InfoRow} from "./components/InfoRow";
import {InfoRowGrey} from "./components/InfoRowGrey";
import twitter from "../../img/icons/twitters.png";
import play from "../../img/icons/plays.png";
import github from "../../img/icons/github.png";
import instagram from "../../img/icons/instagrams.png";
import '../../styles.css';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.socialMediaLinks = [{url: "#", filePath: play},
                              {url: "#", filePath: github},
                              {url: "#", filePath: instagram},
                              {url: "#", filePath: twitter}
                             ];

  }

  render() {
    return (
      <React.Fragment>
      <InfoRowGrey header="Hello World!" paragraph="I'm a software engineer located in the DFW area
                                                    with a passion for web design and application development."/>
      <InfoRow header="Projects" paragraph="Check out my project portfolio to stay up to date with
                                            the interesting products I'm pushing out and for any oppertunities
                                            to collaborate. If you like my work and have something cool to work on,
                                            send me a message."/>
      <InfoRowGrey header="Git Gud" paragraph="Video games are what got me interested in programming and I take them
                                               just as seriously. Get to know more about the kinds of things I enjoy
                                               doing off the clock under hobbies. You might learn something."/>

      <PictureRow links={this.socialMediaLinks} header="Social Media"/>
      </React.Fragment>
    );
  }
}
