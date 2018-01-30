import React,{Component} from "react";
import "./ContactUs.css";
class ContactUs extends Component{
	render(){
		return(
			<div>
				<div className="mainPage">
				<div className="heading">Contact Us</div>
				<div className="content">
					<div className="clubName">Organisers</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<img src={require("../icons/omsai.png")} />
										<div className="memberInfo">Omsai K<br />9941990721</div>
									</div>
									<div className="member">
										<img src={require("../icons/dheepika.png")} />
										<div className="memberInfo">Dheepika K<br />9952035154</div>
									</div>
									<div className="member">
										<div className="memberPhoto"></div>
										<div className="memberInfo">Archana<br />7598492607</div>
									</div>
								</div>
							</div>
					</div>
					{/* <div className="borderBottom"></div>
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
						</div>*/}
				</div>
			</div>
		);
	}
}

export default ContactUs;
