import React from 'react';
import {Button} from "./Button";

export class Pane extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = props.navButtons.map(button => (<Button onClick={() => button.click()} title={button.title}/>));
    this.subButtons = props.subNavButtons.map();
  }

  render() {
    return (
      <div>
        <ul>
          {this.buttons}
        </ul>
      </div>
    );
  }
}
