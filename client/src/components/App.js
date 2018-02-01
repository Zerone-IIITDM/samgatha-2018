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
              <Route path="/chakarvyuh" component={() => (<EventOne eventName="Chakarvyuh" />)} />
             <Route path="/warofwatts" component={() => (<EventOne eventName="War of watts" />)} />
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
             <Route path="/drishyam" component={() => (<EventOne eventName="Drishyam" />)} /> 
             <Route path="/eloquent" component={() => (<EventOne eventName="Eloquent" />)} /> 
             <Route path="/gaming" component={() => (<EventOne eventName="Gaming" />)} /> 
             <Route path="/mayasrishti" component={() => (<EventOne eventName="Mayasristhi" />)} /> 
             <Route path="/shutterup" component={() => (<EventOne eventName="Shutter Up" />)} /> 
             <Route path="/samidol" component={() => (<EventOne eventName="Sam Idol" />)} /> 
             <Route path="/impulse" component={() => (<EventOne eventName="Impulse" />)} />
             <Route path="/maskmaking" component={() => (<EventOne eventName="Mask Making" />)} /> 
             <Route path="/duetdance" component={() => (<EventOne eventName="Duet Dance" />)} /> 
           
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
             <Route path="/drishyam" component={() => (<EventOne eventName="Drishyam" />)} /> 
             <Route path="/eloquent" component={() => (<EventOne eventName="Eloquent" />)} /> 
             <Route path="/gaming" component={() => (<EventOne eventName="Gaming" />)} /> 
             <Route path="/mayasrishti" component={() => (<EventOne eventName="Mayasristhi" />)} /> 
             <Route path="/shutterup" component={() => (<EventOne eventName="Shutter Up" />)} /> 
             <Route path="/samidol" component={() => (<EventOne eventName="Sam Idol" />)} /> 
             <Route path="/impulse" component={() => (<EventOne eventName="Impulse" />)} />
             <Route path="/maskmaking" component={() => (<EventOne eventName="Mask Making" />)} /> 
             <Route path="/duetdance" component={() => (<EventOne eventName="Duet Dance" />)} /> 
           
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
