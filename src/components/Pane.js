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
        buttons = this.props.paneButtons.map(button => (<React.Fragment><li><Button className={button.active ? classNames("active") : classNames("inactive")} onClick={() => button.click()} title={button.title}/></li><div className={button.active ? classNames("panel-show") : classNames("panel-hide")}>{button.content.map(subButton => (<li><Button className={subButton.active ? classNames("active") : classNames("inactive")} onClick={() => subButton.click()} title={subButton.title}/></li>))}</div></React.Fragment>));
      }else {
        buttons = this.props.paneButtons.map(button => (<li><Button className={button.active ? classNames("active") : classNames("inactive")} onClick={() => button.click()} title={button.title}/></li>));
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
