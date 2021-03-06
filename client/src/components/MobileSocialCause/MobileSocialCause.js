import React,{ Component } from 'react';
import './MobileSocialCause.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class MobileSocialCause extends Component{
	componentDidMount () {
         window.scrollTo(0, 0)
      }
    render(){
		return(
			<div className="mobilescContainer">
				<div className="mobilescHeader">
					Social Cause
				</div>
				<div className="mobilescImaCon">
				</div>
				<div className="mobilescContent">
	              Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities once enjoyed. It can lead to a variety of emotional and physical problems and can decrease a person’s ability to function at work and at home.
	      		</div>
	      		<div className="mobilescContent">
	              <div style={{color:'#9d6dcd',fontWeight:'700'}}>SAMGATHA 2018's</div> social motivation is to spread awareness about mental health under the theme "Depression is curable". To contribute to this cause, we have come up with an idea to support a foundation, SNEHA.
	      		</div>
	      		<div className="mobilescContent">
	              SNEHA is a voluntary, non-religious, non-political organisation which runs a 24-hour hotline to help the distressed, depressed and suicidal. They are entirely run by volunteers and operate solely on public donations. Through this fundraiser, we aim to spread the message about both the foundation and our college/fest as a small part of the proceeds will go into funding SAMGATHA.
	      		</div>
			</div>
		);
	}
}

export default MobileSocialCause;
