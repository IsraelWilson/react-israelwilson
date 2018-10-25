import React from 'react';
import ReactDOM from 'react-dom';
//import '../styles/home.css';

export class PictureRow extends React.Component {
  constructor() {

  }

  return (
    <div>
      <h1>props.header</h1>
      props.links.map(link => (
        <LinkImage url={link.url}
                   filePath={link.filePath}/>
                 ));
    </div>
  );
}
