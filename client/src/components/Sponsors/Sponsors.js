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
          <div className="sponsGrid">
            <div className="sponsBox">
              <a href="http://www.larsentoubro.com/" target="_blank">
                <img src={require("../icons/lt.png")} alt="Sponsor" />
              </a>
              <div className="sponsHeader">
                <i>Co-Sponsor</i>
              </div>
            </div>
            <div className="sponsBox symrise">
              <a href="https://www.symrise.com/" target="_blank">
                <img src={require("../icons/symrise.jpg")} alt="Sponsor" />
              </a>
              <div className="sponsHeader">
                <i>Co-Sponsor</i>
              </div>
            </div>
            <div className="sponsBox radio">
              <a href="http://www.radiomirchi.com/" target="_blank">
                <img src={require("../icons/radio.jpg")} alt="Sponsor" />
              </a>
              <div className="sponsHeader radioHeader">
                <i>Radio Partner</i>
              </div>
            </div>
          </div>
          <div className="sponsGrid grid2">
            <div className="sponsBox">
              <a href="http://www.indianbank.in/" target="_blank">
                <img src={require("../icons/bank.jpg")} alt="Sponsor" />
              </a>
              <div className="sponsHeader">
                <i>Hospitality Partner</i>
              </div>
            </div>
            <div className="sponsBox brain">
              <a href="http://www.brainweave.co.in/" target="_blank">
                <img src={require("../icons/brain.png")} alt="Sponsor" />
              </a>
            </div>
            <div className="innerGrid2">
              <div className="sponsBox fresher">
                <a href="https://www.freshersworld.com/" target="_blank">
                  <img src={require("../icons/fresher.png")} alt="Sponsor" />
                </a>
              </div>
              <div className="sponsBox know">
                <a href="http://www.knowafest.com/college-fests/events"  target="_blank">
                  <img src={require("../icons/knowafest.jpg")} alt="Sponsor" />
                </a>
              </div>
            </div>
          </div>
          <br />
          <div className="sponsGrid grid2">
            <div className="sponsBox wish">
              <a href="https://www.wisholize.com/" target="_blank">
                <img src={require("../icons/gift.jpg")} alt="Sponsor" />
              </a>
              <div className="sponsHeader">
                <i>Gifts Partner</i>
              </div>
            </div>
            <div className="innerGrid1">
              <div className="sponsBox super">
                <img src={require("../icons/saf.jpg")} alt="Sponsor" />
                <div className="sponsHeader superHeader">
                  <i>Events Partner</i>
                </div>
              </div>
              <div className="sponsBox festPav">
                <a href="http://festpav.com/" target="_blank">
                  <img src={require("../icons/festPav.png")} alt="Sponsor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
