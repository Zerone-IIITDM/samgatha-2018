import React,{ Component } from 'react';
import './Innerworkshop.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';
class Innerworkshop extends Component{

	about()
	{
		return(
			 <div className='about'>
        <br/><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui eros, 
			vehicula eu pellentesque id, dapibus non lacus. Quisque commodo sed dolor posuere consectetur. 
			Duis dignissim tempor erat, maximus elementum sapien mattis eget. Aliquam lacus erat,
			 suscipit sit amet lacus ac, pellentesque 
			 convallis nunc. Integer pellentesque libero vitae nisi placerat, sed placerat enim finibus.
			 Proin et lorem eros. <br/>Vestibulum sed magna ullamcorper, semper velit in, pretium tellus. Proin vel bibendum 
			 orci.
			</div>
			);
	}
	venue()
	{
		return(
			 <div className='venue'>
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui eros, 
			vehicula eu pellentesque id, dapibus non lacus. Quisque commodo sed dolor posuere consectetur. 
			Duis dignissim tempor erat, maximus elementum sapien mattis eget. Aliquam lacus erat,
			 suscipit sit amet lacus ac, pellentesque 
			 convallis nunc. Integer pellentesque libero vitae nisi placerat, sed placerat enim finibus.
			 Proin et lorem eros. <br/>Vestibulum sed magna ullamcorper, semper velit in, pretium tellus. Proin vel bibendum 
			 orci.</b>
			</div>
			);
	}
	common()
	{

		return(

		<div className='outerdiv'>  
<div class="wrapper">
  <div class="content">
    <div id="mainMenu">
      <ul>
        <li id='about'>
          <div  className='item highlighted'>
            <a className='links'  href="#">About</a>
             
          </div>
        
      
        </li>
           
     	
        <li id='venue' >
          <div class="item">
            <a className='links'  href="#">Venue and Timings</a>
          </div>
        </li>
        <li id='register'>
          <div class="item">
            <a className='links' href="#">Register</a>
          </div>
        </li>
        
    <div id='aboutcontent'> {this.about()} </div>
    <div id='venuecontent'> {this.venue()}</div>
			
     
      

      </ul>
      
     
      
    </div>
  </div>
  </div>
  </div>
		);
	}
	
render(){
	
		if (this.props.num === "1")
		return(
			<div>
			<li>{this.common()}</li>

			</div>
		);
		else if (this.props.num === "2")
		return (
			<li>{this.common()}</li>
		
		);	
		else if (this.props.num === "3")
		return(
			<li>{this.common()}</li>
			
		);
		else if (this.props.num === "4")
		return(
			<li>{this.common()}</li>
			
		);
		else if (this.props.num === "5")
		return(
			<li>{this.common()}</li>
			
		);	
		else if (this.props.num === "6")
		return(
			<li>{this.common()}</li>
			
		);
		else
		return(
			<p>Not Found!</p>
		);	

	}
	
		
	
}


export default Innerworkshop;
