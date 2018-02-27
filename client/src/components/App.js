import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Workshop from './Workshops/Workshop';
import Events from './Events/Events';
import Sponsors from './Sponsors/Sponsors';
import Home from './Homepage/Home';
import Footer from './Footer/Footer';
import Navbar from './MobileNavbar/Navbar';
import MobileFooter from './MobileFooter/MobileFooter';
import MobileHome from './MobileHome/MobileHome';
import MobileWorkshops from './MobileWorkshops/MobileWorkshops';
import ContactUs from './Contactus/ContactUs';
import MobileEvents from './MobileEvents/MobileEvents';
import MobileContactUs from './MobileContactUs/MobileContactUs';
import MobileSpons from './MobileSpons/MobileSpons';
import WorkshopOneMin from './Workshops/WorkshopOneMin';
import SocialCause from './SocialCause/SocialCause';
import MobileSocialCause from './MobileSocialCause/MobileSocialCause';
import TechEventsList from './EventsList/TechEventsList';
import MobileTechEventsList from './MobileEventsList/MobileTechEvents';
import CultEventsList from './EventsList/CultEventsList';
import MobileCultEventsList from './MobileEventsList/MobileCultEvents';
import EventOne from './Event1/Event1';
import MobileEventOne from './MobileEvent1/MobileEvent1';
import Battle from './BattleofBands';
import { auth } from './FirebaseUi/firebaseConfig';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import RegistrationDone from './RegistrationDone/RegistrationDone';

/*EVENT FORMS START HERE*/
var chakravyuha_form				=	"https://goo.gl/forms/4o7g1PFXsMfyWQR03"
var warOfWatts_form					=	"https://goo.gl/forms/CMqeSkjbwF8zHCL03"
var tech4Help_form					=	"https://goo.gl/forms/VKigsYebsqgqa6t42"
var cleanTheSpace_form				=	"https://goo.gl/forms/7xd98tO4lLDNcGjH2"
var relayDesign_form				=	"https://goo.gl/forms/jLEpbEafEo7lyjLz1"
var junkyardWars_form				=	"https://goo.gl/forms/AIIbLEEyuZavWVmG3"
var triviosity_form					=	"https://goo.gl/forms/5dyeX0QxOvKzfRPq1"
var appAThon_form					=	"https://goo.gl/forms/xfLQs28TLtpJoZ4d2"
var codeAution_form					=	"https://goo.gl/forms/rA8vNbBXjQd4Sxaz1"
var samgathaBusinessChallenge_form	=	"https://goo.gl/forms/gGYlBG9P32zOHQUL2"
var pitchPlease_form				=	"https://goo.gl/forms/OFkb5Veo8y6cB1WB3"
var beASuperHero_form				=	"https://goo.gl/forms/JhFt47ECwvrXhk7s1"
var battleOfBands_form				=	"https://goo.gl/forms/zjRzxi1E61MpX41r2"
var syncGeet_form					=	"https://goo.gl/forms/xtthrmxKScuUt2IO2"
var gaayak_form						=	"https://goo.gl/forms/5npAQuDhtvMr7f7N2"
var danceWars_form					=	"https://goo.gl/forms/l1oW82oAXz7EbvX82"
var drishyam_form					=	"https://goo.gl/forms/qEFGyr7GdTocq4yn2"
var eloquent_form					=	"https://goo.gl/forms/ChZTgDsQJVCbNei32"
var mayaSrishti_form				=	"https://goo.gl/forms/7zoGJ05COg4Hx61Y2"
var hocusFocus_form					=	"https://goo.gl/forms/vh6uWhiFKa2HMk923"
var impulse_form					=	"https://goo.gl/forms/FkNm0lFyfBvnvp7C3"
var maskMaking_form					=	"https://goo.gl/forms/elkLfy5SLMMQlsDh1"
var coupling_form					=	"https://goo.gl/forms/dqvIYcffHyRyT10A3"
var photON_form						=	"https://goo.gl/forms/vT9bBu1GM3aZKdA42"
var pictionary_form					=	"https://goo.gl/forms/h53FIdDM4a0SC1o62"
var blindFill_form					=	"https://goo.gl/forms/kGIZhfWJ2t7qHF9F2"
var blowBall_form					=	"https://goo.gl/forms/0nbwpDtwsZVeCPLJ3"
var balloonBash_form				=	"https://goo.gl/forms/sGzx7XAJPLWoGGn52"
var balloonExpress_form				=	"https://goo.gl/forms/V1PZ2sJZCOLEOH0p1"
var queenOfSheeba_form				=	"https://goo.gl/forms/6TCo2GQIbcgGou2l1"
var lawyerUp_form					=	"https://goo.gl/forms/BgVu4EomoGHhRmPC3"
var resonance_form					=	"https://goo.gl/forms/sITlg6qQPi9X3zEI2"
var dota_form						=	"https://goo.gl/forms/5XMYTmhFHcx9UZAF2"
var fifa_form						=	"https://goo.gl/forms/12ywIcl3v965N3U52"
var csgo_form						=	"https://goo.gl/forms/tEV3AkshCUQll0Bh1"
var miniMilitia_form				=	"https://goo.gl/forms/VgYqDWvQbchnZZK73"
var goLogicYourself_form			=	"https://goo.gl/forms/Qw2gb1RjfOqCRBWJ2"
var instyle_form					=	"https://goo.gl/forms/5srtF2rKn30dSJ0H3"
var paperPresentation_form			=	"https://goo.gl/forms/6kckmM3tpcMivP7v2"

/*CLUB CONTACTS START HERE*/
var roboticsClubContacts = 
	[
		<br/>,
		`Amrutha Manoharan : +91-9566186673 (evd15i020@iiitdm.ac.in)`,	<br/>,
		`Rohan Kumar Panda : +91-8249639668 (mfd15i013@iiitdm.ac.in)`,	<br/>,
		`Surendra Bharath : +91-9885782381 (mdm15b031@iiitdm.ac.in)`
	]

var edcClubContacts = 
	[
		<br/>,
		`Aditya Pharande : +91-9566219050 / +91-8605575742 (edm15b012@iiitdm.ac.in)`,	<br/>,
		`Sakshi Vastrad : +91-9962287327 / +91-8308751733 (evd15i008@iiitdm.ac.in)`,	<br/>,
		`Vyshak Nath C A : +91-9846527056 (evd15i016@iiitdm.ac.in)`
	]

var idcClubContacts = 
	[
		<br/>,
		`Rokesh P : +91-9487230333 (mfd15i011@iiitdm.ac.in)`,	<br/>,
		`Santhosh Kumar S R : +91-8300653276 (edm15b011@iiitdm.ac.in)`,	<br/>,
		`Vishnu Priya : +91-9790707348 (edm15b020@iiitdm.ac.in)`
	]

var zeroneClubContacts = 
	[
		<br/>,
		`Pranay Ankit Tiru : +91-8839084045 (ced15i001@iiitdm.ac.in)`,	<br/>,
		`Gowtham Munukutla : +91-9962315214 (ced15i019@iiitdm.ac.in)`,	<br/>,
		`Srinath : +91-7799644286 (ced15i033@iiitdm.ac.in)`,
	]

var epicClubContacts = 
	[
		<br/>,
		`Vedant Bassi : +91-9500094537 (ced15i013@iiitdm.ac.in)`,	<br/>,
		`Aditya Prakash : +91-9790729047 (ced15i025@iiitdm.ac.in)`,
	]

var quizClubContacts = 
	[
		<br/>,
		"Ajay Y : +91-9566181885 / +91-9110724750 (mdm15b022@iiitdm.ac.in)",
	]

var ingeniumClubContacts = 
	[
		<br/>,
		"Harichandana K : +91-8309280761 (mdm15b027@iiitdm.ac.in)",	<br/>,
		`Sai Uday Kiran Y : +91-8056924626 (mfd15i008@iiitdm.ac.in)`
	]

var artClubContacts = 
	[
		<br/>,
		`Rishikesh M Nandakumar : +91-9791077064 (mdm16b030@iiitdm.ac.in)`,	<br/>,
		`R Sampath : +91-8754556005 (edm15b036@iiitdm.ac.in)`
	]

var musicClubContacts = 
	[
		<br/>,
		`Ratnanjali Tiwari : +91-9176485934 (mpd15i020@iiitdm.ac.in)`,	<br/>,
		`Dharmesh Harsha : +91-9962279625 (esd15i018@iiitdm.ac.in)`,	<br/>,
		`Varshitha Bhavni : +91-9600680611 (evd15i001@iiitdm.ac.in)`
	]

var danceClubContacts = 
	[
		<br/>,
		`Manasa : +91-9566187833 (edm15b021@iiitdm.ac.in)`,	<br/>,
		`Tejasvi Raj : +91-9566180551 (coe15b026@iiitdm.ac.in)`
	]

var dramaClubContacts = 
	[
		<br/>,
		`Yutika Kulwe : +91-9920289853 (ced15i017@iiitdm.ac.in)`,	<br/>,
		`R Sowbarnika : +91-7200030983 (edm15b040@iiitdm.ac.in)`
	]

var funClubContacts = 
	[
		<br/>,
		`Sumuki Ravi : +91-9444581985 (mpd15i018@iiitdm.ac.in)`,	<br/>,
		`Manvitha : +91-9494497393 (edm15b041@iiitdm.ac.in)`
	]

var litClubContacts = 
	[
		<br/>,
		`Eashan Dash : +91-8056145489 (mpd15i017@iiitdm.ac.in)`,	<br/>,
		`Prathamesh : +91-9790730231 (ced15i029@iiitdm.ac.in)`,
	]

var gamingClubContacts = 
	[
		<br/>,
		`Sai Prasath : +91-9445437678 (mpd15i004@iiitdm.ac.in)`,	<br/>,
		`Vijay Kumar : +91-7373029033 (mpd15i012@iiitdm.ac.in)`,
	]

var photographyClubContacts = 
	[
		<br/>,
		`Vishal Nayak : +91-7382327624 (edm15b017@iiitdm.ac.in)`,	<br/>,
		`A Aravind : +91-7904787923 (mdm15b033@iiitdm.ac.in)`
	]

var instyleContacts = 
	[
		<br/>,
		`Lasya : +91-9962286832`,	<br/>,
		`Kaushik : +91-9959179715`
	]

var paperPresentationContacts = 
	[
		<br/>,
		`Shaarada Yamini : +91-9791131362`
	]

/*EVENT DETAILS START HERE*/
var chakravyuha = 
{
	regLink:chakravyuha_form,
	eventName:"Chakravyuha",
	data:
		[
			`Every day we sleep inside our home enjoying the safety provided by our Indian Soldiers.
			They give up family and friends and all their comforts for the security of our nation.
			This event showcases a few such conditions where they work but with an idea of a robot
			performing these actions rather than a human and thus ensuring life security of such
			border forces. Join us to form a chakravyuha around our nation.
			Participating teams need to submit a TDP on or before March 1st 2018.`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,	<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`Five`,
			<br/>,	<br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,	<br/>,
			<a href = "https://drive.google.com/open?id=1SyKdtaRP4D5B-OoE7T66-6lJSimgT-LG" target = "_blank"> Click to View </a>,
			<br/>,	<br/>
		],
	eventRules:
		[],
	judgingCriteria:
		[],
	faq:
		[
			<div style = {{fontSize:"30px"}}><b>FAQs:</b></div>,	<br/>,
			<b>Q.&emsp;Can we use readymade kits?</b>,
			<br/>,
			<b>A :&emsp;</b>, `No`,
			<br/>,
			<b>Q.&emsp;Will the organizers provide battery source?</b>,
			<br/>,
			<b>A :&emsp;</b>, `No. the participants need to bring their own.`,
			<br/>,
			<b>Q.&emsp;How many chances per team?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Only one. The organizers deserve the right to change the
						rules and take quick decisions under the certain
						unexpected situations.`,
			<br/>
		],
	club:"Robotics Club",
	contacts:roboticsClubContacts,
}

var warOfWatts = 
{
	regLink:warOfWatts_form,
	eventName:"War of Watts",
	data:
		[
			`In the midst of an ecstatic Fest lies an ancient battle ground, a place where several battles were fought, wars waged, 
			a place that will test your wits, a place that will test your limits and your command over the legions of components waiting to be 
			explored and combined to form deadly combinations. Do you have what it takes to enter the arena and establish your supremacy? Here Survival 
			is not an option. May the river of electrons come to your aid.`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,	<br/>,
			<u>No. of rounds</u>,` :`,<b>&emsp;</b>,`2`,
			<br/>,	<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,	<br/>,
			`1.`,<b>&emsp;</b>,`A team can have maximum 2 members,`,	<br/>,
			`2.`,<b>&emsp;</b>,`Once a team is formed , it cannot be changed,`,	<br/>,
			`3.`,<b>&emsp;</b>,`Quarrelling with judges will lead to disqualification.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[],
	faq:
		[
			<div style = {{fontSize:"30px"}}><b>FAQs:</b></div>,
			<br/>,
			<b>Q.&emsp;Why should I participate in WOW?</b>,
			<br/>,
			<b>A :&emsp;</b>, `WOW gives participants a platform to test their limits,and helps to improve ideation.`,
			<br/>,
			<b>Q.&emsp;Who can participate?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Students from any college & university with valid ID.`,
			<br/>,
			<b>Q.&emsp;Can a team have members from different colleges?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Yes,Students from different colleges can firm a team.`,
			<br/>
		],
	club:"EDC Club",
	contacts:edcClubContacts,
}

var tech4Help = 
{
	regLink:tech4Help_form,
	eventName:"Tech 4 Help",
	data:
		[
			`The enormous potential of technology and it’s huge capacity to impact millions of lives is yet to be explored completely. 
			Healthcare is one such domain which awaits the genius in you 
			to tap the unimaginable potentials of technology to serve the mankind better. 
			Your idea could be a breakthrough, which could eventually change a person’s life. 
			So tech 4 help is just the best platform for you to showcase your innovative ideas.`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,	<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`4`,<br/>,
			`Participants must report in the venue with the prototype. They have to showcase the working of the prototype.`,
			<br/>,	<br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,	<br/>,
			`Participants should make any electronics prototype for solving health related problem existing in society.`,
			<br/>,	<br/>
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules:</b></div>,
			<br/>,
			`1.`,<b>&emsp;</b>,`Once a team is formed , it cannot be changed.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Quarrelling with judges will lead to disqualification.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,
			<br/>,
			`Points will be awarded on the following basis:`,
			<br/>,
			<b>&emsp;</b>,`Idea - 30 points`,
			<br/>,
			<b>&emsp;</b>,`Working - 40 points`,
			<br/>,
			<b>&emsp;</b>,`Presentation - 30 points`,
			<br/>,	<br/>
		],
	faq:
		[
			<div style = {{fontSize:"30px"}}><b>FAQs:</b></div>,
			<br/>,
			<b>Q.&emsp;Why should I participate in tech4help?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Tech 4 help allows participants to work together to design and build prototypes that could help the society at large.`,
			<br/>,
			<b>Q.&emsp;Who can participate?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Students from any college& university with valid ID.`,
			<br/>,
			<b>Q.&emsp;Can a team have members from different colleges?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Yes,Students from different colleges can from a team.`,
			<br/>,	<br/>
		],
	club:"EDC Club",
	contacts:edcClubContacts,
}

var cleanTheSpace = 
{
	regLink:cleanTheSpace_form,
	eventName:"Clean The Space",
	data:
		[
			<b>"Think OUT of the BOX"</b>,<br/>,
			`is what people usually ask you to do and here is an opportunity for it !`,<br/>,
			`All you gotta do for this event is`,<br/>,
			<b><i>"Think out of die Erde".....</i></b>,<br/>,
			`Wanna know what it means ??..... check the description below`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,	<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`2 to 3`,<br/>,
			`Should Present the CAD model in front of the panel.`,
			<br/>,	<br/>,
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,	<br/>,
			`Space junks and wastes has started accumulating around our earth since 1957. And the quantity has reached the saturation point.`,<br/>,
			`Come up with a solution to recover the space junk and bring it back to earth for recycling and reusing .`,
			<br/>,	<br/>
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Things needed in powerpoint presentation:</b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`Explain in brief about design approach :`,<br/>,
			<b>&emsp;&emsp;</b>,`Different concepts developed during the process, source of inspiration, listing of existing products used for reference, etc.`,<br/>,
			`2.`,<b>&emsp;</b>,`Final concept :`,<br/>,
			<b>&emsp;&emsp;</b>,`Which concept you chose out of all the concepts mentioned above.`,<br/>,
			`3.`,<b>&emsp;</b>,`Attach CAD images and explain the working and significance of your model.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,
			<br/>,
			<b>&emsp;</b>,`Concept Idea`,<br/>,
			<b>&emsp;</b>,`Cost effectiveness of the product`,<br/>,
			<b>&emsp;</b>,`Aesthetics and design of the model`,
			<br/>,	<br/>
		],
	faq:
		[
			<div style = {{fontSize:"30px"}}><b>FAQs:</b></div>,
			<br/>,
			<b>Q.&emsp;Who can participate?</b>,
			<br/>,
			<b>A :&emsp;</b>, `All students with a valid identity card of their respective educational institutes 
			are eligible to participate in the competition. Students from the stream of Engineering, other research 
			fields pursuing Bachelors, Master’s Degree and PhD. candidates can participate.`,
			<br/>,
			<b>Q.&emsp;How to register?</b>,
			<br/>,
			<b>A :&emsp;</b>, `The Register Button below this event name.`,
			<br/>
		],
	club:"IDC Club",
	contacts:idcClubContacts,
}

var relayDesign = 
{
	regLink:relayDesign_form,
	eventName:"Relay Design",
	data:
		[
			`Look at something simple.`,<br/>,
			`Something you see every day.`,<br/>,
			`Something that no one ever thinks of redesigning, because it seems pointless to do so.`,<br/>,
			`Do you think you can make it look better?`,<br/>,
			`Then, here's your chance to improvise the design and bring out the best in you to serve the world better !`,<br/>,
			`In this event, you will be given a problem statement based on it you have to come up with a product to design/redesign using design software. 
			Show off the best of your imagination as you bring everyday items to a more stylish existence, not compromising on their function along the way.`,
			<br/>,	<br/>,
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>No. of Rounds</u>,` :`,<b>&emsp;</b>,`2`,<br/>,
			<u>Round 1</u>,` :`,<b>&emsp;</b>,`Based on the problem statement you have to come up with a conceptual design, with a rough sketch and brief explanation for your design. \
			Based on your conceptual design you will be selected for the 2nd round.(There will be some filtration of participants in 1st round)`,
			<br/>,
			<u>Round 2</u>,` :`,<b>&emsp;</b>,`In second round you have to make the model that you conceptualised in 1st round in a design software.`,
			<br/>,	<br/>,
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,	<br/>,
			`Problem statement will be given on the spot.`,
			<br/>,	<br/>
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`A team can have minimum 2 and maximum 3 members.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Computer for making the model in design software is provided by the college itself. Participants are not allowed to bring their laptops.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`In second round, each member of the team will be given the same computer in a time rotation for modelling your design.
			Each member have to continue with the modelling from where the previous member left and will be trying to complete the design.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`The time duration for event is 3 hours.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,
			<br/>,
			`Points will be awarded on the basis of conceptual design and 3D modelling`,
			<br/>,<br/>
		],
	faq:
		[
			<div style = {{fontSize:"30px"}}><b>FAQs:</b></div>,
			<br/>,
			<b>Q.&emsp;What is time rotation?</b>,
			<br/>,
			<b>A :&emsp;</b>, `For example if there are 3 members in a group , then each member will be given 60 mins separately but in two intervals.`,
			<br/>,
			<b>Q.&emsp;Which design software will be given?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Autodesk Inventor will be the design software for the event.`,
			<br/>,<br/>
		],
	club:"IDC Club",
	contacts:idcClubContacts,
}

var junkyardWars = 
{
	regLink:junkyardWars_form,
	eventName:"Junkyard Wars",
	data:
		[
			<div style = {{fontSize:"25px"}}><b>Let’s build big, bad GUNS! </b></div>,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,	<br/>,
			<u>No. of Rounds</u>,` :`,<b>&emsp;</b>,`2`,<br/>, <br/>,
			<u>Round 1</u>,` :`,<b>&emsp;</b>,<br/>,`An on spot round where teams will be asked to build a working model(related to projectiles), they'll be judged on basic physics,mechanics and engineering.`,
			<br/>, <br/>,
			<u>Round 2</u>,` :`,<b>&emsp;</b>,<u>A Mechathon round</u>,<br/>,
			`Teams need to build a launcher on the spot (materials should be brought by the participants).`,
			<br/>, <br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,	<br/>,
			`This projectile will be used to launch projectiles (ping pong balls) in the “enemy territory” .`,
			<br/>,	<br/>,
			<div>
				<img src={require("./icons/junkyard.png")} alt="Problem Blueprint" />
			</div>,
			<br/>,	<br/>
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,<u>Maximum team size</u>,` :`,<b>&emsp;</b>,`4`,<br/>,
			`2.`,<b>&emsp;</b>,<u>Ammo provided (ping pong balls)</u>,` :`,<b>&emsp;</b>,`10 per team`,<br/>,
			`3.`,<b>&emsp;</b>,`Each team has `,<u>3 lives.</u>,<br/>,
			`4.`,<b>&emsp;</b>,`Teams lose a life if projectile lands directly in their territory. Opposing team is awarded 10 points for each life lost and five points for indirect hits. However, no life is lost on indirect hit(basic dart system type points allocation).`,<br/>,
			`5.`,<b>&emsp;</b>,`Game ends when both teams exhaust their ammo/ one team loses all lives.`,<br/>,
			`6.`,<b>&emsp;</b>,`Winner is judged on the basis of points if both teams retain at least one life otherwise the team losing all lives loses.`,<br/>,
			`7.`,<b>&emsp;</b>,`Competition will be held on a knockout basis.`,<br/>,
			`8.`,<b>&emsp;</b>,`Organizers reserve the right to disqualify teams based on conduct.`,<br/>,
			`9.`,<b>&emsp;</b>,`Organizers decision is final under all circumstances.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Ingenium Club",
	contacts:ingeniumClubContacts,
}	

var triviosity = 
{
	regLink:triviosity_form,
	eventName:"Triviosity",
	data:
		[
			`Knowledge is power. This has never rung truer than in the quizzing world. It’s survival of the smartest, so you have got to bring your A	  game. If you know the answers, you hold all the cards, nothing else to it. Feel the adrenalin rushing through your veins!`,
			<br />,<br />
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br />,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`2 members per team`,
			<br/>,
			<u>No. of Rounds</u>,` :`,<b>&emsp;</b>,`2`,<b>&emsp;</b>,`(Prelims`,<b>&emsp;</b>,`&`,<b>&emsp;</b>,`Finals)`,
			<br/>,
			`The top few teams in the Prelims will be selected for Finals.`,
			<br/>,
			`Other rules will be briefed during the event.`, 
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br />,
			`1.`,<b>&emsp;</b>,`Any number of teams from an institution are allowed`,
			<br/>,
			`2.`,<b>&emsp;</b>,`A pre-registered event`,
			<br/>,
			`3.`,<b>&emsp;</b>,`Cross college teams are allowed`,
			<br/>,<br/>,
		],
	judgingCriteria:
		[],
	faq:
		[
			<b>Team Description Format (for filling registration form)?</b>,
			<br/>,
			`1.`,<b>&emsp;</b>,`Name of the team`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Names of individuals`,
			<br/>,
			`3.`,<b>&emsp;</b>,`Name of the college`,
			<br/>,<br />
		],
	club:"Quiz Club",
	contacts:quizClubContacts,
}

var appAThon = 
{
	regLink:appAThon_form,
	eventName:"App-A-Thon",
	data:
		[
			`App-A-Thon is an online Hackathon where you and your team have to build
			 web apps or native apps which make a difference based on the given themes.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br />,
			`1.`,<b>&emsp;</b>,<u>Team Size limit</u>,` :`,<b>&emsp;</b>,`3`,
			<br/>,
			`2.`,<b>&emsp;</b>,<u>Duration</u>,` :`,<b>&emsp;</b>,`1-week to submit your app.`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Zerone Club",
	contacts:zeroneClubContacts,
}

var codeAution = 
{
	regLink:codeAution_form,
	eventName:"Code Auction",
	data:
		[
			`The event is conducted to bring out the most optimized solution to a problem
			 statement with minimum amount of simple, neat code. The event puts pressure on 
			 the brain of the contestant to make his solution 
			 optimized to win. Everyone wants simple and elegant code. So Zerone club 
			 brings this out from it’s participants.`,<br/>,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br />,
			<u>No. of Rounds</u>,` :`,<b>&emsp;</b>,`2`,<br/>,
			<u>Round 1</u>,` :`,<b>&emsp;</b>,`An initial amount of virtual money or credits are given to each contestant before the event starts. 
			With each keyword used in their solution to the given problem statement, the credits decrease. 
			Credits are decreased for each keyword used in the code.`,<br/>,
			`For example: if-else constructs, looping keywords like while, for etc., switch, break, etc.`,<br/>,
			`The event is language independent and the credits are same for the constructs and do not vary by the keyword. 
			Other languages may have other keywords and credits are assigned based on the mechanism of the keyword.`,<br/>,
			<u>Round 2</u>,` :`,<b>&emsp;</b>,` Surprise Round.`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br />,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`2`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Zerone Club",
	contacts:zeroneClubContacts,
}

var samgathaBusinessChallenge = 
{
	regLink:samgathaBusinessChallenge_form,
	eventName:"Samgatha Business Challenege",
	data:
		[
			`The contestants are expected to come up with a small but viable business idea which will be of interest and can thrive in Samgatha’s Magical atmosphere.
			Each team will be allocated a stall around the Campus and are expected to make profits from their business ideas , by providing a service to the Samgatha Audience`,
			<br />,<br />
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>No. of Rounds</u>,` :`,<b>&emsp;</b>,`2`,<br/>,
			<u>Round 1:</u>,<b>&emsp;</b>,`Each team gets to present their ideas infront of a judging panel. And a handful of teams will be short listed for executing their ideas over a period of 2 days.`,
			<br/>,
			<u>Round 2:</u>,<b>&emsp;</b>,`Each team gets a Stall for themselves , and starts engaging with the Samgatha Audience.`,
			<br/>,	<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,<u>Max investment for each idea</u>,` :`,<b>&emsp;</b>,`Rs. 3000`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Each selected team is expected to participate for both the days.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`The product / service must be viable and tangible.`,
			<br/>,
			`4.`,<b>&emsp;</b>,<u>Team Size</u>,` :`,<b>&emsp;</b>,`2 to 4`,
			<br/>,
			`5.`,<b>&emsp;</b>,`The winner will be decided based on uniqueness, marketing strategy, profits, business acumen.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"EPIC Club",
	contacts:epicClubContacts,
}

var pitchPlease = 
{
	regLink:pitchPlease_form,
	eventName:"Pitch Please",
	data:
		[
			`Do you think you have a knack for business? Think you can find the solution to tricky business scenarios?`,
			<br/>,`Then come on, throw your creative ideas to us at "Pitch Please"`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`3 to 5 members.`,<br/>,
			`A business scenario will be given to the participants. They have to come up with a creative solution and then pitch the idea to us.`,
			<br/>,<br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,<br/>,
			`On the spot`, 
			<br/>,<br/>
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`Time limit to think for the creative solution is `,<u>30 minutes</u>,
			<br/>,
			`2.`,<b>&emsp;</b>,`Time limit to present the idea is `,<u>10 minutes</u>,
			<br/>,	<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"EPIC Club",
	contacts:epicClubContacts,
}

var goLogicYourself = 
{
	regLink:goLogicYourself_form,
	eventName:"Go Logic Yourself",
	data:
		[
			`Empty your mind from emotions and distractions, fill it up with logic and you're welcome 
			for Go Logic Yourself.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Event duration</u>,` :`,<b>&emsp;</b>,`2 hours`,<br/>,
			<u>Number of Questions</u>,` :`,<b>&emsp;</b>,`30`,<br/>,
			<u>Pre-requisites</u>,` :`,<b>&emsp;</b>,`Math, Logic, Reasoning ability and Basic programming skills`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`Only for the first years/freshers`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Zerone Club",
	contacts:zeroneClubContacts,
}

var beASuperHero = 
{
	regLink:beASuperHero_form,
	eventName:"Be A Superhero",
	data:
		[
			`Everyone once had a dream of becoming a superhero ,so here is your chance.
			Design the costume that you would wear if you want to become a superhero`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>No. of rounds</u>,` :`,<b>&emsp;</b>,`1 :`,<b>&emsp;</b>,`Detailed sketching`,
			<br/>,	<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules:</b></div>,
			<br/>,
			`1.`,<b>&emsp;</b>,`Participants can only use the materials provided.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Use of mobile phones is strictly prohibited.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Art Club",
	contacts:artClubContacts,
}

var battleOfBands = 
{
	regLink:battleOfBands_form,
	eventName:"Battle of Bands",
	data:
		[
			`The bands that infuses an irresistibly dance-able atmosphere bringing in an extremely coordinated effort of various instruments to produce some fascinating piece of art and getting that  rush of excitement through you body ! If you are carzzy about popular music like Jazz, pop or Rock, this is the place for you to be this Summer . So bring out the musical beast in you and make some noise !`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>No. of rounds</u>,` :`,<b>&emsp;</b>,` 2 (inclucive of online video screening)`,
			<br/>,
			<u>Band Size</u>,` :`,<b>&emsp;</b>,` 3 – 15 (At max 10 onstage)`,
			<br/>, <br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			`1.`,<b>&emsp;</b>,`Bands will be shortlisted from video entries.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`After registering online on the Samgatha website, a video of the band performing has to be mailed to `,
			<a href = "mailto:music.samgatha@gmail.com"> music.samgatha@gmail.com </a>,
			` by 6th March, 2018, 11:59 PM.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`Tightness of the band and original composition will be given extra weightage.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`Instruments provided- 5 piece drum kit.`,
			<br/>,
			`5.`,<b>&emsp;</b>,`The choice of genre is left to the band.`,
			<br/>,<br/>,
			<div style = {{fontSize:"30px"}}><b>Event Rules:</b></div>,
			<br/>,
			`1.`,<b>&emsp;</b>,`Bands are required to perform in any Indian languages (including English).`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Pure Classical performance is not allowed.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`College/School ID will be required for verification. Samgatha Group ID, which can be obtained at hospitality desk, is mandatory for all the qualified bands.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`Your  band  will  be  given  18  minutes  for  the  performance  on  stage  including setup time. Exceeding this limit will lead to negative points.`,
			<br/>,
			`5.`,<b>&emsp;</b>,`A person may play for only one band.`,
			<br/>,
			`6.`,<b>&emsp;</b>,`On-spot registrations will not be entertained.`,
			<br/>,
			`7.`,<b>&emsp;</b>,`Obscenity on stage is strictly prohibited.`,
			<br/>,
			`8.`,<b>&emsp;</b>,`Judges' decision will be final and binding and are not open to review.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Music Club",
	contacts:musicClubContacts,
}

var syncGeet = 
{
	regLink:syncGeet_form,
	eventName:"Sync-Geet",
	data:
		[
			`Music speaks what cannot be expressed, soothes the mind, gives it rest and heals the heart and makes it whole flows from heaven to the soul .
			So here’s your chance to hit the right note and let the musician in you touch thousands of soul and spread this form of magic to mesmerize the world around you !`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>No. of rounds</u>,` :`,<b>&emsp;</b>,` 2 (inclucive of online video screening)`,
			<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,` 2 - 6`,
			<br/>,
			`1.`,<b>&emsp;</b>,`Bands will be shortlisted from video entries.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`After registering online on the Samgatha website, a video of the band performing has to be mailed to `,
			<a href = "mailto:music.samgatha@gmail.com"> music.samgatha@gmail.com </a>,
			` by 6th March, 2018, 11:59 PM.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`Tightness of the band and original composition will be given extra weightage.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`Only Indian Languages (including English).`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`A person may play for only one band.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`At least one instrumentalist should be present. Acappella is not allowed.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`The band members have to be college students only.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`Fifteen minutes on stage inclusive of setup time will be provided. Exceeding the time limit will lead to negative points. (time may vary)`,
			<br/>,
			`5.`,<b>&emsp;</b>,`On-spot registrations will not be entertained.`,
			<br/>,
			`6.`,<b>&emsp;</b>,`Obscenity on stage will be strictly prohibited.`,
			<br/>,
			`7.`,<b>&emsp;</b>,`Pre-recorded sounds are not allowed.`,
			<br/>,
			`8.`,<b>&emsp;</b>,`No electric instruments are allowed, with the exception of a bass guitar and keyboards (only to be used with the Grand Piano patch).`,
			<br/>,
			`9.`,<b>&emsp;</b>,`No pedal, processors, effects will be allowed.`,
			<br/>,
			`10.`,<b>&emsp;</b>,`Judges' decision will be final and binding and are not open to review.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Music Club",
	contacts:musicClubContacts,
}

var gaayak = 
{
	regLink:gaayak_form,
	eventName:"Gaayak",
	data:
		[
			`If a thing isn't worth saying, Sing it !`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`Solo`,
			<br/>,
			<u>Time Limit</u>,` :`,<b>&emsp;</b>,`Maximum 4 minutes`,
			<br/>,	<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`College/School ID will be required for verification. Samgatha ID, which can be obtained at hospitality desk, is mandatory for all participants.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Participants can sing in English or Hindi or any other Indian Language.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`Participants may play an instrument themselves OR use ONLY ONE accompanist OR sing with a karaoke track OR sing without a karaoke track.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`No accompanists will be provided by Samgatha. The instrument must be brought by participant.`,
			<br/>,
			`5.`,<b>&emsp;</b>,`Karaoke track will not be provided; it must be brought by the participant (MP3 format in a pen drive).`,
			<br/>,
			`6.`,<b>&emsp;</b>,`Obscenity (at the discretion of judges) of any kind is not allowed and will lead to immediate disqualification.`,
			<br/>,
			`7.`,<b>&emsp;</b>,`Time limit should be strictly followed. Participants will be heavily penalized by judges for not doing so.`,
			<br/>,
			`8.`,<b>&emsp;</b>,`The decision of the organizers regarding the final line-up would be final.`,
			<br/>,
			`9.`,<b>&emsp;</b>,`Decision of the Judges will be final and binding.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,	<br/>,
			<b>&emsp;</b>,`Pitch`,	<br/>,
			<b>&emsp;</b>,`Rhythm`,	<br/>,
			<b>&emsp;</b>,`Voice modulation`,	<br/>,
			<b>&emsp;</b>,`Overall impact of the song.`,	<br/>,
			<br/>
		],
	faq:
		[],
	club:"Music Club",
	contacts:musicClubContacts,
}

var danceWars = 
{
	regLink:danceWars_form,
	eventName:"Dance Wars",
	data:
		[
			`Who says dance isn't magical? It's time to live your La La Land. Listen to that long forgotten whisper and feel the rise and fall of your breath. Break your shackles. Grab the moment and and cast that entrancing spell on us!`,
			<br/>, <br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`Group Event`,<br/>,
			<u>Time limit</u>,` :`,<b>&emsp;</b>,`8-10 minutes`,
			<br/>,
			<u>Size of the Crew</u>,` :`,<b>&emsp;</b>,`5 - 30`,
			<br/>,<br/>,
			<b>"Opportunity dances with those already on the dance floor. So come, grab it."</b>,
			<br/>, <br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`Choreography must be street dance styles (commercial choreography, hip-hop, locking, popping, wacking, dancehall, freestyle, krump, house, etc.)`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Clothing that is too short, suggestive or inappropriate for the age of the performer is not allowed.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`Judges decision will be final.`,
			<br/>, <br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`Each team will be evaluated by the judges on the following criteria:`,
			<br/>,
			<b>&emsp;</b>,`1.`,<b>&emsp;</b>,`Skills`,
			<br/>,
			<b>&emsp;</b>,`2.`,<b>&emsp;</b>,`Street presentation`,
			<br/>,
			<b>&emsp;</b>,`3.`,<b>&emsp;</b>,`Musicality`,
			<br/>,
			<b>&emsp;</b>,`4.`,<b>&emsp;</b>,`Performance`,
			<br/>,
			<b>&emsp;</b>,`5.`,<b>&emsp;</b>,`Creativity`,
			<br/>,
			`It is particularly important for the participants to stick with street dance
			styles.`,
			<br/>, <br/>
		],
	faq:
		[
			<div style = {{fontSize:"30px"}}><b>FAQs:</b></div>,
			<br/>,
			<b>Q.&emsp;How many prizes will be awarded?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Two`,
			<br/>,	<br/>
		],
	club:"Dance Club",
	contacts:danceClubContacts,
}

var drishyam = 
{
	regLink:drishyam_form,
	eventName:"Drishyam",
	data:
		[
			`Mass media is effective in every field of life by virtue of their audio-visual powers. 
			In addition to usage of cinema for entertainment purposes, its educational role has been realized .
			If you have a knack for getting straight to the point, short films are for you.
			From extremely crazy, comedic pieces to films that evoke thought and create awareness, 
			any idea is a brilliant idea if you know what to do with it. 
			Let the images on screen connect with the people’s mind and soul. 
			So, set up your cameras, light up the scene, and show us what you have got!`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,
			<br/>,
			`Participants have to send their entries(MP4 file) to drishyam.samgatha@gmail.com `,
			<a href = "mailto:drishyam.samgatha@gmail.com"> drishyam.samgatha@gmail.com </a>,
			`along with the screenshot of Rs250(registration fees) PAYTM paid to +917904787923 on or before 9-March-2018, 9AM .`,<br/>,
			<u>1 round only</u>,` , there will be screening of the films and the judgement will be done there.`,
			 <br/>,<br/>,
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,
			<br/>,
			`Free- themed short film contest.`, 
			<br/>,<br/>,
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,
			<br/>,
			`1.`,<b>&emsp;</b>,` Language: English, Hindi, Malayalam, Tamil, Telugu.`,
			<br/>,
			`2.`,<b>&emsp;</b>,` Subtitles are must.`,
			<br/>,
			`3.`,<b>&emsp;</b>,` Whichever films that have been produced after January 1st, 2017 are accepted.`,<br/>,
			<b>&emsp;&emsp;</b>,`Films produced before the above specified date are not accepted.`,
			<br/>,
			`4.`,<b>&emsp;</b>,` Films should be released in India.`,
			<br/>,
			`5.`,<b>&emsp;</b>,` Once the entry has been submitted it cannot be withdrawn from the fest during the event.`,
			<br/>,
			`6.`,<b>&emsp;</b>,`All entries should be submitted in the above mail-ID on or before 9-March- 2018, 9 AM.`,
			<br/>,
			`7.`,<b>&emsp;</b>,` Maximum size of the video shouldn’t exceed 700 MB.`,
			<br/>,
			`8.`,<b>&emsp;</b>,` The format of the video should be MP4.`,
			<br/>,
			`9.`,<b>&emsp;</b>,` Time limit is 15-20 minutes.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Photography Club",
	contacts:photographyClubContacts,
}

var eloquent = 
{
	regLink:eloquent_form,
	eventName:"Eloquent",
	data:
		[
			`If you love expressing your ideas and thoughts, then this is the place where you belong! 
			This is an amazing platform to showcase your speaking, thinking and improvisation skills. 
			This event will be a competitive speaking event which will make you think on your feet.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`This event will consist of some off the beaten path events like spin-a-yarn, shipwrecked, and lots more…`,<br/>,
			`First round details are given in the link below.`,<br/>,
			<div class="container interior">
				<a class="btn" href="#open-modal">Click for the Topics</a>,
			</div>,
			<div id="open-modal" class="modal-window">
				<div>
					<a href="#modal-close" title="Close" class="modal-close">Close</a>
					<h1>Topics for first round: </h1>
					<div>
						Coming Up Soon
						{/*
						<ol>
							<li>topic</li>
						</ol>*/}
					</div>
				</div>
			</div>,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`Individual event`,
			<br/>,<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`Evaluation for the overall event depends on the following critical parameters:-`,<br/>,
			<b>&emsp;</b>,`1.`,<b>&emsp;</b>,`Fluency in the English language`,<br/>,
			<b>&emsp;</b>,`2.`,<b>&emsp;</b>,`Organization & Clarity`,<br/>,
			<b>&emsp;</b>,`3.`,<b>&emsp;</b>,`Use of Argument `,<br/>,
			<b>&emsp;</b>,`4.`,<b>&emsp;</b>,`Improvisation`,<br/>,
			<b>&emsp;</b>,`5.`,<b>&emsp;</b>,`Presentation`,
			<br/>,	<br/>
		],
	faq:
		[],
	club:"LIT Club",
	contacts:litClubContacts,
}

var mayaSrishti = 
{
	regLink:mayaSrishti_form,
	eventName:"MayaSrishti",
	data:
		[
			`It's time to munch on some Chocolate frogs, drink a few butter beers, 
			wield the Elder wand and use the Quick quotes Quill to create magic on stage!`,<br/>,<br/>,
			`Welcome to MayaSrishti, the dramatics event of Samgatha 2018. 
			It will be the crème de la crème of the opportunities to come, 
			showcase the dramatist in you and create an exotic world on stage`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,
			<br/>,
			<div style = {{fontSize:"20px",color:"#00A896"}}><b>No Registration Fee</b></div>,
			<br/>,
			<div style = {{textAlign:"left"}}>
				<u>Round 1</u> :<b>&emsp;</b>Perform your prepared skit.
				<br/>
				<u>Round 2</u> :<b>&emsp;</b>Topics will be given on the spot to your team and you will have to 
				prepare a small play on the given topic within given time and perform the same.
			</div>,
			<br/>,	<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,
			<br/>,
			`1.`,<b>&emsp;</b>,<u>Team size</u>,` :`,<b>&emsp;</b>,`3 - 12 member group`,
			<br/>,
			`2.`,<b>&emsp;</b>,<u>Language</u>,` :`,<b>&emsp;</b>,`English, Hindi, Tamil, Telugu.`,
			<br/>,
			`3.`,<b>&emsp;</b>,<u>Time limit</u>,` :`,<b>&emsp;</b>,`For the first round, minimum 5 minutes and maximum 25 minutes. For the second round, it will be decided on the spot.`,
			<br/>,
			`4.`,<b>&emsp;</b>,<u>Type of play</u>,` :`,<b>&emsp;</b>,`All kind of drama from Mime and skit to dance drama are allowed.`, 
			<br/>,<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,
			<br/>,
			<b>&emsp;</b>,`1.`,<b>&emsp;</b>,`Uniqueness of the skit`,<br/>,
			<b>&emsp;</b>,`2.`,<b>&emsp;</b>,`Expressions/Acting skill`,<br/>,
			<b>&emsp;</b>,`3.`,<b>&emsp;</b>,`Involvement of all the actors(If the actor does justice to his/her assigned role)`,
			<br/>,	<br/>
		],
	faq:
		[],
	club:"Drama Club",
	contacts:dramaClubContacts,
}

var hocusFocus = 
{
	regLink:hocusFocus_form,
	eventName:"Hocus Focus",
	data:
		[
			`Do you think your photos showcase the world in a different light? 
			Can your pictures transcend emotions? Does your photo have an untold story waiting to be heard and explored ? 
			If so, here we give you an exotic chance to let the pixels do the talking. 
			We present to you the online photography contest. 
			So dig up the pile of photographs that live on your computer and 
			let them see the light and embrace the glory!`,<br/>,
			`It is a Theme based Photography event.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,
			<br/>,
			`Participants have to send their entries to `,
			<a href = "mailto:photography.samgatha2k18@gmail.com"> photography.samgatha2k18@gmail.com </a>,
			`(will be created shortly). `,<u>Only 1 round.</u>,
			<br/>,<br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,
			<br/>,
			`Theme - Magic `, 
			<br/>,<br/>
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,
			<br/>,
			`1.`,<b>&emsp;</b>,`1 picture which you’ve taken should be submitted on or before 12/03/2018, 9 pm.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`EDITING the original image is PROHIBITED. The entries will be disqualified in that case.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`WATERMARKS are NOT allowed. Watermarked pictures will lead to disqualification.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`This is an INDIVIDUAL event and is open to everyone.`,
			<br/>,
			`5.`,<b>&emsp;</b>,`Entries with offensive or inappropriate content or those which promote any specific brand will be disqualified. `,
			<br/>,
			`6.`,<b>&emsp;</b>,`The photographs submitted must be the genuine, original work of the participant.`,
			<br/>,
			`7.`,<b>&emsp;</b>,`Any device can be used to capture the photo.`,
			<br/>,
			`8.`,<b>&emsp;</b>,`The copyrights of the pictures will stay with the photographer. However, Samgatha has the right to use the pictures for publicity or other activities. `,
			<br/>,
			`9.`,<b>&emsp;</b>,`Under any circumstance, entries once submitted cannot be taken back for modifications. `,
			<br/>,
			`10.`,<b>&emsp;</b>,`Requests for extending the deadline will not be entertained at any cost. `,
			<br/>,
			`11.`,<b>&emsp;</b>,`The judges’ decision is final. No discussion or correspondence will be entertained regarding the same. `,
			<br/>,
			`12.`,<b>&emsp;</b>,`The judges and the organizers reserve the right to cancel or vary the position awarded in case of any discrepancies. `,
			<br/>,
			`13.`,<b>&emsp;</b>,`Participants are not allowed to tag people on the photographs when it is uploaded on Facebook by the organizers. `,
			<br/>,
			`14.`,<b>&emsp;</b>,`Participants are to submit details of the device used along with the photographs. `,
			<br/>,
			`15.`,<b>&emsp;</b>,`Candids and event photos are accepted. Any selfie or group photos wouldn’t be accepted.`,
			<br/>,
			`16.`,<b>&emsp;</b>,`The image should be only in JPEG format.`,
			<br/>,
			`17.`,<b>&emsp;</b>,`Minimum 5MP. The EXIF data should remain intact.`,
			<br/>,
			`18.`,<b>&emsp;</b>,`The file size shouldn’t exceed 30 MB.`,
			<br/>,
			`19.`,<b>&emsp;</b>,`No restriction on type of device used.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Photography Club",
	contacts:photographyClubContacts,
}

var impulse = 
{
	regLink:impulse_form,
	eventName:"Impulse",
	data:
		[
			`Dancing with the feet is one thing, but dancing with the heart is another. So come, dance to live, to breathe, to be free, to be YOU.`,
			<br/>,	<br/>

		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`Solo Dancing`,<br/>,
			<u>Time limit</u>,` :`,<b>&emsp;</b>,`3 - 5 minutes`,
			<br/>,
			`There will be two rounds in which the second round will be a surprise round.`,
			<br/>,<br/>,
			<b>"If you stumble, make it part of the dance :P"</b>,
			<br/>, <br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`Clothing that is too short, suggestive or inappropriate for the age of the performer is not allowed.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Judges decision will be final.`,
			<br/>, <br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`Each team will be evaluated by the judges on the following criteria:`,
			<br/>,
			<b>&emsp;</b>,`1.`,<b>&emsp;</b>,`Skills`,
			<br/>,
			<b>&emsp;</b>,`2.`,<b>&emsp;</b>,`Creativity`,
			<br/>,
			<b>&emsp;</b>,`3.`,<b>&emsp;</b>,`Musicality`,
			<br/>,
			<b>&emsp;</b>,`4.`,<b>&emsp;</b>,`Performance`,
			<br/>, <br/>
		],
	faq:
		[
			<div style = {{fontSize:"30px"}}><b>FAQs:</b></div>,
			<br/>,
			<b>Q.&emsp;How many prizes will be awarded?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Three`,
			<br/>,	<br/>
		],
	club:"Dance Club",
	contacts:danceClubContacts,
}

var maskMaking = 
{
	regLink:maskMaking_form,
	eventName:"Mask Making",
	data:
		[
			`Art speaks where words are unable to explain !`,<br/>,
			`Art is not what you see but what you make others see !`,<br/>,
			`So this magical season, bring out the artist in you to spell your magic through your designing
			and thinking skills to create creative and interesting masks !`,<br/>,
			`Let's give ourselves the much needed mask makeover and get into a character of our zone !`,
			<br/>,<br/>,
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,
			<br/>,
			<u>No. of rounds</u>,` :`,<b>&emsp;</b>,` 1`,
			<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,` maximum 3 members`,
			<br/>,
			`Participants will be given the materials for making the masks and
			they have to come up with creative ideas for their masks.`,
			<br/>,<br/>,
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules:</b></div>,
			<br/>,
			`1.`,<b>&emsp;</b>,`Participants can only use the materials provided.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Use of mobile phones is strictly prohibited.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`15 teams can participate and if the registered team doesn’t come on time, their slot be given to the next in line.`,
			<br/>,<br/>,
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Art Club",
	contacts:artClubContacts,
}

var coupling = 
{
	regLink:coupling_form,
	eventName:"Coupling",
	data:
		[
			`Dance like its a conversation between two people. So, take your chances, dance more dances.`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team size</u>,` :`,<b>&emsp;</b>,`2 (any combination allowed)`,<br/>,
			<u>Time limit</u>,` :`,<b>&emsp;</b>,`3 - 5 minutes`,
			<br/>,<br/>,
			<b>"Limitations only exist if you let them :P"</b>,
			<br/>, <br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`Clothing that is too short, suggestive or inappropriate for the age of the performer is not allowed.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Judges decision will be final.`,
			<br/>, <br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`Each team will be evaluated by the judges on the following criteria:`,
			<br/>,
			<b>&emsp;</b>,`1.`,<b>&emsp;</b>,`Skills`,
			<br/>,
			<b>&emsp;</b>,`2.`,<b>&emsp;</b>,`Creativity`,
			<br/>,
			<b>&emsp;</b>,`3.`,<b>&emsp;</b>,`Musicality`,
			<br/>,
			<b>&emsp;</b>,`4.`,<b>&emsp;</b>,`Performance`,
			<br/>, <br/>
		],
	faq:
		[
			<div style = {{fontSize:"30px"}}><b>FAQs:</b></div>,
			<br/>,
			<b>Q.&emsp;Is classical allowed for duet?</b>,
			<br/>,
			<b>A :&emsp;</b>, `No. But you're free to do semi-classical.`,
			<br/>,
			<b>Q.&emsp;How many prizes will be awarded?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Two`,
			<br/>,	<br/>
		],
	club:"Dance Club",
	contacts:danceClubContacts,
}

var photON = 
{
	regLink:photON_form,
	eventName:"PhotON",
	data:
		[
			`It is an OPEN THEMED PHOTOGRAPHY CONTEST.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,
			<br/>,
			`Participants have to send their entries to `,
			<a href = "mailto:photography.samgatha2k18@gmail.com"> photography.samgatha2k18@gmail.com </a>,
			`(will be created shortly). `,<u>Only 1 round.</u>,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,
			<br/>,
			`1.`,<b>&emsp;</b>,`2 pictures you’ve taken should be submitted on or before 12/03/2018, 9 pm.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`EDITING the original image is PROHIBITED. The entries will be disqualified in that case.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`WATERMARKS are NOT allowed. Watermarked pictures will lead to disqualification.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`This is an INDIVIDUAL event and is open to everyone.`,
			<br/>,
			`5.`,<b>&emsp;</b>,`Entries with offensive or inappropriate content or those which promote any specific brand will be disqualified. `,
			<br/>,
			`6.`,<b>&emsp;</b>,`The photographs submitted must be the genuine, original work of the participant.`,
			<br/>,
			`7.`,<b>&emsp;</b>,`Any device can be used to capture the photo.`,
			<br/>,
			`8.`,<b>&emsp;</b>,`The copyrights of the pictures will stay with the photographer. However, Samgatha has the right to use the pictures for publicity or other activities. `,
			<br/>,
			`9.`,<b>&emsp;</b>,`Under any circumstance, entries once submitted cannot be taken back for modifications. `,
			<br/>,
			`10.`,<b>&emsp;</b>,`Requests for extending the deadline will not be entertained at any cost. `,
			<br/>,
			`11.`,<b>&emsp;</b>,`The judges’ decision is final. No discussion or correspondence will be entertained regarding the same. `,
			<br/>,
			`12.`,<b>&emsp;</b>,`The judges and the organizers reserve the right to cancel or vary the position awarded in case of any discrepancies. `,
			<br/>,
			`13.`,<b>&emsp;</b>,`Participants are not allowed to tag people on the photographs when it is uploaded on Facebook by the organizers. `,
			<br/>,
			`14.`,<b>&emsp;</b>,`Participants are to submit details of the device used along with the photographs. `,
			<br/>,
			`15.`,<b>&emsp;</b>,`Candids and event photos are accepted. Any selfie or group photos wouldn’t be accepted.`,
			<br/>,
			`16.`,<b>&emsp;</b>,`The image should be only in JPEG format.`,
			<br/>,
			`17.`,<b>&emsp;</b>,`Minimum 5MP. The EXIF data should remain intact.`,
			<br/>,
			`18.`,<b>&emsp;</b>,`The file size shouldn’t exceed 30 MB.`,
			<br/>,
			`19.`,<b>&emsp;</b>,`No restriction on type of device used.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Photography Club",
	contacts:photographyClubContacts,
}

var pictionary = 
{
	regLink:pictionary_form,
	eventName:"Pictionary",
	data:
		[
			`Bring out your hidden art in picturizing the given word.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`2`,
			<br/>,
			`A person chooses one card out of deck of pictionary cards and tries to express the word
			which is printed on the card. Teammates should try to guess the word, which the drawing
			is intended to represent.`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`Pictures cannot contain any numbers or letters. Verbal clues and lip movements are not \
			 entertained.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`Speed and accuracy. The team which guesses the word first will be awarded more points.`,
			<br/>,<br/>
		],
	faq:
		[],
	club:"Fun Club",
	contacts:funClubContacts,
}

var blindFill = 
{
	regLink:blindFill_form,
	eventName:"Blind Fill",
	data:
		[
			`FASTEST FILLER FIRST!!!!`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`5`,
			<br/>,
			`All the members of the team are blindfolded and should sit in a row.
			One should transfer water through a mug into the mug of the person behind him.
			This process should be continued till the last person. And behind the last person
			a bucket is placed which is to be filled.`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`The team which fills more amount of water in the bucket within given time limit will
			be awarded more points.`,
			<br/>,<br/>
		],
	faq:
		[],
	club:"Fun Club",
	contacts:funClubContacts,
}

var blowBall = 
{
	regLink:blowBall_form,
	eventName:"Blow Ball",
	data:
		[
			`Show us the stamina that you have got in blowing air and your ability to control the
			 power that you have got.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`5 EMPTY Glasses will be placed in a horizontal row on a table with a ball in the first
			 one. Another glass will be provided which should be utilised to bring the water from a
			 bucket that is placed at a distance of 5-7 Meters.`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>How to Play? </b></div>,<br/>,
			`The player should fill the glass with the ball first and blow the ball to the next glass.
			 If the ball has been successfully placed in the adjacent glass, then the player should go
			 and fetch another glass of water and continue the process. If the player fails in transporting
			 the ball at any point of the game, he/she should take the ball and place it in the first glass
			 and should blow the ball till it reaches an empty glass. once the ball reaches the empty glass
			 he/she can continue playing normally.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`Player who makes the ball reach the last glass in the least time wins.`,
			<br/>,<br/>
		],
	faq:
		[],
	club:"Fun Club",
	contacts:funClubContacts,
}

var balloonBash = 
{
	regLink:balloonBash_form,
	eventName:"Balloon Bash",
	data:
		[
			`Bring out the dominance in you!!!. Show us your agility.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`A balloon will be tied to the foot of each participant. He/she will be made to stand with other 
			 participants on a stage. A participant should burst others’ balloons by stamping and defend their
			 own for 5 minutes. Points will be awarded for bursting a balloon.`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`The player whose balloon sustains till the end will be considered as the winner. If more than one
			 player remains till the end, the player scoring more points will be considered as the winner.`,
			<br/>,<br/>
		],
	faq:
		[],
	club:"Fun Club",
	contacts:funClubContacts,
}

var balloonExpress = 
{
	regLink:balloonExpress_form,
	eventName:"Balloon Express",
	data:
		[
			`You guys have an extraordinary peer group?? Come show us your unity.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`5 members`,<br/>,
			`A team of 5 members should form a human chain with a balloon in between every two persons.
			 The balloon should be placed in such a way that, no hands should be touching the balloon. They should
			 start from a given start point and reach the finish line with a obstacle course in between without 
			 losing their balloons.`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`One should not touch the balloons with hands.`,<br/>,
			`2.`,<b>&emsp;</b>,`Loosing or bursting of a balloon is treated as a failure and three such failures 
				are accepted.The fourth failure leads to the elimination of the team.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`The team reaching the finish line first will be considered as the winner.`,
			<br/>,<br/>
		],
	faq:
		[],
	club:"Fun Club",
	contacts:funClubContacts,
}

var queenOfSheeba = 
{
	regLink:queenOfSheeba_form,
	eventName:"Queen of Sheeba",
	data:
		[
			`You think you can complete the given task! Come face the unknown challenges.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`5 members`,<br/>,
			`Various tasks will be given to all the teams(For instance bring Headphones of pink colour).
			 Whichever team completes the maximum number of tasks in the given time will be declared as the winner.`,
			<br/>,<br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,<br/>,
			`On the Spot`,
			<br/>,<br/>
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`All the items that are insisted to be brought should be brought physically during the time of 
			evaluation of points.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`Judging will be based on the number of tasks that the group has completed successfully. 
			And there may be more points for the difficult tasks.`,
			<br/>,<br/>
		],
	faq:
		[],
	club:"Fun Club",
	contacts:funClubContacts,
}

var lawyerUp = 
{
	regLink:lawyerUp_form,
	eventName:"Lawyer Up",
	data:
		[
			`A great blend of usual debating events and a hint of some unique IIITDM-ness. 
			Come, Debate, and conquer this tricky game of words, expressions and ideas with a bit of "Sugar and Spice" as you like it.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`Individual event`,
			<br/>,
			`The event will be spanned by 2 rounds.`,<br/>,
			<br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,<br/>,
			`Case studies will be given to individuals on the spot.`, 
			<br/>,<br/>
		],
	eventRules:
		[],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`Evaluation for the overall event depends on the following critical parameters:-`,<br/>,
			`1.`,<b>&emsp;</b>,`Fluency in the English language`,<br/>,
			`2.`,<b>&emsp;</b>,`Organization & Clarity`,<br/>,
			`3.`,<b>&emsp;</b>,`Use of Argument `,<br/>,
			`4.`,<b>&emsp;</b>,`Use of cross-examination and rebuttal:`,<br/>,
			`5.`,<b>&emsp;</b>,`Presentation`,
			<br/>,<br/>
		],
	faq:
		[],
	club:"LIT Club",
	contacts:litClubContacts,
}

var resonance = 
{
	regLink:resonance_form,
	eventName:"Resonance",
	data:
		[
			`Rediscover yourself  by expressing with the power of the written word. Creativity and 
			imagination are more important than grammar or spelling. Write your heart out.`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`Individual event`,
			 <br/>,<br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Problem Statement: </b></div>,<br/>,
			`Topics will be given on the spot `,
			<br/>,<br/>
		],
	eventRules:
		[],
	judgingCriteria:
		[],
	faq:
		[],
	club:"LIT Club",
	contacts:litClubContacts,
}

var dota = 
{
	regLink:dota_form,
	eventName:"DOTA",
	data:
		[
			`Magic with DOTA 2`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`5 gamers`,<br/>,
			<u>Entry Fee</u>,` :`,<b>&emsp;</b>,`Rs. 500 per team`,<br/>,
			<u>Mode</u>,` :`,<b>&emsp;</b>,`Captain’s Draft`,<br/>,
			<u>Patch</u>,` :`,<b>&emsp;</b>,`Latest Patch as of the match date.`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`Since this is an amateur tournament, players with Ancient 5 or below can only participate.`,<br/>,
			`2.`,<b>&emsp;</b>,`This is an online tournament which happens in the span of a week. The format till semi-finals will be single elimination and followed by double elimination and all the matches are B01, Finals will be played as B03`,<br/>,
			`3.`,<b>&emsp;</b>,`Teams who have registered must be present in the lobby 5 min before the start of the match, if failed to do so, the team will be eliminated.`,<br/>,
			`4.`,<b>&emsp;</b>,`Smurf accounts will not be entertained and if a player is found using a smurf account, the whole team gets eliminated from the tournament.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Gaming Club",
	contacts:gamingClubContacts,
}

var fifa = 
{
	regLink:fifa_form,
	eventName:"FIFA",
	data:
		[
			`Score some goals!`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Entry Fee</u>,` :`,<b>&emsp;</b>,`Rs. 100 per person`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`All the matches till Semi finals are B01. Semi finals are B02 legs and Finals are again B01. In case of any draw, the winner will be decided based on Penalty Shoot out.`,<br/>,
			`2.`,<b>&emsp;</b>,`Participants are requested to bring the Joysticks on your own.`,<br/>,
			`3.`,<b>&emsp;</b>,`The format will either be in groups followed by eliminators or direct eliminators depending upon the participants.`,<br/>,
			`4.`,<b>&emsp;</b>,`The duration of each matches are decided on spot.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Gaming Club",
	contacts:gamingClubContacts,
}

var csgo = 
{
	regLink:csgo_form,
	eventName:"CS:GO",
	data:
		[
			`Lets get in ON for some Strikes!`,
			<br/>,<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`5 gamers`,<br/>,
			<u>Entry Fee</u>,` :`,<b>&emsp;</b>,`Rs. 500 per team`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`This is a LAN tournament which happens during SAMGATHA . The format till semi finals will be single elimination and followed by double elimination and all the matches are B01.`,<br/>,
			`2.`,<b>&emsp;</b>,`Participants are requested to bring their laptops and other equipment for their own convenience and to save time during the tournament. If anything is required contact the co-ordinators.`,<br/>,
			`3.`,<b>&emsp;</b>,`No Cheats will be entertained, if found the whole team gets eliminated.`,<br/>,
			`4.`,<b>&emsp;</b>,`Teams who have registered must be present 15 min before the start of the match, for setting up the PCs.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Gaming Club",
	contacts:gamingClubContacts,
}

var miniMilitia = 
{
	regLink:miniMilitia_form,
	eventName:"Mini Militia",
	data:
		[],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			<u>Team Size</u>,` :`,<b>&emsp;</b>,`3 gamers`,<br/>,
			<u>Entry Fee</u>,` :`,<b>&emsp;</b>,`Rs. 150 per team`,
			<br/>,<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`The format of the tournament is either group stage or direct elimination depending upon the number of participants.`,<br/>,
			`2.`,<b>&emsp;</b>,`Cheats are not allowed. If found so the entire team gets eliminated.`,<br/>,
			`3.`,<b>&emsp;</b>,`All the matches are B01`,<br/>,
			`4.`,<b>&emsp;</b>,`The duration of the matches are decided on spot.`,
			<br/>,<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"Gaming Club",
	contacts:gamingClubContacts,
}

var instyle = 
{
	regLink:instyle_form,
	eventName:"Instyle",
	data:
		[
			`Fashion is a way of expressing who you are without having to speak. So, Welcome to this fashion extravaganza to explore your fashion sense and persona.`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`This is a solo event comprising of three rounds and a finale`,<br/>,<br/>,
			<u>First round : MR & MISS FASHION ICON</u>,<br/>,<b>&emsp;</b>,`Fit into your latest fashion trends and own the ramp with your unique style and charisma.`,<br/>,<br/>,
			<u>Second round :  MR & MISS WITTY</u>,<br/>,<b>&emsp;</b>,`Beauty is nothing without brains. If you think you have got the wits and guts to be out there ,this is the best chance to prove yourself.`,<br/>,<br/>,
			<u>Third round : MR & MISS TALENTED</u>,<br/>,<b>&emsp;</b>,`Everyone has got their own special talent. Grab your chance to showcase all your talent in just a minute!
			(talent – art/music/dance/mimicry/acting etc..,) `,<br/>,<br/>,
			<u>AND THE FINALE</u>,
			<br/>, <br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`The contestants are free to choose their own costumes.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Use of props like bags, scarves, etc… is permitted; however use of fire, water and any item that could damage the stage or hinder the performance of other teams will lead to disqualification.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`For the talent round: The participants should bring their own audio track to be played. Other specific requirements for this round like musical instruments, etc. should be brought by the participant.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`The registration fee for this event is – Rs 100`,
			<br/>, <br/>
		],
	judgingCriteria:
		[
			<div style = {{fontSize:"30px"}}><b>Judging Criteria: </b></div>,<br/>,
			`The participants will be judged on their:`,
			<br/>,
			<b>&emsp;</b>,`1.`,<b>&emsp;</b>,`Spontaneity`,
			<br/>,
			<b>&emsp;</b>,`2.`,<b>&emsp;</b>,`Style`,
			<br/>,
			<b>&emsp;</b>,`3.`,<b>&emsp;</b>,`Presentation`,
			<br/>,
			<b>&emsp;</b>,`4.`,<b>&emsp;</b>,`Confidence`,
			<br/>, <br/>
		],
	faq:
		[],
	club:"",
	contacts:instyleContacts,
}

var paperPresentation = 
{
	regLink:paperPresentation_form,
	eventName:"Technical Paper Presentation",
	data:
		[
			`It is the time to unleash the technical fundamental knowledge and the talent within you. All you need to do is to
			fuel your brain to ideate the ideas that never existed. The stage has been set to listen to your words. Speak
			clearly, if you speak at all. Carve every word before you let it fall. Take up the challenge to drive home your
			genuine ideas and understanding. Who knows this could be your first step to fame and glory.`,<br/>,
			<br/>,
			`"Let your mind write the paper!!! Not your hand!!! "`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<div style = {{fontSize:"30px"}}><b>Event Format: </b></div>,<br/>,
			`This event consists of `,<u>2 rounds</u>,`.`,<br/>,<br/>,
			<u>Round 1 (Short listing the finalists)</u>,` :`,<br/>,<b>&emsp;</b>,
			`The abstracts sent by the participants are filtered and worthy participants are shortlisted for the final
			round. The finalists will be intimated about the same at the earliest.`,<br/>,<br/>,
			<u>Round 2 (Paper presentation)</u>,` :`,<br/>,<b>&emsp;</b>,
			`The selected participants will be presenting on their topics. Each team will be given 10 minutes for the
			presentation. Teams are expected to present using PPT.`,
			<br/>, <br/>
		],
	problemStatement:
		[
			<div style = {{fontSize:"30px"}}><b>Topics: </b></div>,<br/>,
			<a href = "https://drive.google.com/file/d/1hdhhKtjK5S8dOav4tJnnqaTX86ONrATg/view" target = "_blank"> For Topics read this </a>,
			<br/>,	<br/>
		],
	eventRules:
		[
			<div style = {{fontSize:"30px"}}><b>Event Rules: </b></div>,<br/>,
			`1.`,<b>&emsp;</b>,`Every member participating in the event should have a valid SAMGATHA ID`,<br/>,
			`2.`,<b>&emsp;</b>,`Usage of electronic gadgets is strictly prohibited`,<br/>,
			`3.`,<b>&emsp;</b>,`Maximum number of participants in a team is 3`,<br/>,
			`4.`,<b>&emsp;</b>,`Participants are expected to submit the abstract before March 3, 2018​, for preliminary evaluation`,<br/>,
			`5.`,<b>&emsp;</b>,`Papers should strictly adhere to the IEEE format​ and can be submitted on the day of the event`,<br/>,
			`6.`,<b>&emsp;</b>,`Abstract should not exceed 250 words​ and Paper should not exceed 10 pages`,<br/>,
			`7.`,<b>&emsp;</b>,`The mail should be sent to `,
			<a href = "mailto:samgatha.scifair@gmail.com"> samgatha.scifair@gmail.com </a>,
			` and should contain the name of the paper​ as the subject of the email`,<br/>,
			`8.`,<b>&emsp;</b>,`Persons from different institutions can be a part of the same team. However, one person may not be a part of multiple teams for the same event`,<br/>,
			`9.`,<b>&emsp;</b>,`The mail with submissions should contain:`,
				<ul>
					<li>&emsp;Title- theme of the paper</li>
					<li>&emsp;Name of the participants</li>
					<li>&emsp;Mobile Number of the participants</li>
					<li>&emsp;College name and district</li>
					<li>&emsp;E-mail id of the participants</li>
				</ul>,
			`10.`,<b>&emsp;</b>,`After you have submitted the abstract, a panel of judges will go through your material and if you are shortlisted to give the presentation, you will be notified through mail​.`,<br/>,
			`11.`,<b>&emsp;</b>,`The decision of judges will be final and no arguments or appeal will be entertained`,<br/>,
			`12.`,<b>&emsp;</b>,`If any team is found to be performing any sort of malpractice, that particular team will be rusticated from the event`,
			<br/>, <br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"",
	contacts:paperPresentationContacts,
}

class App extends Component {
 constructor(){
 super();
 this.state = {width: window.innerWidth };
 }
 
 componentWillMount(){
 window.addEventListener('resize', this.handleWindowSizeChange);
 }
 componentWillUnmount(){
 window.addEventListener('resize', this.handleWindowSizeChange);
 }
 componentDidMount(){
	auth.onAuthStateChanged(authUser => {
		authUser
		  ? this.setState(() => ({ authUser }))
		  : this.setState(() => ({ authUser: null }));
		});
 const ele = document.getElementById('ipl-progress-indicator')
 if(ele){
	setTimeout(() => {
	ele.classList.add('available')
	setTimeout(() => {
	 ele.outerHTML = ''
	}, 2000)
	}, 1000)
 }
 }
 handleWindowSizeChange = () => {
 this.setState({ width: window.innerWidth });
 };
 render() {
 const { width } = this.state;
 const isMobile = width <= 545;
 /*if(isMobile){
	return(
	<div className="container">
	 <BrowserRouter>
	 <div>
		<Navbar />
		<Route exact={true} path="/" component={MobileHome} />
		<Route path="/events" component={MobileEvents} />
		<Route path="/workshops" component={MobileWorkshops} />
		<Route path="/sponsors" component={MobileSpons} />
		<Route path="/contacts" component={MobileContactUs} />
		<Route path="/socialcause" component={MobileSocialCause} />
		<Route path="/techeventslist" component={MobileTechEventsList} />
		<Route path="/culteventslist" component={MobileCultEventsList } /> 
		<Route path="/chakravyuha" component={() => (<MobileEventOne event={chakravyuha} />)} />
		<Route path="/warOfWatts" component={() => (<MobileEventOne event={warOfWatts} />)} />
		<Route path="/tech4Help" component={() => (<MobileEventOne event={tech4Help} />)} />
		<Route path="/cleanTheSpace" component={() => (<MobileEventOne event={cleanTheSpace} />)} />
		<Route path="/relayDesign" component={() => (<MobileEventOne event={relayDesign} />)} />
		<Route path="/junkyardWars" component={() => (<MobileEventOne event={junkyardWars} />)} />
		<Route path="/triviosity" component={() => (<MobileEventOne event={triviosity} />)} />
		<Route path="/appAThon" component={() => (<MobileEventOne event={appAThon} />)} />
		<Route path="/codeAution" component={() => (<MobileEventOne event={codeAution} />)} />
		<Route path="/goLogicYourself" component={() => (<MobileEventOne event={goLogicYourself} />)} />
		<Route path="/samgathaBusinessChallenge" component={() => (<MobileEventOne event={samgathaBusinessChallenge} />)} />
		<Route path="/pitchPlease" component={() => (<MobileEventOne event={pitchPlease} />)} />
		<Route path="/beASuperHero" component={() => (<MobileEventOne event={beASuperHero} />)} />
		<Route path="/battleOfBands" component={() => (<MobileEventOne event={battleOfBands} />)} />
		<Route path="/syncGeet" component={() => (<MobileEventOne event={syncGeet} />)} />
		<Route path="/gaayak" component={() => (<MobileEventOne event={gaayak} />)} />
		<Route path="/danceWars" component={() => (<MobileEventOne event={danceWars} />)} />
		<Route path="/drishyam" component={() => (<MobileEventOne event={drishyam} />)} />
		<Route path="/eloquent" component={() => (<MobileEventOne event={eloquent} />)} />
		<Route path="/dota" component={() => (<MobileEventOne event={dota} />)} />
		<Route path="/fifa" component={() => (<MobileEventOne event={fifa} />)} />
		<Route path="/csgo" component={() => (<MobileEventOne event={csgo} />)} />
		<Route path="/miniMilitia" component={() => (<MobileEventOne event={miniMilitia} />)} />
		<Route path="/mayaSrishti" component={() => (<MobileEventOne event={mayaSrishti} />)} />
		<Route path="/hocusFocus" component={() => (<MobileEventOne event={hocusFocus} />)} />
		<Route path="/impulse" component={() => (<MobileEventOne event={impulse} />)} />
		<Route path="/maskMaking" component={() => (<MobileEventOne event={maskMaking} />)} />
		<Route path="/coupling" component={() => (<MobileEventOne event={coupling} />)} />
		<Route path="/photON" component={() => (<MobileEventOne event={photON} />)} />
		<Route path="/pictionary" component={() => (<MobileEventOne event={pictionary} />)} />
		<Route path="/blindFill" component={() => (<MobileEventOne event={blindFill} />)} />
		<Route path="/blowBall" component={() => (<MobileEventOne event={blowBall} />)} />
		<Route path="/balloonBash" component={() => (<MobileEventOne event={balloonBash} />)} />
		<Route path="/balloonExpress" component={() => (<MobileEventOne event={balloonExpress} />)} />
		<Route path="/queenOfSheeba" component={() => (<MobileEventOne event={queenOfSheeba} />)} />
		<Route path="/lawyerUp" component={() => (<MobileEventOne event={lawyerUp} />)} />
		<Route path="/resonance" component={() => (<MobileEventOne event={resonance} />)} />
		<MobileFooter />
	 </div>
	 </BrowserRouter>
	</div>
	);
 }*/
	return (
	<div style={{height:'100%'}}>
	 <BrowserRouter>
	 <div style={{height:'100%'}}>
		<Header authUser={this.state.authUser}/>
		<Route exact={true} path="/" component={Home} />
		<Route path="/events" component={Events} />
		<Route path="/workshops" component={Workshop} />
		<Route path="/sponsors" component={Sponsors} />
		<Route path="/contacts" component={ContactUs} />
		<Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
		<Route path="/done" component={RegistrationDone} />
		<Route path="/WorkshopOne" component={WorkshopOneMin} />
		<Route path="/socialcause" component={SocialCause} />
		<Route path="/techeventslist" component={TechEventsList} />
		<Route path="/culteventslist" component={CultEventsList} />
		<Route path="/chakravyuha" component={() => (<EventOne event={chakravyuha} />)} />
		<Route path="/warOfWatts" component={() => (<EventOne event={warOfWatts} />)} />
		<Route path="/tech4Help" component={() => (<EventOne event={tech4Help} />)} />
		<Route path="/cleanTheSpace" component={() => (<EventOne event={cleanTheSpace} />)} />
		<Route path="/relayDesign" component={() => (<EventOne event={relayDesign} />)} />
		<Route path="/junkyardWars" component={() => (<EventOne event={junkyardWars} />)} />
		<Route path="/triviosity" component={() => (<EventOne event={triviosity} />)} />
		<Route path="/appAThon" component={() => (<EventOne event={appAThon} />)} />
		<Route path="/codeAution" component={() => (<EventOne event={codeAution} />)} />
		<Route path="/goLogicYourself" component={() => (<EventOne event={goLogicYourself} />)} />
		<Route path="/samgathaBusinessChallenge" component={() => (<EventOne event={samgathaBusinessChallenge} />)} />
		<Route path="/pitchPlease" component={() => (<EventOne event={pitchPlease} />)} />
		<Route path="/beASuperHero" component={() => (<EventOne event={beASuperHero} />)} />
		<Route path="/battleOfBands" component={() => (<EventOne event={battleOfBands} />)} />
		<Route path="/syncGeet" component={() => (<EventOne event={syncGeet} />)} />
		<Route path="/gaayak" component={() => (<EventOne event={gaayak} />)} />
		<Route path="/danceWars" component={() => (<EventOne event={danceWars} />)} />
		<Route path="/drishyam" component={() => (<EventOne event={drishyam} />)} />
		<Route path="/eloquent" component={() => (<EventOne event={eloquent} />)} />
		<Route path="/mayaSrishti" component={() => (<EventOne event={mayaSrishti} />)} />
		<Route path="/hocusFocus" component={() => (<EventOne event={hocusFocus} />)} />
		<Route path="/impulse" component={() => (<EventOne event={impulse} />)} />
		<Route path="/maskMaking" component={() => (<EventOne event={maskMaking} />)} />
		<Route path="/coupling" component={() => (<EventOne event={coupling} />)} />
		<Route path="/photON" component={() => (<EventOne event={photON} />)} />
		<Route path="/dota" component={() => (<EventOne event={dota} />)} />
		<Route path="/fifa" component={() => (<EventOne event={fifa} />)} />
		<Route path="/csgo" component={() => (<EventOne event={csgo} />)} />
		<Route path="/miniMilitia" component={() => (<EventOne event={miniMilitia} />)} />
		<Route path="/pictionary" component={() => (<EventOne event={pictionary} />)} />
		<Route path="/blindFill" component={() => (<EventOne event={blindFill} />)} />
		<Route path="/blowBall" component={() => (<EventOne event={blowBall} />)} />
		<Route path="/balloonBash" component={() => (<EventOne event={balloonBash} />)} />
		<Route path="/balloonExpress" component={() => (<EventOne event={balloonExpress} />)} />
		<Route path="/queenOfSheeba" component={() => (<EventOne event={queenOfSheeba} />)} />
		<Route path="/lawyerUp" component={() => (<EventOne event={lawyerUp} />)} />
		<Route path="/resonance" component={() => (<EventOne event={resonance} />)} />
		<Route path="/instyle" component={() => (<EventOne event={instyle} />)} />
		<Route path="/paperPresentation" component={() => (<EventOne event={paperPresentation} />)} />
		<Footer />
	 </div>
	 </BrowserRouter>
	</div>
	);
 }
}

export default App;
