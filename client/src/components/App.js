import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

import Workshop from './Workshops/Workshop.js';
import Innerworkshop from './Workshops/Innerworkshop.js';

import Home from './Homepage/Home';
import Footer from './Footer/Footer';
import Navbar from './MobileNavbar/Navbar';
import MobileFooter from './MobileFooter/MobileFooter';
import MobileHome from './MobileHome/MobileHome';

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
            <Route path="/workshops" component={Workshop} />
		    <Route path="/workshop1" render={()=><Innerworkshop num = "1" />}/>
		    <Route path="/workshop2" render={()=><Innerworkshop num = "2" />}/>
		    <Route path="/workshop3" render={()=><Innerworkshop num = "3" />}/>
		    <Route path="/workshop4" render={()=><Innerworkshop num = "4" />}/>
		    <Route path="/workshop5" render={()=><Innerworkshop num = "5" />}/>
		    <Route path="/workshop6" render={()=><Innerworkshop num = "6" />}/>

            <Footer />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
