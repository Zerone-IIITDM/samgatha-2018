import React,{ Component } from 'react';
import './Workshop.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class Card extends Component{
	render(){
		return(
			<li ><a href = {this.props.link}><div className='t1' id = 'w1' style={{backgroundImage: 'url('+require(''+this.props.img1+'')+')'}}></div></a></li>	
		);		
	}
}

class Innerworkshop extends Component{

	render(){
		if (this.props.num == "1")
		return(
			<p>Sample text 1</p>
		);
		else if (this.props.num == "2")
		return (
			<p>Sample text 2</p>
		);	
		else if (this.props.num == "3")
		return(
			<p>Sample text 3</p>
		);
		else if (this.props.num == "4")
		return(
			<p>Sample text 4</p>
		);
		else if (this.props.num == "5")
		return(
			<p>Sample text 5</p>
		);	
		else if (this.props.num == "6")
		return(
			<p>Sample text 6</p>
		);
		else
		return(
			<p>Not Found!</p>
		);	
	}
}


export default Innerworkshop;
