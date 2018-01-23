import React,{ Component } from 'react';
import './Innerworkshop.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';
class Innerworkshop extends Component{

	
	common()
	{

		return(

		<div className='outer'>  
<div class="wrapper">
  <div class="content">
    <div id="mainMenu">
      <ul>
        <li>
          <div class="item highlighted">
            <a href="#" >About</a>
          </div>
        </li>
        

        <li>
          <div class="item">
            <a href="#">Venue and Timings</a>
          </div>
        </li>
        <li>
          <div class="item">
            <a href="#">Register</a>
          </div>
        </li>
      </ul>
      
      <div id="menuContent">
     	<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui eros, 
			vehicula eu pellentesque id, dapibus non lacus. <br/>Quisque commodo sed dolor posuere consectetur. 
			Duis dignissim tempor erat, maximus elementum sapien mattis eget.<br/> Aliquam lacus erat,
			 suscipit sit amet lacus ac, pellentesque 
			 convallis nunc.<br/> Integer pellentesque libero vitae nisi placerat, sed placerat enim finibus.
			 Proin et lorem eros. <br/>Vestibulum sed magna ullamcorper, semper velit in, pretium tellus. Proin vel bibendum 
			 orci. 
      </div>
      
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
