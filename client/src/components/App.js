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


var roboticsClubContacts = 
	[
		`Amrutha Manoharan : +91-9566186673 (evd15i020@iiitdm.ac.in)`,	<br/>,
		`Rohan Kumar Panda : +91-8249639668 (mfd15i013@iiitdm.ac.in)`,	<br/>,
		`Surendra Bharath : +91-9885782381 (mdm15b031@iiitdm.ac.in)`
	]

var edcClubContacts = 
	[
		`Aditya Pharande : +91-9566219050 / +91-8605575742 (edm15b012@iiitdm.ac.in)`,	<br/>,
		`Sakshi Vastrad : +91-9962287327 / +91-8308751733 (evd15i008@iiitdm.ac.in)`,	<br/>,
		`Vyshak Nath C A : +91-9846527056 (evd15i016@iiitdm.ac.in)`
	]

var idcClubContacts = 
	[
		`Rokesh P : +91-9487230333 (mfd15i011@iiitdm.ac.in)`,	<br/>,
		`Santhosh Kumar S R : +91-8300653276 (edm15b011@iiitdm.ac.in)`,	<br/>,
		`Vishnu Priya : +91-9790707348 (edm15b020@iiitdm.ac.in)`
	]

var zeroneClubContacts = 
	[
		`Pranay Ankit Tiru : +91-8839084045 (ced15i001@iiitdm.ac.in)`,	<br/>,
		`Gowtham Munukutla : +91-9962315214 (ced15i019@iiitdm.ac.in)`,	<br/>,
		`Srinath : +91-7799644286 (ced15i033@iiitdm.ac.in)`,
	]

var epicClubContacts = 
	[
		`Vedant Bassi : +91-9500094537 (ced15i013@iiitdm.ac.in)`,	<br/>,
		`Aditya Prakash : +91-9790729047 (ced15i025@iiitdm.ac.in)`,
	]

var quizClubContacts = 
	[
		"Ajay Y : +91-9566181885 / +91-9110724750 (mdm15b022@iiitdm.ac.in)",
	]

var ingeniumClubContacts = 
	[
		"Harichandana K : +91-8309280761 (mdm15b027@iiitdm.ac.in)",	<br/>,
		`Sai Uday Kiran Y : +91-8056924626 (mfd15i008@iiitdm.ac.in)`
	]

var artClubContacts = 
	[
		`Rishikesh M Nandakumar : +91-9791077064 (rishikeshmnandakumar@gmail.com)`,	<br/>,
		`R Sampath : +91-8754556005 ()`
	]

var musicClubContacts = 
	[
		`Ratnanjali Tiwari : +91-9176485934 (mpd15i020@iiitdm.ac.in)`,	<br/>,
		`Dharmesh Harsha : +91-9962279625 (esd15i018@iiitdm.ac.in)`,	<br/>,
		`Varshitha Bhavni : +91-9600680611 (evd15i001@iiitdm.ac.in)`
	]

var danceClubContacts = 
	[
		`Manasa : +91-9566187833 (edm15b021@iiitdm.ac.in)`,	<br/>,
		`Tejasvi Raj : +91-9566180551 (coe15b026@iiitdm.ac.in)`
	]

var dramaClubContacts = 
	[
		`Yutika Kulwe: +91-9920289853 (ced15i017@iiitdm.ac.in)`,	<br/>,
		`R Sowbarnika: +91-7200030983 (edm15b040@iiitdm.ac.in)`
	]

var funClubContacts = 
	[
		`Sumuki Ravi: +91-9444581985 (mpd15i018@iiitdm.ac.in)`,	<br/>,
		`Manvitha: +91-9494497393 (edm15b041@iiitdm.ac.in)`
	]

var litClubContacts = 
	[
		`Eashan Dash : +91-8056145489 (mpd15i017@iiitdm.ac.in)`,	<br/>,
		`Prathamesh : +91-9790730231 (ced15i029@iiitdm.ac.in)`,
	]

var gamingClubContacts = 
	[
		`Sai Prasath : +91-9445437678 (mpd15i004@iiitdm.ac.in)`,	<br/>,
		`Vijay Kumar : +91-7373029033 (mpd15i012@iiitdm.ac.in)`,
	]

var photographyClubContacts = 
	[
		`Vishal Nayak: +91-7382327624 (edm15b017@iiitdm.ac.in)`,	<br/>,
		`A Aravind: +91-7904787923 (mdm15b033@iiitdm.ac.in)`
	]

var chakravyuha = 
{
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
		[],
	problemStatement:
		[
			<a href = "./Problem_Statements/SAMGATHA_CHAKRAVYUHA.pdf" target = "_blank"> Problem Statement </a>
		],
	eventRules:
		[],
	judgingCriteria:
		[],
	faq:
		[
			<b>FAQ</b>,	<br/>,
			<b>Q.&emsp;How many members in a group?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Five`,
			<br/>,
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
	eventName:"War of Watts",
	data:
		[
			`In the midst of an ecstatic Fest lies an ancient battle ground, a place where several battles were fought, wars waged, 
			a place that will test your wits, a place that will test your limits and your command over the legions of components waiting to be 
			explored and combined to form deadly combinations. Do you have what it takes to enter the arena and establish your supremacy? Here Survival 
			is not an option. May the river of electrons come to your aid.`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<b>Event Format: </b>,	<br/>,
			`No. of rounds: 2`,
			<br/>,	<br/>
		],
	problemStatement:
		[],
	eventRules:
		[
			<b>Event Rules: </b>,	<br/>,
			`A team can have maximum 2 members, \
			once a team is formed , it cannot be changed, \
			Quarrelling with judges will lead to disqualification.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[],
	faq:
		[
			<b>FAQ</b>,
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
	eventName:"Tech 4 Help",
	data:
		[
			`The enormous potential of technology and it’s huge capacity  to impact millions of lives is yet to be explored completely.\
			Healthcare is one such domain which awaits the genius in you 
			to tap the unimaginable potentials of technology to serve the mankind better.\
			Your idea could be a breakthrough, which could eventually change a person’s life.\
			So tech 4 help is just the best platform for you  to showcase your innovative ideas.`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<b>Event Format: </b>,	<br/>,
			`Participants must report in the venue with the prototype. They have to showcase the working of the prototype.`,
			<br/>,	<br/>
		],
	problemStatement:
		[
			<b>Problem Statement: </b>,	<br/>,
			`Participants should make any electronics prototype for solving health related problem existing in society.`,
			<br/>,	<br/>
		],
	eventRules:
		[
			<b>Event Rules:</b>,
			<br/>,
			`1.`,<b>&emsp;</b>,`A team can have maximum 4 members. Once a team is formed , it cannot be changed.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Quarrelling with judges will lead to disqualification.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[
			<b>Judging Criteria: </b>,
			`Points will be awarded on the following basis:`,
			<br/>,
			`Idea - 30 points`,
			<br/>,
			`Working - 40 points`,
			<br/>,
			`Presentation - 30 points`,
			<br/>,	<br/>
		],
	faq:
		[
			<b>FAQs:</b>,
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
  if(isMobile){
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
		{/*<Route path="/designception" component={() => (<MobileEventOne event={designception} />)} />
		<Route path="/relayDesign" component={() => (<MobileEventOne event={relayDesign} />)} />
		<Route path="/battleZone" component={() => (<MobileEventOne event={battleZone} />)} />
		<Route path="/quiz" component={() => (<MobileEventOne event={quiz} />)} />
		<Route path="/appAThon" component={() => (<MobileEventOne event={appAThon} />)} />
		<Route path="/codeAution" component={() => (<MobileEventOne event={codeAution} />)} />
		<Route path="/samgathaBusinessChallenge" component={() => (<MobileEventOne event={samgathaBusinessChallenge} />)} />
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
		<Route path="/duetDance" component={() => (<MobileEventOne event={duetDance} />)} />
		<Route path="/photON" component={() => (<MobileEventOne event={photON} />)} />
		<Route path="/pictionary" component={() => (<MobileEventOne event={pictionary} />)} />
		<Route path="/blindFill" component={() => (<MobileEventOne event={blindFill} />)} />
		<Route path="/blowBall" component={() => (<MobileEventOne event={blowBall} />)} />
		<Route path="/balloonBash" component={() => (<MobileEventOne event={balloonBash} />)} />
		<Route path="/balloonExpress" component={() => (<MobileEventOne event={balloonExpress} />)} />
		<Route path="/queenOfSheeba" component={() => (<MobileEventOne event={queenOfSheeba} />)} />
		<Route path="/lawyerUp" component={() => (<MobileEventOne event={lawyerUp} />)} />
		<Route path="/resonance" component={() => (<MobileEventOne event={resonance} />)} />*/}
		<MobileFooter />
	 </div>
	 </BrowserRouter>
	</div>
	);
  }
	return (
	<div style={{height:'100%'}}>
	 <BrowserRouter>
	 <div style={{height:'100%'}}>
		<Header />
		<Route exact={true} path="/" component={Home} />
		<Route path="/events" component={Events} />
		<Route path="/workshops" component={Workshop} />
		<Route path="/sponsors" component={Sponsors} />
		<Route path="/contacts" component={ContactUs} />
		<Route path="/WorkshopOne" component={WorkshopOneMin} />
		<Route path="/socialcause" component={SocialCause} />
		<Route path="/techeventslist" component={TechEventsList} />
		<Route path="/culteventslist" component={CultEventsList} />
		{/*<Route path="/chakravyuha" component={() => (<EventOne event={chakravyuha} />)} />
		<Route path="/warOfWatts" component={() => (<EventOne event={warOfWatts} />)} />
		<Route path="/tech4Help" component={() => (<EventOne event={tech4Help} />)} />
		<Route path="/designception" component={() => (<EventOne event={designception} />)} />
		<Route path="/relayDesign" component={() => (<EventOne event={relayDesign} />)} />
		<Route path="/battleZone" component={() => (<EventOne event={battleZone} />)} />
		<Route path="/quiz" component={() => (<EventOne event={quiz} />)} />
		<Route path="/appAThon" component={() => (<EventOne event={appAThon} />)} />
		<Route path="/codeAution" component={() => (<EventOne event={codeAution} />)} />
		<Route path="/samgathaBusinessChallenge" component={() => (<EventOne event={samgathaBusinessChallenge} />)} />
		<Route path="/beASuperHero" component={() => (<EventOne event={beASuperHero} />)} />
		<Route path="/battleOfBands" component={() => (<EventOne event={battleOfBands} />)} />
		<Route path="/syncGeet" component={() => (<EventOne event={syncGeet} />)} />
		<Route path="/gaayak" component={() => (<EventOne event={gaayak} />)} />
		<Route path="/danceWars" component={() => (<EventOne event={danceWars} />)} />
		<Route path="/drishyam" component={() => (<EventOne event={drishyam} />)} />
		<Route path="/eloquent" component={() => (<EventOne event={eloquent} />)} />
		<Route path="/dota" component={() => (<EventOne event={dota} />)} />
		<Route path="/fifa" component={() => (<EventOne event={fifa} />)} />
		<Route path="/csgo" component={() => (<EventOne event={csgo} />)} />
		<Route path="/miniMilitia" component={() => (<EventOne event={miniMilitia} />)} />
		<Route path="/mayaSrishti" component={() => (<EventOne event={mayaSrishti} />)} />
		<Route path="/hocusFocus" component={() => (<EventOne event={hocusFocus} />)} />
		<Route path="/impulse" component={() => (<EventOne event={impulse} />)} />
		<Route path="/maskMaking" component={() => (<EventOne event={maskMaking} />)} />
		<Route path="/duetDance" component={() => (<EventOne event={duetDance} />)} />
		<Route path="/photON" component={() => (<EventOne event={photON} />)} />
		<Route path="/pictionary" component={() => (<EventOne event={pictionary} />)} />
		<Route path="/blindFill" component={() => (<EventOne event={blindFill} />)} />
		<Route path="/blowBall" component={() => (<EventOne event={blowBall} />)} />
		<Route path="/balloonBash" component={() => (<EventOne event={balloonBash} />)} />
		<Route path="/balloonExpress" component={() => (<EventOne event={balloonExpress} />)} />
		<Route path="/queenOfSheeba" component={() => (<EventOne event={queenOfSheeba} />)} />
		<Route path="/lawyerUp" component={() => (<EventOne event={lawyerUp} />)} />
		<Route path="/resonance" component={() => (<EventOne event={resonance} />)} />*/}
		<Footer />
	 </div>
	 </BrowserRouter>
	</div>
	);
  }
}

export default App;
