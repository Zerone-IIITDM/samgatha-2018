import React,{Component} from "react";
import "./ContactUs.css";
class ContactUs extends Component{
	componentDidMount () {
         window.scrollTo(0, 0)
      }
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
										<div className="cardImage">
											<img src={require("../icons/omsai.png")} alt="contactPic" />
										</div>
										<div className="memberInfo">Omsai K<br />+91-9941990721</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/komirishetty.omsai" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/omsaikomirishetty/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/omsai-komirishetty-326576104/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/dheepika.jpeg")} alt="contactPic" />
										</div>
										<div className="memberInfo">Dheepika K<br />+91-9952035154</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/K.Dheepika" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/dheepika_dyuti/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/kdheepika/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/arch.png")} alt="contactPic" />
										</div>
										<div className="memberInfo">Archana<br />+91-7598492607</div>
										<div className="cardLinks">
											<a href="https://www.instagram.com/a_r_c_h_a_n_a_25/?hl=en" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/archana-thachanamoorthy-658b30115" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
								</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">Public Relations</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/anirudh.png")} alt="contactPic" />
										</div>
										<div className="memberInfo">Gunda Anirudh<br />+91-9441126454</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/GUNDASAIANIRUDH" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/i_gsa/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/sai-anirudh-gunda-830675124/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/gaja.jpg")} alt="contactPic" />
										</div>
										<div className="memberInfo">Gajraj Gajapathi<br />+91-9952204562</div>
										<div className="cardLinks">
											<a href="https://m.facebook.com/gajaraj.gajapathi" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="www.instagram.com/gajaraj_gajapathi" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
										</div>
									</div>
								</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">Quality Management Services</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/viraj.png")} alt="contactPic" />
										</div>
										<div className="memberInfo">Viraj Sonatkar<br />+91-9405177970</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/viraj.sonatkar.97" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/viraj_sonatkar/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/viraj-sonatkar-9964b4121/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/sanj.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Sanjana Shankar<br />+91-9840184190</div>
										<div className="cardLinks">
											<a href="https://facebook.com/sanjanaluvzchoco" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/sanjana_sankar/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/hari.jpg")} alt="contactPic" />
										</div>
										<div className="memberInfo">SriHari Naidu<br />+91-9491788436</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/profile.php?id=100007983617251" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>
										</div>
									</div>
								</div>
								<div className="members">
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/aks.jpeg")} alt="contactPic" />
										</div>
										<div className="memberInfo">Akshay Kumar<br />+91-9790621713</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/akkimeranaam" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/akshaymharonaam" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
								</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">Sponsors Team</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/aditya.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Aditya Prakash<br />+91-9790729047</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/aproxx" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/aaahditya" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/shruti.png")} alt="contactPic" />
										</div>
										<div className="memberInfo">Shruti Purohit<br />+91-9962279055</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/people/Shruti-Purohit/100009390774033" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/_the_lazy_dreamer_/?hl=en" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
										</div>
									</div>
								</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">Hospitality Team</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/gaya.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Gayathri<br />+91-9566181454</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/gayu.nitturu" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/_gayathri_nitturu/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/gayathri-nitturu-a04528159/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/div.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">V Divya<br />+91-9487575247</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/divya.venkat.5682" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
										</div>
									</div>
								</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">General Arrangements</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/harish.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Harish<br />+91-7358612531</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/harish.elusuri" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/srinu.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Srinu<br />+91-9962286853</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/profile.php?id=100008622816388" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/srinu-banoth-4b3579119/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/ven.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Vennela<br />+91-9492652195</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/vennela.karumanchi" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/vennela_karumanchi/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/vennela-karumanchi-64184a11b/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
								</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">Graphic Design Club</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/maytre.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Maitreya<br />+91-9790707133</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/maitreya.sid.rybm" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/its_me_maitreya/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/maitreya-rayabharam-2828b8102/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/bitra.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Kartik Bitra<br />+91-9502372179</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/kartik.bitra" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/prudhvi.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Pruthvi<br />+91-9790707165</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/pruthvi.kasani" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/pruthvi_kasani/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/pruthvi-kasani-12113211a/ " target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
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
										<div className="cardImage">
											<img src={require("../icons/pranay1.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Pranay Ankit<br />+91-8839084045</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/pranay.ankit.9" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/pranayankit414/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/pranay-ankit-585a76b9/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/bharti.jpg")} alt="contactPic" />
										</div>
										<div className="memberInfo">Nipun Bharti<br />+91-7889552217</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/nipun011" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/nipunbharti/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/nipun-bharti-5aa95913a/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/yasho.PNG")} alt="contactPic" />
										</div>
										<div className="memberInfo">Yashovardhan Siramdas<br />+91-7550167987</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/yash.siramdas" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/yashovardhan-siramdas-9a238115a/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
								</div>
								<div className="members">
										<div className="member">
											<div className="cardImage">
												<img src={require("../icons/akhil.PNG")} alt="contactPic" />
											</div>
											<div className="memberInfo">Akhil Jasrotia<br />+91-9906280777</div>
											<div className="cardLinks">
												<a href="https://www.instagram.com/the_forsaken_carcass" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
												<a href="https://www.linkedin.com/in/akhil-jasrotia-01b52b137/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
											</div>
										</div>
									</div>
							</div>
					</div>
					<div className="borderBottom"></div>
					<div className="content">
					<div className="clubName">Web Designers</div>
							<div className="club">
								<div className="members">
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/Jeff.jpg")} alt="contactPic" />
										</div>
										<div className="memberInfo">Jeffrey Jacob<br />+91-9677440972</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/jeffrey.jacob.7" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/_jeffreyjacob_/?hl=en" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/jeffrey-jacob-02b276152/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/anakha.jpg")} alt="contactPic" />
										</div>
										<div className="memberInfo">Anakha Suresh<br />+91-9445677042</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/anakha.suresh.31" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/pointless_strokes" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
										</div>
									</div>
									<div className="member">
										<div className="cardImage">
											<img src={require("../icons/dharmesh.jpg")} alt="contactPic" />
										</div>
										<div className="memberInfo">Dharmesh Harsha<br />+91-9962279625</div>
										<div className="cardLinks">
											<a href="https://www.facebook.com/dharmesh.harsha" target="_blank" ><i className="fab socialIconsFacebook fa-facebook fa-xs"></i></a>&ensp;
											<a href="https://www.instagram.com/dharm_harsha/" target="_blank" ><i className="fab socialIconsFacebook fa-instagram fa-xs"></i></a>&ensp;
											<a href="https://www.linkedin.com/in/dharmesh-harsha-a3001b114/" target="_blank" ><i className="fab socialIconsFacebook fa-linkedin fa-xs"></i></a>
										</div>
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
