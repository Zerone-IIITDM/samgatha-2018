import React,{ Component } from 'react';
import './MobileSpons.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class MobileSpons extends Component{
	componentDidMount () {
         window.scrollTo(0, 0)
      }
	render(){

		return(

				<div className='mobileout' >
					<div className='mobiletitext'>
						Sponsors
					</div>
				<div className='mobilesponsors'>
						Sponsors coming soon.<br />Watch out this space for more.
				</div>
			</div>

			);
	}
}


export default MobileSpons;
