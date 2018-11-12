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
    if(this.props.subNavButtons != null){
      buttons = this.props.navButtons.map((button, index) => (<>
                                                              <li><Button onClick={() => button.click()} title={button.title}/></li>
                                                              <li><Button onClick={() => this.props.subNavButtons[index + index].click()} title={this.props.subNavButtons[index + index].title}/></li>
                                                              <li><Button onClick={() => this.props.subNavButtons[index + index + 1].click()} title={this.props.subNavButtons[index + index + 1].title}/></li>
                                                              </>));
    }
    else {
      buttons = this.props.navButtons.map(button => (<li><Button onClick={() => button.click()} title={button.title}/></li>));
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
