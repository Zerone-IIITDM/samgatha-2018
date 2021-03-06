import React,{ Component } from 'react';
import './SocialCause.css';
import '../font-awesome-4.7.0/css/font-awesome.min.css';

class SocialCause extends Component{
	componentDidMount () {
         window.scrollTo(0, 0)
      }
	render(){
    
		return(
			<div className="scContainer">
				<div className="scHeader">
					Social Cause
				</div>
				<img src={require("../icons/dep.jpg")} className="depressionClass" alt="Depression"/>
				<div className="scContent">
	              {/*Depression (major depressive disorder) is a common and serious medical illness that negatively affects how you feel, the way you think and how you act. Fortunately, it is also treatable. Depression causes feelings of sadness and/or a loss of interest in activities once enjoyed. It can lead to a variety of emotional and physical problems and can decrease a person’s ability to function at work and at home.*/}
	              Depression is an often ignored, but extremely common mental disorder that has a severe impact on the people it affects. Different from merely being sad or down, depression leaves you unable to feel anything. The truth is, most people are likely to have an episode of depression over their lifetime. Through counseling and medication (in some extreme cases), these people can face significant relief. However, in India, there is too much misinformation and lack of awareness of the condition, and a stigma is associated with getting psychiatric help.
	      		</div>
	      		<div className="scContent">
	              <span style={{color:'#b1ff64',fontWeight:'700',fontSize:'30px'}}>SAMGATHA 2018's</span> social motivation is to spread awareness about mental health under the theme "Depression is curable". To contribute to this cause, we have come up with an idea to support a foundation, <span style={{fontWeight:'700',fontSize:'30px'}}><a href="https://www.snehaindia.org/" style={{color:'#b1ff64',textDecoration:'none'}}>SNEHA.</a></span>
	      		</div>
	      		<div className="scContent">
	            	SNEHA is a voluntary, non-religious, non-political organisation which runs a 24-hour hotline to help the distressed, depressed and suicidal. They are entirely run by volunteers and operate solely on public donations. Through the fundraiser, we aim to spread the message about both the foundation and our college/fest as a small part of the proceeds will go into funding SAMGATHA.
	      		</div>
			</div>
		);
	}
}

export default SocialCause;