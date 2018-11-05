import React from 'react';
import {Button} from "./Button";

export class Pane extends React.Component {
  constructor(props) {
    super(props);

  }

  getNavList() {
    var buttons = [];
    if(this.props.subNavButtons != null){
      buttons = this.props.navButtons.map((button, index) => (<>
                                                              <Button onClick={() => button.click()} title={button.title}/>
                                                              <Button onClick={() => this.props.subNavButtons[index + index].click()} title={this.props.subNavButtons[index + index].title}/>
                                                              <Button onClick={() => this.props.subNavButtons[index + index + 1].click()} title={this.props.subNavButtons[index + index + 1].title}/>
                                                              </>));
    }
    else {
      buttons = this.props.navButtons.map(button => (<Button onClick={() => button.click()} title={button.title}/>));
    }
    return buttons;
  }

  render() {
    return (
      <div>
        <ul>
          {this.getNavList()}
        </ul>
      </div>
    );
  }
}
