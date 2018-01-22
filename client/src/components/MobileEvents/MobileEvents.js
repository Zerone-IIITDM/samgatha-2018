import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic .
              </div>
              <div className="mobiletechAndCult">
                <div className="mobiletech">
                  <div className="mobileimage1"></div>
                  <div className="mobileoverlay1">
                    <div className="mobiletextOverlay">Technical Events.</div>
                  </div>
                </div>
                <div className="mobilecult">
                  <div className="mobileimage1"></div>
                  <div className="mobileoverlay2">
                    <div className="mobiletextOverlay">Cultural Events.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default MobileEvents;