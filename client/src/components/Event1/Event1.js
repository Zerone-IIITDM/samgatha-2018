import React, { Component } from "react";
import "./Events1.css";

var menuItems = [
  {
    key: 0,
    name: "ABOUT",
    data: "This is about"
  },
  {
    key: 1,
    name: "CONTACTS",
    data: "This is contacts"
  }
];

var main;

class EventOne extends Component {
  constructor() {
    super();
    main = this;

    this.state = {
      current: menuItems[0],
      state1: "Click About to know about the event!",
      state2: "",
      state3: "",
      state4: "",
      state5: "",
      state6: "",
      state7: "",
      state8: ""
    };
    this.changeCurrent = this.changeCurrent.bind(this);
  }
  changeCurrent(index) {
    if (index == 0) {
      this.setState({
        state1: this.props.event.data,
        state2: this.props.event.eventFormat,
        state3: this.props.event.problemStatement,
        state4: this.props.event.eventRules,
        state5: this.props.event.judgingCriteria,
		state6: this.props.event.faq,
		state7: "",
        state8: "",
      });
    }
    if (index == 1) {
      this.setState({
        state1: "",
        state2: "",
        state3: "",
        state4: "",
        state5: "",
        state6: "",
        state7: this.props.event.club,
        state8: this.props.event.contacts
      });
    }
  }
  componentDidMount() {
	window.scrollTo(0, 0);
	this.changeCurrent(0);
  }
  render() {
	var x = this.props.event.data;
	var y = ["Click About to know more!"];
	x = x.concat(y);
    menuItems[0].data = x;
    return (
      <div className="eventOneContainer">
        <div className="eventOneHeader">{this.props.event.eventName}</div>
        <div className="statedThings">
<<<<<<< HEAD
          <div className="eventOneRegister">REGISTER</div>
=======
          <div className="eventOneRegister"><a href = {this.props.event.regLink} target = "_blank">REGISTER</a></div>
          {/*<a href = {this.props.event.regLink} target = "_blank"><div className="eventOneRegister">REGISTER</div></a>*/}
>>>>>>> 05156231a324535edac7d39a30e5a6c413f5c6e9
          <div className="eventOneBasket">
            <div className="eventOneLine">
              {menuItems.map(function(menuItem, index) {
                return (
                  <div
                    className={"eventOne" + menuItem.key}
                    onClick={main.changeCurrent.bind(this, index)}
                  >
                    {menuItem.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="eventDetailContent">
            <div>{this.state.state1}</div>
            <div className="eventFormat">{this.state.state2}</div>
            <div className="problemStatement">{this.state.state3}</div>
            <div className="eventRules">{this.state.state4}</div>
            <div className="judge">{this.state.state5}</div>
            <div className="faq">{this.state.state6}</div>
			<div className="clubName">{this.state.state7}</div>
			<div className="contacts">{this.state.state8}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventOne;
