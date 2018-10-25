import React from 'react';
import ReactDOM from 'react-dom';
//import '../styles/home.css';

export class LinkImage extends React.Component {
  constructor() {

  }

  return (
    <a href={props.url}><img src={props.filePath}></a>
  );
}
