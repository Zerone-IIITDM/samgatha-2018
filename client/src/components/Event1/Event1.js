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
			current: '',
		}
		this.changeCurrent = this.changeCurrent.bind(this)
	}
	changeCurrent(index){
		this.setState({
			current: menuItems[index]
		})
	}

	render(){
		menuItems[0].data = this.props.event.data;
		menuItems[1].data = this.props.event.contacts;
		return(
			<div className="eventOneContainer">
					<div className="eventOneHeader">
						{this.props.event.eventName}
					</div>
					<div className="statedThings">
						<div className="eventOneRegister">
						 REGISTER
			            </div>
			            <div className="eventOneBasket">
			            	<div className="eventOneLine">
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
				        </div>
				        <div className="eventDetailContent">
				        				<div>
				        					{this.state.current.data}
				        				</div>
				        </div>
			        </div>
		    </div>
		);
	}
}

export default EventOne;