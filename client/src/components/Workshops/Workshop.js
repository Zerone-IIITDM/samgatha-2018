import React,{ Component } from 'react';
import './Workshop.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

//Class for individual card
class Card extends Component{
	render(){
		return(

			<li ><a href = {this.props.link}><div className='t1' id = 'w1' style={{backgroundImage: 'url('+require(''+this.props.img1+'')+')'}}></div></a></li>	
		);		
	}
}

class Workshop extends Component{

	render(){

		return(
			
<div className='outer' >
			<div className='titiletext'>
			<b>Workshops</b><br/><br/>	
			</div>
			<div className='text'>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui eros, 
			vehicula eu pellentesque id, dapibus non lacus. <br/>Quisque commodo sed dolor posuere consectetur. 
			Duis dignissim tempor erat, maximus elementum sapien mattis eget.<br/> Aliquam lacus erat,
			 suscipit sit amet lacus ac, pellentesque 
			 convallis nunc.<br/> Integer pellentesque libero vitae nisi placerat, sed placerat enim finibus.
			 Proin et lorem eros. <br/>Vestibulum sed magna ullamcorper, semper velit in, pretium tellus. Proin vel bibendum 
			 orci. 
			</div>
			<div className='workshop'>
			
			<li className='cards'><Card img1 = './img.jpg' link='/workshop1' /></li>
			<li className='cards'><Card img1 = './img.jpg' link='/workshop2'/></li>
			<li className='cards'><Card img1 = './img.jpg' link='/workshop3' /></li>

			
			</div>
			
			<div className='workshop'>

			<li className='cards'><Card img1 = './img.jpg' link='/workshop4'/></li>
			<li className='cards'><Card img1 = './img.jpg' link='/workshop5'/></li>
			<li className='cards'><Card img1 = './img.jpg' link='/workshop6'/></li>


			</div>
			
</div>

			);
	}
}


export default Workshop;
