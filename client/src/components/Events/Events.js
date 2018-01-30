import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './Events.css';

class Events extends Component {
  render() {
      return (
          <div className="eventsContainer">
            <div className="eventsHeader">
              Events
            </div>
            <div className="eventsContent">
             
            </div>
            <div className="techAndCult">
              <Link to='/techeventslist' className="tech" style={styles.links}>
                <img src={require("../icons/rsz_tech.png")} className="techImage" />
              </Link>
              <div className="division"></div>
              <Link to='/culteventslist' className="cult" style={styles.links}>
                <img src={require("../icons/rsz_cult.png")} className="techImage" />
              </Link>
            </div>
            <div className="footers">
              <div className="techFooter">
                Technical Events
              </div>
              <div className="cultFooter">
                Cultural Events
              </div>
            </div>
          </div>
      );
  }
}

export default Events;

const styles = {
  links:{
    textDecoration:'none',
    color:'black'
  },
};