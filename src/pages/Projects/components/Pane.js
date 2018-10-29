import React from 'react';

export class Pane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <a href="#"><li>All</li></a>
          <a href="#"><li>Android</li></a>
          <a href="#"><li>Unreal Engine</li></a>
          <a href="#"><li>Blender</li></a>
          <a href="#"><li>Website</li></a>
        </ul>
      </div>
    );
}
