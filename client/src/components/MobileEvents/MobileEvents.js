import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
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
                <Link to='techeventslist' className="mobiletech">
                  <div className="mobileimage1"></div>
                  <div className="mobileoverlay1">
                    <div className="mobiletextOverlay">Technical Events.</div>
                  </div>
                </Link>
                <Link to='techeventslist' className="mobilecult">
                  <div className="mobileimage1"></div>
                  <div className="mobileoverlay2">
                    <div className="mobiletextOverlay">Cultural Events.</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
      );
  }
}

export default MobileEvents;