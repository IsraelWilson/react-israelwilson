import React from 'react';
import ReactDOM from 'react-dom';
//import '../styles/home.css';

export class InfoRow extends React.Component {
  constructor() {

  }

  return (
    <div>
      <h1>{props.header}</h1>
      <div>
        <p>
          {props.paragraph}
        </p>
      </div>
    </div>
  );
}
