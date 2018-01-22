import React,{Component} from "react";
import "./ContactUs.css";
class ContactUs extends Component{
	render(){
		return(
			<div className="mainPage">
			<div className="heading">Contact Us</div>
			<div className="content">
				<div className="clubName">QMS</div>
						<div className="club">
							<div className="members">
								<div className="member">
									<div className="memberPhoto"></div>
									<div className="memberInfo">Mainkandan<br />Mob:987654321</div>
								</div>
								<div className="member">
									<div className="memberPhoto"></div>
									<div className="memberInfo">Mainkandan<br />Mob:987654321</div>
								</div>
								<div className="member">
									<div className="memberPhoto"></div>
									<div className="memberInfo">Mainkandan<br />Mob:987654321</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default ContactUs;
