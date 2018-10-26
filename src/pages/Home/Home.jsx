import React from 'react';
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import {PictureRow} from "./components/PictureRow";
import {InfoRow} from "./components/InfoRow";
//import '../styles/home.css';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.socialMediaLinks = [{url: "#", filePath: "../images/android_dark.png"},
                              {url: "#", filePath: "../images/github_dark.png"},
                              {url: "#", filePath: "../images/instagram_dark.png"},
                              {url: "#", filePath: "../images/twitter_dark.png"}
                             ];

  }

  render() {
    return (
      <React.Fragment>
      <NavBar />
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

      <PictureRow links={this.socialMediaLinks}/>

      <Footer />
      </React.Fragment>
    );
  }
}
