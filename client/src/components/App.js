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
		`Rishikesh M Nandakumar : +91-9791077064 (rishikeshmnandakumar@gmail.com)`,	<br/>,
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
		`Yutika Kulwe: +91-9920289853 (ced15i017@iiitdm.ac.in)`,	<br/>,
		`R Sowbarnika: +91-7200030983 (edm15b040@iiitdm.ac.in)`
	]

var funClubContacts = 
	[
		<br/>,
		`Sumuki Ravi: +91-9444581985 (mpd15i018@iiitdm.ac.in)`,	<br/>,
		`Manvitha: +91-9494497393 (edm15b041@iiitdm.ac.in)`
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
			<b>Problem Statement: </b>,	<br/>,<a href = "./Problem_Statements/SAMGATHA_CHAKRAVYUHA.pdf" target = "_blank"> Click to View </a>,
			<br/>,	<br/>
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
			`1.`,<b>&emsp;</b>,`A team can have maximum 2 members,`,	<br/>,
			`2.`,<b>&emsp;</b>,`Once a team is formed , it cannot be changed,`,	<br/>,
			`3.`,<b>&emsp;</b>,`Quarrelling with judges will lead to disqualification.`,
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
			`The enormous potential of technology and it’s huge capacity  to impact millions of lives is yet to be explored completely. 
			Healthcare is one such domain which awaits the genius in you 
			to tap the unimaginable potentials of technology to serve the mankind better. 
			Your idea could be a breakthrough, which could eventually change a person’s life. 
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
			<br/>,
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

var designception = 
{
	eventName:"Designception",
	data:
		[
			`It has always been about the`,<br/>,
			`OUT of the BOX thinking`,<br/>,
			`This event is all about thinking Out of the Box for a problem that is`,<br/>,
			`OUT of this WORLD.`,<br/>,	<br/>,
			`Participants are supposed to come up with a CAD model and a power-point 
			presentation with detailed description and present it to the panel members.`,
			<br/>,	<br/>
		],
	eventFormat:
		[
			<b>Event Format: </b>,	<br/>,
			`Team size : 2 to 3.`,<br/>,
			`Should Present the CAD model in front of the panel.`,
			<br/>,	<br/>,
			`Things needed in powerpoint presentation:`,<br/>,
			`1.`,<b>&emsp;</b>,`Explain in brief about design approach :`,<br/>,
			<b>&emsp;&emsp;</b>,`Different concepts developed during the process, source of inspiration, listing of existing products used for reference, etc.`,<br/>,
			`2.`,<b>&emsp;</b>,`Final concept :`,<br/>,
			<b>&emsp;&emsp;</b>,`Which concept you chose out of all the concepts mentioned above.`,<br/>,
			`3.`,<b>&emsp;</b>,`Attach CAD images and explain the working and significance of your model.`,
			<br/>,	<br/>
		],
	problemStatement:
		[
			<b>Problem Statement: </b>,	<br/>,
			`Space junks and wastes has started accumulating around our earth since 1957. And the quantity has reached the saturation point.`,<br/>,
			`Come up with a solution to recover the space junk and bring it back to earth for recycling and reusing .`,
			<br/>,	<br/>
		],
	eventRules:
		[],
	judgingCriteria:
		[
			<b>Judging Criteria: </b>,
			<br/>,
			`Concept Idea`,<br/>,
			`Cost effectiveness of the product`,<br/>,
			`Aesthetics and design of the model`,
			<br/>,	<br/>
		],
	faq:
		[
			<b>FAQ</b>,
			<br/>,
			<b>Q.&emsp;Who can participate?</b>,
			<br/>,
			<b>A :&emsp;</b>, `All students with a valid identity card of their respective educational institutes 
			are eligible to participate in the competition. Students from the stream of Engineering, other research 
			fields pursuing Bachelors, Master’s Degree and PhD. candidates can participate.`,
			<br/>,
			<b>Q.&emsp;How to register?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Samgatha registration webpage.`,
			<br/>
		],
	club:"IDC Club",
	contacts:idcClubContacts,
}

var relayDesign = 
{
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
			<b>Event Format: </b>,<br/>,
			`No. of Rounds: 2`,
			<br/>,
			<u>Round 1:</u>,<b>&emsp;</b>,`Based on the problem statement you have to come up with a conceptual design, with a rough sketch  and brief explanation for your design. \
			Based on your conceptual design you will be selected for the  2nd round.(There will be some filtration of participants in 1st round)`,
			<br/>,
			<u>Round 2:</u>,<b>&emsp;</b>,`In second round you have to make the model that you conceptualised in 1st round in a design software.`,
			<br/>,	<br/>,
		],
	problemStatement:
		[
			<b>Problem Statement: </b>,	<br/>,
			`Problem statement will be given on the spot.`,
			<br/>,	<br/>
		],
	eventRules:
		[
			<b>Event Rules: </b>,<br/>,
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
			<b>Judging Criteria: </b>,
			<br/>,
			`Points will be awarded on the basis of conceptual design and 3D modelling`,
			<br/>,<br/>,
		],
	faq:
		[
			<b>FAQs:</b>,
			<br/>,
			<b>Q.&emsp;What is time rotation?</b>,
			<br/>,
			<b>A :&emsp;</b>, `For example if there are  3 members in a group , then each member will be given 60 mins separately but in two intervals.`,
			<br/>,
			<b>Q.&emsp;Which design software will be given?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Autodesk Inventor will be the design software for the event.`,
			<br/>,<br/>
		],
	club:"IDC Club",
	contacts:idcClubContacts,
}

var battleZone = 
{
	eventName:"Battle Zone",
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
		[
			<b>Problem Statement: </b>,	<br/>,
			`Participants should make any electronics prototype for solving health related problem existing in society.`,
			<br/>,	<br/>
		],
	eventRules:
		[
			<b>Event Rules: </b>,<br/>,
			`1.`,<b>&emsp;</b>,`A team can have maximum 2 members,`,<br />,
			`2.`,<b>&emsp;</b>,`Once a team is formed , it cannot be changed`,<br />,
			`3.`,<b>&emsp;</b>,`Quarrelling with judges will lead to disqualification.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[
			<b>Judging Criteria: </b>,
			<br/>,
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
			<b>FAQ</b>,
			<br/>,
			<b>Q.&emsp;Why should I participate in War of Watts?</b>,
			<br/>,
			<b>A :&emsp;</b>, `War of Watts gives participants a platform to test their limits,and helps to improve ideation.`,
			<br/>,
			<b>Q.&emsp;Who can participate?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Students from any college & university with valid ID.`,
			<br/>,
			<b>Q.&emsp;Can a team have members from different colleges?</b>,
			<br/>,
			<b>A :&emsp;</b>, `Yes,Students from different colleges can firm a team.`,
			<br/>,<br />
		],
	club:"Ingenium Club",
	contacts:ingeniumClubContacts,
}	

var quiz = 
{
	eventName:"Quiz",
	data:
		[
			`Knowledge is power. This has never rung truer than in the quizzing world. It’s survival of the smartest, so you have got to bring your A	   game. If you know the answers, you hold all the cards, nothing else to it. Feel the adrenalin rushing through your veins!`,<br />,<br />
		],
	eventFormat:
		[
			<b>Event Format: </b>,<br />,
			`A team event of 2 members per team.`,
			<br/>,
			`Played in two rounds.`,
			<br/>, 
			`Prelims and Finals.`,
			<br/>,
			`The top few teams in the Prelims will be selected for Finals.`,
			<br/>,
			`Other rules will be briefed during the event.`, 
			<br/>,<br/>,
		],
	problemStatement:
		[],
	eventRules:
		[
			<b>Event Rules: </b>,<br />,
			`1)`,<b>&emsp;</b>,`A team can consist of maximum 2 members`,
			<br/>,
			`2)`,<b>&emsp;</b>,`Any number of teams from an institution are allowed`,
			<br/>,
			`3)`,<b>&emsp;</b>,`A pre-registered event`,
			<br/>,
			`4)`,<b>&emsp;</b>,`Cross college teams are allowed`,
			<br/>,<br/>,
			<b>Team Description Format</b>,
			<br/>,
			`1.`,<b>&emsp;</b>,`Name of the team`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Names of individuals`,
			<br/>,
			`3.`,<b>&emsp;</b>,`Name of the college`,
			<br/>,<br />
		],
	judgingCriteria:
		[
			<b>Judging Criteria: </b>,<br />,
			`Each team will be evaluated by the judges on the following criteria:`,
			<br/>,
			`Skills, Street Presentation, Musicality, Performance, Creativity. It is
			particularly important for the participants to stick with street dance
			styles.`,
			<br/>,<br/>,
		],
	faq:
		[],
	club:"Quiz Club",
	contacts:quizClubContacts,
}

var appAThon = 
{
	eventName:"App-A-Thon",
	data:
		[
			`App-A-Thon is an online Hackathon where you and your team have to build
			 web apps or native apps which make a difference based on the given themes.`,
			<br/>,<br/>,
		],
	eventFormat:
		[
			<b>Event Format: </b>,<br />,
			`1)`,<b>&emsp;</b>,`It is team event. Team size limit: 3`,
			<br/>,
			`2)`,<b>&emsp;</b>,`Duration: 1-week to submit your app.`,
			 <br/>,<br/>,
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
	eventName:"Code Auction",
	data:
		[
			`The event is conducted to bring out the most optimized solution to a problem
			 statement with minimum amount of simple, neat code.`, <br/>,
			 `The event puts pressure on the brain of the contestant to make his solution 
			 optimized to win. `,<br/>,
			 `Everyone wants simple and elegant code. So Zerone club 
			 brings this out from it’s participants.`,<br/>,
			<br/>,<br/>,
		],
	eventFormat:
		[
			<b>Event Format: </b>,<br />,
			`An initial amount of virtual money or credits are given to each contestant before the event starts. 
			With each keyword used in their solution to the given problem statement, the credits decrease. 
			Credits are decreased for each keyword used in the code.
			For example: if-else constructs, looping keywords like while, for etc., switch, break, etc.
			The event is language independent and the credits are same for the constructs and do not vary by the keyword. 
			Other languages may have other keywords and credits are assigned based on the mechanism the keyboard. All this is round 1.
			Round 2 will be thought over soon.`,
	 		<br/>,<br/>,
		],
	problemStatement:
		[],
	eventRules:
		[
			<b>Event Rules: </b>,<br />,
			`Maximum two members per team`,
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
	eventName:"Samgatha Business Challenege",
	data:
		[
			`The contestants are expected to come up with a small but viable business idea which will be of interest and can thrive in Samgatha’s Magical atmosphere.
			Each team will be allocated a stall around the Campus and are expected to make profits from their business ideas , by providing a service to the Samgatha Audience`,
			<br />,<br />,
		],
	eventFormat:
		[
			<b>Event Format: </b>,<br/>,
			<u>Round 1:</u>,<b>&emsp;</b>,`Each team gets to present their ideas infront of a judging panel. And a handful of teams will be short listed for executing their ideas over a period of 2 days.`,
			<br/>,
			<u>Round 2:</u>,<b>&emsp;</b>,`Each team gets a Stall for themselves , and starts engaging with the Samgatha Audience.`,
			<br/>,	<br/>,
		],
	problemStatement:
		[],
	eventRules:
		[
			<b>Event Rules: </b>,<br/>,
			`1.`,<b>&emsp;</b>,`Max investment for each idea : Rs. 3000`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Each selected team is expected to participate for both the days.`,
			<br/>,
			`3.`,<b>&emsp;</b>,`The product / service must be viable and tangible.`,
			<br/>,
			`4.`,<b>&emsp;</b>,`The Team size can range from 2 to 4`,
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
	eventName:"Pitch Please",
	data:
		[
			`Do you think you have a knack for business? Think you can find the solution to tricky business scenarios?`,
			<br/>,`Then come on, throw your creative ideas to us at "Pitch Please"`,
			<br/>,<br/>,
		],
	eventFormat:
		[
			<b>Event Format: </b>,<br/>,
			<u>Team Size:</u>,<b>&emsp;</b>,` 3 to 5 members.`,<br/>,
			`A business scenario will be given to the participants. They have to come up with a creative solution and then pitch the idea to us.`,
			<br/>,<br/>,
		],
	problemStatement:
		[
			<b>Problem Statement: </b>,<br/>,
			`On the spot`, 
			<br/>,<br/>,
		],
	eventRules:
		[
			<b>Event Rules: </b>,<br/>,
			`1.`,<b>&emsp;</b>,`Time limit to think for the creative solution is 30 minutes.`,
			<br/>,
			`2.`,<b>&emsp;</b>,`Time limit to present the idea is 10 minutes.`,
			<br/>,	<br/>
		],
	judgingCriteria:
		[],
	faq:
		[],
	club:"EPIC Club",
	contacts:epicClubContacts,
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
		<Route path="/chakravyuha" component={() => (<EventOne event={chakravyuha} />)} />
		<Route path="/warOfWatts" component={() => (<EventOne event={warOfWatts} />)} />
		<Route path="/tech4Help" component={() => (<EventOne event={tech4Help} />)} />
		<Route path="/designception" component={() => (<EventOne event={designception} />)} />
		<Route path="/relayDesign" component={() => (<EventOne event={relayDesign} />)} />
		<Route path="/battleZone" component={() => (<EventOne event={battleZone} />)} />
		<Route path="/quiz" component={() => (<EventOne event={quiz} />)} />
		<Route path="/appAThon" component={() => (<EventOne event={appAThon} />)} />
		<Route path="/codeAution" component={() => (<EventOne event={codeAution} />)} />
		<Route path="/samgathaBusinessChallenge" component={() => (<EventOne event={samgathaBusinessChallenge} />)} />
		<Route path="/pitchPlease" component={() => (<EventOne event={pitchPlease} />)} />
		{/*<Route path="/beASuperHero" component={() => (<EventOne event={beASuperHero} />)} />
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
