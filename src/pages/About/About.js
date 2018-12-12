import React from 'react';
import '../../styles.css';
import classNames from "classnames";

export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      <div className={classNames("row")}>
        <div className={classNames("col-12", "center-content")}>
          <p className={classNames("center-content")}>Launched in 2018 as a waypoint for aspiring developers
             interested in starting a career in web or mobile application
             design, this site features information for a collection of
             projects that I work on.
           </p>
       </div>
      </div>

      <div className={classNames("row")}>
        <div className={classNames("col-12", "center-content")}>
          <p>If you are interested in having a website created for
             personal or business use, you have come to the right place.
             I also do comissioned work for android applications. Click
             the Contact button to get in touch.
           </p>
         </div>
      </div>

      <div className={classNames("row")}>
        <div className={classNames("col-12", "center-content")}>
          <p>You can also find out about what I'm doing with my downtime.
            As passionate as I am about programming, there are more layers
            to this onion. I keep updated records of what I'm reading,
            playing, and drawing. Make yourself at home and get to know the
            man behind the code.
          </p>
        </div>
      </div>
    </React.Fragment>
      );
  }
}
