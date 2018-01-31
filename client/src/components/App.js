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
              <Route path="/culteventslist" component={MobileCultEventsList} />
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
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
