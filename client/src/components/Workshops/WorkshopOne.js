import React,{ Component } from 'react';
import './WorkshopOne.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';


class WorkshopOne extends Component{
	constructor(){
		super();
		this.state = {
			displayAbout:'block',
			displayReg:'none',
			displayVenue:'none',
			displayContact:'none',
		};
	}

	handleClickAbout(){
		this.setState({
			displayAbout:'block',
			displayReg:'none',
			displayVenue:'none',
			displayContact:'none',
		})
	}
	handleClickReg(){
		this.setState({
			displayAbout:'none',
			displayReg:'block',
			displayVenue:'none',
			displayContact:'none',
		})
	}
	handleClickVenue(){
		this.setState({
			displayAbout:'none',
			displayReg:'none',
			displayVenue:'block',
			displayContact:'none',
		})
	}
	handleClickContact(){
		this.setState({
			displayAbout:'none',
			displayReg:'none',
			displayVenue:'none',
			displayContact:'block',
		})
	}
	componentDidMount () {
         window.scrollTo(0, 0)
      }
	render(){
		return(
			<div className="workshopOneContainer">
				<div className="workshopOneHeader">
					Workshop #1
				</div>
				<div className="workshopOneRegister">
				 REGISTER
	            </div>
	            <div className="WorkshopOneBasket">
		            <div className="workshopOneAbout cursor" onClick={this.handleClickAbout.bind(this)}>
		            	ABOUT
		            </div>
		             <div className="workshopOneReg cursor" onClick={this.handleClickReg.bind(this)}>
		            	REGISTRATION DETAILS
		            </div>
		            <div className="workshopOneVenue cursor" onClick={this.handleClickVenue.bind(this)}>
		            	VENUE & TIMING
		            </div>
		             <div className="workshopOneContacts cursor" onClick={this.handleClickContact.bind(this)}>
		            	CONTACTS
		            </div>
	            </div>
	            <div className="workshopDetailContent">
	            	<div className="aboutContent" style={{display:this.state.displayAbout}}>
		            	This is about. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
		            	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
		            	when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
		            	It has survived not only five centuries
		            </div>
		            <div className="regContent" style={{display:this.state.displayReg}}>
		            	This is Reg. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
		            	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
		            	when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
		            	It has survived not only five centuries
		            </div>
		            <div className="regContent" style={{display:this.state.displayVenue}}>
		            	This is Venue. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
		            	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
		            	when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
		            	It has survived not only five centuries
		            </div>
		            <div className="regContent" style={{display:this.state.displayContact}}>
		            	This is Contact. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
		            	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
		            	when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
		            	It has survived not only five centuries
		            </div>
	            </div>
			</div>
		);
	}
}

export default WorkshopOne;