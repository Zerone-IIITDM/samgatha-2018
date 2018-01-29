import React,{Component} from "react";
import "./ContactUs.css";
class ContactUs extends Component{
	render(){
		return(
			<div>
				<div className="mainPage">
				<div className="heading">Contact Us</div>
				<div className="content">
					<div className="clubName">QMS</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="memberPhoto"></div>
										<div className="memberInfo">Name<br />Mobile Number</div>
									</div>
									<div className="member">
										<div className="memberPhoto"></div>
										<div className="memberInfo">Name<br />Mobile Number</div>
									</div>
									<div className="member">
										<div className="memberPhoto"></div>
										<div className="memberInfo">Name<br />Mobile Number</div>
									</div>
								</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">GA</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="memberPhoto"></div>
										<div className="memberInfo">Name<br />Mobile Number</div>
									</div>
									<div className="member">
										<div className="memberPhoto"></div>
										<div className="memberInfo">Name<br />Mobile Number</div>
									</div>
									<div className="member">
										<div className="memberPhoto"></div>
										<div className="memberInfo">Name<br />Mobile Number</div>
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		);
	}
}

export default ContactUs;
