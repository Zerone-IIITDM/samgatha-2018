import React, { Component } from "react";
import "./Sponsors.css";
import "../font-awesome-4.7.0/css/font-awesome.min.css";

class Sponsors extends Component {
  render() {
    return (
      <div className="out">
        <div className="titext">Sponsors</div>
        <div className="sponsors">
          <div className="sponsBox">
            <a href="http://www.larsentoubro.com/">
              <img src={require("../icons/L&T.PNG")} alt="Sponsor" />
            </a>
            <div className="sponsName">
              <b>Larsen & Toubro Limited</b>
            </div>
            <div className="sponsHeader">
              <i>Co-Sponsor</i>
            </div>
          </div>
          <div className="sponsBox">
            <a href="http://www.radiomirchi.com/">
              <img src={require("../icons/radio.jpg")} alt="Sponsor" />
            </a>
            <div className="sponsName">
              <b>Radio Mirchi 98.3</b>
            </div>
            <div className="sponsHeader">
              <i>Radio Partner</i>
            </div>
          </div>
          <div className="sponsBox">
            <div className="inlineBoxes">
              <div className="box1">
                <a href="http://www.radiomirchi.com/">
                  <img src={require("../icons/L&T.PNG")} alt="Sponsor" />
                </a>
                <div className="sponsName">
                  <b>Larsen & Toubro Limited</b>
                </div>
              </div>
              <div className="box2">
                <img src={require("../icons/saf.jpg")} alt="Sponsor" />
                <div className="sponsName">
                  <b>Super Auto Forge</b>
                </div>
              </div>
            </div>
            <div className="sponsHeader">
              <i>Events Partner</i>
            </div>
          </div>
          <div className="sponsBox">
            <a href="http://www.indianbank.in/">
              <img src={require("../icons/hospi.jpg")} alt="Sponsor" />
            </a>
            <div className="sponsName">
              <b>Indian Bank</b>
            </div>
            <div className="sponsHeader">
              <i>Hospitality Partner</i>
            </div>
          </div>
          <div className="sponsBox">
            <a href="https://www.wisholize.com/">
              <img src={require("../icons/gift.jpg")} alt="Sponsor" />
            </a>
            <div className="sponsName">
              <b>Wisholize</b>
            </div>
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
