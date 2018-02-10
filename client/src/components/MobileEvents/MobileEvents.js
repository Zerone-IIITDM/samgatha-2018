import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MobileEvents.css';

class MobileEvents extends Component {
  render() {
      return (
          <div className="mobileeventsMainContainer">
            <div className="mobileeventsContainer">
              <div className="mobileeventsHeader">
                EVENTS
              </div>
              <div className="mobileeventsContent">
                  
              </div>
              <div className="mobiletechAndCult">
                <Link to='techeventslist' className="mobiletech" style={{textDecoration:'none',color:'black'}}>
                  <img src={require("../icons/techMobile.png")} alt="mobileEventMainPic"/>
                  <div className="techText">Technical Events</div>
                </Link>
                <Link to='culteventslist' className="mobilecult" style={{textDecoration:'none',color:'black'}}>
                  <img src={require("../icons/cultMobile.png")} alt="mobileEventMainPic"/>
                  <div className="techText">Cultural Events</div>
                </Link>
              </div>
            </div>
          </div>
      );
  }
}

export default MobileEvents;