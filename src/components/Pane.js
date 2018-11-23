import React from 'react';
import {Button} from "./Button";
import '../styles.css';
import classNames from "classnames";

export class Pane extends React.Component {
  constructor(props) {
    super(props);

  }

  getNavList() {
    var buttons = [];
    for(var i = 0; i < this.props.paneButtons.length; i++) {
      if("content" in this.props.paneButtons[i]) {
        buttons = this.props.paneButtons.map(button => (<React.Fragment><li><Button onClick={() => button.click()} title={button.title}/></li><div>{button.content.map(subButton => (<li><Button onClick={() => subButton.click()} title={subButton.title}/></li>))}</div></React.Fragment>));
      }else {
        buttons = this.props.paneButtons.map(button => (<li><Button onClick={() => button.click()} title={button.title}/></li>));
      }
    }
    return buttons;
  }

  render() {
    return (
      <div className={classNames("col-2")}>
        <ul className={classNames("col")}>
          {this.getNavList()}
        </ul>
      </div>
    );
  }
}
