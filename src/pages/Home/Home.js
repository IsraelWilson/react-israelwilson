import React from 'react';
import {PictureRow} from "./components/PictureRow";
import {InfoRow} from "./components/InfoRow";
import twitter from "../../img/icons/twitter.png";
import play from "../../img/icons/play.png";
import github from "../../img/icons/github.png";
import instagram from "../../img/icons/instagram.png";
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
      <InfoRow header="About" paragraph="Launched in 2018 as a waypoint for
                                         aspiring developers interested in starting
                                         a career in web or mobile application design,
                                         this site features information for a collection
                                         of projects that I work on."/>
      <InfoRow header="About" paragraph="If you are interested in having a website created
                                         for personal or business use, you have come to the
                                         right place. I also do comissioned work for android
                                         applications. Click the Contact button to get in touch."/>
      <InfoRow header="About" paragraph="You can also find out about what I'm doing with my
                                         downtime. As passionate as I am about programming, there
                                         are more layers to this onion. I keep updated records of
                                         what I'm reading, playing, and drawing. Make yourself at
                                         home and get to know the man behind the code."/>

      <PictureRow links={this.socialMediaLinks} header="Social Media"/>
      </React.Fragment>
    );
  }
}
