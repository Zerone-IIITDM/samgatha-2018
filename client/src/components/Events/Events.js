import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Events.css';

class Events extends Component {
  render() {
      return (
          <div className="eventsContainer">
            <div className="eventsHeader">
              EVENTS
            </div>
            <div className="eventsContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </div>
            <div className="techAndCult">
              <div className="tech">
                <div className="techFooter">
                  Technical Events
                </div>
              </div>
              <div className="cult">
                <div className="techFooter">
                  Cultural Events
                </div>  
              </div>
            </div>
          </div>
      );
  }
}

export default Events;