import React,{ Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Battle.css';

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

var main = this;
class Battle extends Component{
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
		return(
			<div className="mainBattle">
				<div className="headerBattle">
					<span id="big">b</span>ATTLE oF <span id="big">b</span>ANDS
				</div>
				<div className="parentBattle">
					<div className="aboutBattle">
						<div className="eventOneRegisterBattle">
						 REGISTER
			            </div>
			            <div className="eventOneBasket">
			            	<div className="eventOneLine">
				            {
				            	menuItems.map( function(menuItem, index){
				            		return(
					            		<div className={("eventOne"+menuItem.key)}  >
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
					<div className="carousal">
			        <img src={require("./icons/61.png")} style={{width:'100%',height:'100%'}} />
					</div>
				</div>
			</div>
		);
	}
}

export default Battle;