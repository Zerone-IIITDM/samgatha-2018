import React,{ Component } from 'react';
import './MobileSpons.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class MobileSpons extends Component{

	render(){

		return(

				<div className='mobileout' >
					<div className='mobiletitext'>
						Sponsors
					</div>
				<div className='mobilesponsors'>
						<div className='mobilecon1'>
							<div><img src={require("./1.jpg")} /></div>
							<div><img src={require("./1.jpg")} /></div>
							<div><img src={require("./1.jpg")} /></div>
							<div><img src={require("./1.jpg")} /></div>
							<div><img src={require("./1.jpg")} /></div>
							<div><img src={require("./1.jpg")} /></div>
							<div><img src={require("./1.jpg")} /></div>
							<div><img src={require("./1.jpg")} /></div>
						</div>
				</div>
			</div>

			);
	}
}


export default MobileSpons;
