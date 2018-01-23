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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic .
            </div>
            <div className="techAndCult">
              <div className="tech">
                <div className="image1"></div>
                <div className="overlay1">
                  <div className="textOverlay">Technical Events.</div>
                </div>
              </div>
              <div className="cult">
                <div className="image1"></div>
                <div className="overlay2">
                  <div className="textOverlay">Cultural Events.</div>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default Events;