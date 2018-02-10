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
										<img src={require("../icons/omsai.png")} alt="contactPic" />
										<div className="memberInfo">Omsai K<br />9941990721</div>
									</div>
									<div className="member">
										<img src={require("../icons/dheepika.png")} alt="contactPic" />
										<div className="memberInfo">Dheepika K<br />9952035154</div>
									</div>
									<div className="member">
										<img src={require("../icons/archana.png")} alt="contactPic" />
										<div className="memberInfo">Archana<br />7598492607</div>
									</div>
								</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">WebOps</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<img src={require("../icons/pranay.png")} alt="contactPic" />
										<div className="memberInfo">Pranay Ankit<br />8839084045</div>
									</div>
									<div className="member">
										<img src={require("../icons/nipun.jpg")} alt="contactPic" />
										<div className="memberInfo">Nipun bharti<br alt="contactPic"/>7889552217</div>
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
