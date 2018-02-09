import React,{ Component } from 'react';
import './MobileEvent1.css';

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

class MobileEventOne extends Component{
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

		const activeStyle = {display: 'block'};
		const borderStyle = {borderBottom: '2px solid #b1ff64'};
		return(
			<div className="mobileeventOneContainer">
					<div className="mobileeventOneHeader">
						{this.props.event.eventName}
					</div>
					<div className="mobilestatedThings">
						<div className="mobileeventOneRegister">
						 REGISTER
			            </div>
			            <div className="mobileeventOneBasket">
				            {
				            	menuItems.map( function(menuItem, index){
				            		return(
					            		<div className={("mobileeventOne"+menuItem.key)} onClick={main.changeCurrent.bind(this,index) } >
					            			{menuItem.name}
					            		</div>
				            		);
				            	})
				            }
				        </div>
				        <div className="mobileeventDetailContent">
				        				<div>
				        					{this.state.current.data}
				        				</div>
				        </div>
			        </div>
		    </div>
		);
	}
}

export default MobileEventOne;