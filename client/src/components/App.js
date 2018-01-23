import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';


import Workshop from './Workshops/Workshop.js';
import Innerworkshop from './Workshops/Innerworkshop.js';


import Events from './Events/Events';
import Sponsors from './Sponsors/Sponsors.js';

import Home from './Homepage/Home';
import Footer from './Footer/Footer';
import Navbar from './MobileNavbar/Navbar';
import MobileFooter from './MobileFooter/MobileFooter';
import MobileHome from './MobileHome/MobileHome';
import MobileWorkshops from './MobileWorkshops/MobileWorkshops';
import ContactUs from './Contactus/ContactUs';
import MobileEvents from './MobileEvents/MobileEvents';

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
              <Route path="/workshops" component={MobileWorkshops} />
              <Route path="/events" component={MobileEvents} />
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
            <Route path="/events" component={Events} />
            <Route exact={true} path="/" component={Home} />
            <Route path="/workshops" component={Workshop} />

		    <Route path="/workshop1" render={()=><Innerworkshop num = "1" />}/>
		    <Route path="/workshop2" render={()=><Innerworkshop num = "2" />}/>
		    <Route path="/workshop3" render={()=><Innerworkshop num = "3" />}/>
		    <Route path="/workshop4" render={()=><Innerworkshop num = "4" />}/>
		    <Route path="/workshop5" render={()=><Innerworkshop num = "5" />}/>
		    <Route path="/workshop6" render={()=><Innerworkshop num = "6" />}/>


            <Route path="/sponsors" component={Sponsors} />
             <Route path="/contacts" component={ContactUs} />

            <Footer />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
