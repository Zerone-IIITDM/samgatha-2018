import React,{Component} from "react";
import "./MobileContactUs.css";
class MobileContactUs extends Component{
	render(){
		return(
			<div className="mobilemainPage">
				<div className="mobileheading">CONTACT US</div>
				<div className="mobilecontent">
					<div className="mobileclubName">Organisers</div>
					<div className="mobileclub">
						<div className="mobilemember">
							<img src={require("../icons/omsai.png")} alt="contactPic" />
							<div className="mobilememberInfo">Omsai K<br />9941990721</div>
						</div>
						<div className="mobilemember">
							<img src={require("../icons/dheepika.png")} alt="contactPic" />
							<div className="mobilememberInfo">Dheepika K<br />9952035154</div>
						</div>
						<div className="mobilemember">
							<img src={require("../icons/archana.png")} alt="contactPic" />
							<div className="mobilememberInfo">Archana<br />7598492607</div>
						</div>
					</div>
				</div>
				<div className="borderBottom"></div>
				<div className="mobilecontent">
					<div className="mobileclubName">WebOps</div>
					<div className="mobileclub">
						<div className="mobilemember">
							<img src={require("../icons/pranay1.PNG")} alt="contactPic" />
							<div className="mobilememberInfo">Pranay Ankit<br />8839084045</div>
						</div>
						<div className="mobilemember">
							<img src={require("../icons/nipun.JPG")} alt="contactPic" />
							<div className="mobilememberInfo">Nipun Bharti<br />7889552217</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MobileContactUs;
