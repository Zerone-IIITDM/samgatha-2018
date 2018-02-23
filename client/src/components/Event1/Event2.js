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
      current: menuItems[0]
    };
    this.changeCurrent = this.changeCurrent.bind(this);
  }
  changeCurrent(index) {
    this.setState({
      current: menuItems[index]
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    var x = this.props.event.data;
    var y = this.props.event.contacts;
    menuItems[0].data = x;
    menuItems[1].data = y;
    var r = x.concat(y);
    return (
      <div className="eventOneContainer">
        <div className="eventOneHeader">{this.props.event.eventName}</div>
        <div className="statedThings">
          <div className="eventOneRegister">REGISTER</div>
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
            <div>{this.state.current.data}</div>
            {/* <div className="eventFormat">
											\EVENT FORMAT/
										</div>
										<div className="problemStatement">
											\PROBLEM STATEMENT/
										</div>
										<div className="eventRules">
											\EVENT RULES/
										</div>
										<div className="judge">
											\JUDGE CRITERIA/
										</div>
										<div className="faq">
											\FAQ/
										</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default EventOne;
