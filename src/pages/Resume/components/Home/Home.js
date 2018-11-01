import React from 'react';
import ReactDOM from 'react-dom';
import {Footer} from "./Footer";
import {PictureRow} from "./PictureRow";
import {InfoRow} from "./InfoRow";
//import '../styles/home.css';

class Home extends React.Component {
  const socialMediaLinks = [{url: "#", filePath: "../images/android_dark.png"},
                            {url: "#", filePath: "../images/github_dark.png"},
                            {url: "#", filePath: "../images/instagram_dark.png"},
                            {url: "#", filePath: "../images/twitter_dark.png"},
  ];

  constructor() {

  }

  render() {
    return (
      <InfoRow header="About" paragraph=`Launched in 2018 as a waypoint for
                                         aspiring developers interested in starting
                                         a career in web or mobile application design,
                                         this site features information for a collection
                                         of projects that I work on.`/>
      <InfoRow header="About" paragraph=""/>
      <InfoRow header="About" paragraph=""/>

      <PictureRow links={socialMediaLinks}/>

      <Footer />
    );
  }
}
