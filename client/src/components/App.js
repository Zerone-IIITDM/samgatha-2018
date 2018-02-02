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



var chakarvyuh = {
  eventName:"Chakarvyuh",
  data:`Every day we sleep inside our home enjoying the safety provided by our Indian Soldiers.\
        They give up family and friends and all their comforts for the security of our nation.\ 
        This event showcases a few such conditions where they work but with an idea of a robot\
        performing these actions rather than a human and thus ensuring life security of such\
        border forces. Join us to form a chakravyuha around our nation.\
        Participating teams need to submit a TDP on or before March 1st 2018.`,
  
  contacts:[
            "Amrutha Manoharan : 09566186673 (esd15i017@iiitdm.ac.in)",
            <br/>,
            `Rohan Kumar Panda: 08249639668 (mfd15i013@iiitdm.ac.in )`,
            <br/>,
            `Surendra Bharath: 09885782381 (mdm15b031@iiitdm.ac.in )`
            ],
}

var warOfWatts = {
  eventName:"War of Watts",
  data:[
        `In the midst of an ecstatic Fest lies an ancient battle ground, a place where several battles were fought, wars waged ,\
        a place that will test your wits , a place that will test your limits and your command over the legions of components waiting to be\
        explored and combined to form deadly combinations.  Do you have what it takes to enter the arena and establish your supremacy? Here Survival\
        is not an option. May the river of electrons come to your aid`,
        <br />,<br />,
        <b>Event Format: </b>,
        `No. of rounds: 2`,
        <br />,
        <b>Event Rules: </b>,
        `A team can have maximum 2 members, \
        once a team is formed , it cannot be changed, \
        Quarrelling with judges will lead to disqualification.`
        ],
  contacts: [
              "Aditya Pharande: 9566219050/8605575742 (edm15b012@iiitdm.ac.in)",
              <br />,
              `Sakshi Vastrad: 9962287327/8308751733 (evd15i008@iiitdm.ac.in)`,
              <br />,
              `Vyshak Nath C A: 9846527056 (evd15i016@iiitdm.ac.in) `
            ],      
}


var mayasrishti={
  eventName:"Mayasristhi",
      data:[` It's time to munch on some Chocolate frogs, drink a few butter beers, wield the Elder wand and use the \
              Quick quotes Quill to create magic on stage!  Welcome to MayaSrishti, the dramatics event of Samgatha 2018.  \
              It will be the crème de la crème of the opportunities to come, showcase the dramatist in you and create an exotic \
              world on stage `,
             <br />,<br />,
             <b> Event Format : </b>,
             `No of rounds`,
             <br />,
               `Round 1 -  Perform on the prepared skit.\
               Round 2 - Topics will be given on the spot to your team and you will have to prepare a small play \
               on the given topic within given time and perform the same.`,
              <br />,
       `Event rules:`,
        `Team size: 3-12 member group,
        Language: English, Hindi, Tamil, Telugu.`,
        <br />,
        `Time limit:`,
        `For the first round, minimum 5 minutes and maximum 25 minutes. 
        For the second round, it will be decided on the spot.`,
        ],

}

var duetDance = {
  eventName:"Duet Dance",
  data:[
        `Dance ! It's one of the purest and mesmerising form of magic , a gift to mankind to express their various emotions that run through our body straight to our soul !
        It's time to live your La La Land.
        Listen to that long forgotten whisper and feel the rise and fall of
        your breath. Break your shackles. Grab the moment and cast that
        entrancing spell on us!`,
        <br />,<br />,
        <b>Problem Statement: </b>,
        `Opportunity dances with those already on the dance floor. Come, 
        grab it. Come, dance to live, to breathe, to be free, to be YOU.`, 
        <br />,<br />,
        <b>Judging Criteria: </b>,
        `Each team will be evaluated by the judges on the following criteria:`,
        <br />,
        `Skills, Street Presentation, Musicality, Performance, Creativity. It is
        particularly important for the participants to stick with street dance
        styles.`,
        <br />,<br />,
        <b>Event Rules: </b>,
        `1) Time limit: 3-5 minutes`,
        <br />,
        '2) Clothing that is too short, suggestive or inappropriate for the age of the performer is not allowed',
        <br />,
        '3) Judges decision will be final',
        <br />,<br />,
        <b>FAQ</b>,
        <br />,
        <b>1) Is Classical allowed for duet?</b>,
        <br />,
        <b>A:</b>, `No. But you're free to do semi-classical`,
        <br />,
        <b>2) How many prozes will be awarded?</b>,
        <br />,
        <b>A:</b>, `Two, for duet and group. Three, for solo.`,
        <br />,
        <b>3) Why should I participate?</b>,
        <br />,
        <b>A:</b>, `Prize money upto 50k!`,
        <br />
        ],
  contacts: [
              "Manasa: 9566187833 (edm15b021@iiitdm.ac.in)",
              <br />,
              `Tejasvi Raj: 9566180551 (coe15b026@iiitdm.ac.in)`
            ],      
}

var drishyam = {
  eventName:"Drishyam",
  data:[
        `Mass media is effective in every field of life by virtue of their audio-visual powers. 
        In addition to usage of cinema for entertainment purposes, its educational role has been realized .
        If you have a knack for getting straight to the point, short films are for you.
        From extremely crazy, comedic pieces to films that evoke thought and create awareness, 
        any idea is a brilliant idea if you know what to do with it. 
        Let the images on screen connect with the people’s mind and soul. 
        So, set up your cameras, light up the scene, and show us what you have got!`,
        <br />,<br />,
        <b>Event Format: </b>,
        `Participants have to send their entries to samgatha.photography.2018@gmail.com(will be created shortly). 
        1 round only, there will be screening of the films and the judgement will be done there.`,
         <br />,<br />,
        <b>Problem Statement: </b>,
        `Free- themed short film contest.`, 
        <br />,<br />,
        <b>Event Rules: </b>,
        `1) Language: English, Hindi, Malayalam, Tamil, Telugu.`,
        <br />,
        `2)Subtitles are must.`,
        <br />,
        `3) Whichever films that have been produced after January 1 2017 are accepted.
        Films produced before the above specified date are not accepted.`,
        <br />,
        `4)Films should be released in India.`,
        <br />,
        `5)Once the entry has been submitted it cannot be withdrawn from the fest during the event.`,
        <br />,
        `6)All submissions have to be made at __________.`,
        <br />,
        `7)Maximum size of the video shouldn’t exceed 700 MB.`,
        <br />,
        `8)The format of the video should be MP4.`,
        <br />,
        `9)Time limit is 15-20 minutes.`,
        <br />,<br />
        ],
  contacts: [
              "A Aravind: 7904787923 (mdm15b033@iiitdm.ac.in)",
              <br />,
              `Vishal Nayak: 7382327624 (edm15b017@iiitdm.ac.in)`
            ],
}

{/*
	ONLY 9 OUT of 20 EVENT RULES points are ADDED in SHUTTERUP
*/}
var shutterup = {
  eventName:"Shutter Up",
  data:[
        `Do you think your photos showcase the world in a different light? 
        Can your pictures transcend emotions? Does your photo have an untold story waiting to be heard and explored ? 
        If so, here we give you an exotic chance to let the pixels do the talking. 
        We present to you the online photography contest. 
        So dig up the pile of photographs that live on your computer and 
        let them see the light and embrace the glory !`,
        <br />,<br />,
        <b>Event Format: </b>,
        `Participants have to send their entries to samgatha.photography.2018@gmail.com(will be created shortly). Only 1 round.`,
        <br />,<br />,
        <b>Problem Statement: </b>,
        `Free-theme photography event. `, 
        <br />,<br />,
        <b>Event Rules: </b>,
        `1) 2 pictures you’ve taken should be submitted on or before __/__/2018, __ pm.`,
        <br />,
        `2)EDITING the original image is PROHIBITED. The entries will be disqualified in that case.`,
        <br />,
        `3) WATERMARKS are NOT allowed. Watermarked pictures will lead to disqualification.`,
        <br />,
        `4)This is an INDIVIDUAL event and is open to everyone.`,
        <br />,
        `5)Entries with offensive or inappropriate content or those which promote any specific brand will be disqualified. `,
        <br />,
        `6)The photographs submitted must be the genuine, original work of the participant.`,
        <br />,
        `7)Any device can be used to capture the photo.`,
        <br />,
        `8)The copyrights of the pictures will stay with the photographer. However, Samgatha has the right to use the pictures for publicity or other activities. `,
        <br />,
        `9)Under any circumstance, entries once submitted cannot be taken back for modifications. `,
        <br />,<br />
        ],
  contacts: [
              "A Aravind: 7904787923 (mdm15b033@iiitdm.ac.in)",
              <br />,
              `Vishal Nayak: 7382327624 (edm15b017@iiitdm.ac.in)`
            ],
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
              
           
              <MobileFooter />
            </div>
          </BrowserRouter>
        </div>
      );
    }
    return (
      <div className="container">
        <BrowserRouter>
          <div>
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
             <Route path="/chakarvyuh" component={() => (<EventOne event={chakarvyuh} />)} />
             <Route path="/warofwatts" component={() => (<EventOne event={warOfWatts} />)} />
             <Route path="/tech4help" component={() => (<EventOne eventName="tech4help" />)} />
             <Route path="/designception" component={() => (<EventOne eventName="Designception" />)} />
             <Route path="/relaycad" component={() => (<EventOne eventName="RelayCAD" />)} />
             <Route path="/battlezone" component={() => (<EventOne eventName="Battle Zone" />)} />
             <Route path="/sbc" component={() => (<EventOne eventName="Samgatha Business Challenge" />)} />
             <Route path="/appathon" component={() => (<EventOne eventName="APP-A-THON" />)} />
             <Route path="/codeauction" component={() => (<EventOne eventName="Code Auction" />)} /> 
             <Route path="/beasuperhero" component={() => (<EventOne eventName="Be a Super Hero" />)} /> 
             <Route path="/battleofbands" component={() => (<EventOne eventName="Battle of Bands" />)} /> 
             <Route path="/dancewars" component={() => (<EventOne eventName="Dance Wars" />)} /> 
             <Route path="/drishyam" component={() => (<EventOne event={drishyam} />)} /> 
             <Route path="/eloquent" component={() => (<EventOne eventName="Eloquent" />)} /> 
             <Route path="/gaming" component={() => (<EventOne eventName="Gaming" />)} /> 
             <Route path="/mayasrishti" component={() => (<EventOne event={mayasrishti} />)} /> 
             <Route path="/shutterup" component={() => (<EventOne event={shutterup} />)} /> 
             <Route path="/samidol" component={() => (<EventOne eventName="Sam Idol" />)} /> 
             <Route path="/impulse" component={() => (<EventOne eventName="Impulse" />)} />
             <Route path="/maskmaking" component={() => (<EventOne eventName="Mask Making" />)} /> 
             <Route path="/duetdance" component={() => (<EventOne event={duetDance} />)} /> 
           
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
