import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

class Events extends Component {
  componentDidMount () {
         window.scrollTo(0, 0)
      }
  render() {
      return (
          <div className="eventsContainer">
            <div className="eventsHeader">
              Events
            </div>
            <div className="eventsContent">
             
            </div>
            <div className="techAndCult">
              <div className="techAndCultBlockLine">
                <Link to='/techeventslist' className="tech" style={styles.links}>
                  <img src={require("../icons/rsz_rsz_tech.png")} className="techImage" alt="eventMainImage" />
                </Link>
                <div className="division"></div>
                <Link to='/culteventslist' className="cult" style={styles.links}>
                  <img src={require("../icons/rsz_rsz_cult.png")} className="techImage" alt="eventMainImage" />
                </Link>
              </div>
            </div>
            <div className="footers">
              <div className="footerLine">
                <div className="techFooter">
                  Technical Events
                </div>
                <div className="cultFooter">
                  Cultural Events
                </div>
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