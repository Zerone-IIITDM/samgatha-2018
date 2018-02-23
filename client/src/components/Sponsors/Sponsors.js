import React, { Component } from "react";
import "./Sponsors.css";
import "../font-awesome-4.7.0/css/font-awesome.min.css";

class Sponsors extends Component {
  componentDidMount () {
         window.scrollTo(0, 0)
      }
  render() {    
    return (
      <div className="out">
        <div className="titext">Sponsors</div>
        <div className="sponsors">
          <div className="sponsBox">
            <a href="http://www.larsentoubro.com/">
              <img src={require("../icons/L&T.PNG")} alt="Sponsor" />
            </a>
            <div className="sponsHeader">
              <i>Co-Sponsor</i>
            </div>
          </div>
          <div className="sponsBox">
            <a href="http://www.radiomirchi.com/">
              <img src={require("../icons/radio.jpg")} alt="Sponsor" />
            </a>
            <div className="sponsHeader">
              <i>Radio Partner</i>
            </div>
          </div>
          <div className="sponsBox">
                <img src={require("../icons/saf.jpg")} alt="Sponsor" />
            <div className="sponsHeader">
              <i>Events Partner</i>
            </div>
          </div>
          <div className="sponsBox">
            <a href="http://www.indianbank.in/">
              <img src={require("../icons/hospi.jpg")} alt="Sponsor" />
            </a>
            <div className="sponsHeader">
              <i>Hospitality Partner</i>
            </div>
          </div>
          <div className="sponsBox">
            <a href="https://www.freshersworld.com/">
              <img src={require("../icons/fresher.png")} alt="Sponsor" />
            </a>
          </div>
          <div className="sponsBox">
            <a href="http://festpav.com/">
              <img src={require("../icons/festPav.png")} alt="Sponsor" />
            </a>
          </div>
          <div className="sponsBox">
            <a href="http://www.knowafest.com/college-fests/events">
              <img src={require("../icons/knowafest.jpg")} alt="Sponsor" />
            </a>
          </div>
          <div className="sponsBox">
            <a href="http://www.brainweave.co.in/">
              <img src={require("../icons/brain.png")} alt="Sponsor" />
            </a>
          </div>
          <div className="sponsBox">
            <a href="https://www.wisholize.com/">
              <img src={require("../icons/gift.jpg")} alt="Sponsor" />
            </a>
            <div className="sponsHeader">
              <i>Gifts Partner</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
