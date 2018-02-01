import React,{ Component } from 'react';
import './Events1.css';

var menuItems = [
					{
						key:0,
						name:'ABOUT',
						data:'This is about'
					},
					{
						key:1,
						name:'REGISTRATION DETAILS',
						data:'This is registration'
					},
					{
						key:2,
						name:'VENUE & TIMING',
						data:'This is venue'
					},
					{
						key:3,
						name:'CONTACTS',
						data:'This is contacts'
					},
				]

var main;

class EventOne extends Component{
	constructor(){
		super();
		main = this;

		this.state = {
			current: 'About!'
		}

		this.changeCurrent = this.changeCurrent.bind(this)
	}

	changeCurrent(index){
		this.setState({
			current: menuItems[index].data
		})
	}

	render(){
		const activeStyle = {display: 'block'};
		const borderStyle = {borderBottom: '2px solid #b1ff64'};
		return(
			<div className="eventOneContainer">
					<div className="eventOneHeader">
						{this.props.eventName}
					</div>
					<div className="eventOneRegister">
					 REGISTER
		            </div>
		            <div className="eventOneBasket">
			            {
			            	menuItems.map( function(menuItem, index){
			            		return(
				            		<div className={("eventOne"+menuItem.key)} onClick={main.changeCurrent.bind(this,index) } >
				            			{menuItem.name}
				            		</div>
			            		);
			            	})
			            }
			        </div>
			        <div className="eventDetailContent">
			        				<div>
			        					{this.state.current}
			        				</div>
			        </div>
		    </div>
		);
	}
}

export default EventOne;