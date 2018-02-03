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

var mayasrishti = {
  eventName:"Mayasrishti",
  data:[
        `It's time to munch on some Chocolate frogs, drink a few butter beers, 
        wield the Elder wand and use the Quick quotes Quill to create magic on stage!
		Welcome to MayaSrishti, the dramatics event of Samgatha 2018. 
		It will be the crème de la crème of the opportunities to come, 
		showcase the dramatist in you and create an exotic world on stage`,
        <br />,<br />,
        <b>Event Format: </b>,
        `Give a brief description of the round. What will be asked to do in each round?`,
        <br />,
        `Round 1: Perform on the prepared skit.`,
        <br />,
        `Round 2: Topics will be given on the spot to your team and you will have to 
        prepare a small play on the given topic within given time and perform the same.`,
        <br />,<br />,
        <b>Event Rules: </b>,
        `1) Team size: 3-12 member group`,
        <br />,
        '2) Language: English, Hindi, Tamil, Telugu.',
        <br />,
        '3) Time limit: For the first round, minimum 5 minutes and maximum 25 minutes. For the second round, it will be decided on the spot.',
        <br />,<br />,
        <b>Judging Criteria: </b>,
        `1)Uniqueness of the skit`,<br />,
        `2)Expressions/Acting skill`,<br />,
        `3)Involvement of all the actors(If the actor does justice to his/her assigned role)`,
        <br />,<br />,
        <b>FAQ</b>,
        <br />,
        <b>1) What if the team size is less than or more than the above 
        mentioned minimum and maximum team size respectively, or same in the case of team limit?</b>,
        <br />,
        <b>A:</b>, `In that case, your team will have to face penalty of a few points, given to you while judging.`,
        <br />
        ],
  contacts: [
              "Yutika Kulwe: 9920289853 (ced15i017@iiitdm.ac.in)",
              <br />,
              `R Sowbarnika: 7200030983 (edm15b040@iiitdm.ac.in)`
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

var pictionary = {
  eventName:"Pictionary",
  data:[
        `Bring out your hidden art in picturizing the given word.`,
        <br />,<br />,<br />,
        <b><u>  EVENT FORMAT:   </u></b>,<br/>,<br/>,
        ` A person chooses one card out of deck of pictionary cards and tries to express the word\
             which is printed on the card. Teammates should try to guess the word, which the drawing\ 
             is intended to represent.`,
        <br />,<br />,<br />,
        <b><u> EVENT RULES: </u></b>,<br/>,<br/>,
        ` Pictures cannot contain any numbers or letters. Verbal clues and lip movements are not \
         entertained.`,
        <br />,<br />,<br />,
        <b><u> TEAM DESCRIPTION:</u></b>,<br/>,<br/>,
        `Contains a team of 2 members.`,
        <br />,<br />,<br />,
        <b><u> JUDGING CRITERIA :</u></b>,<br/>,<br/>,
        `Speed and accuracy. The team which guesses the word first will be awarded more points.`,
        <br />,
        ],
  contacts: [
             
            ],
}

var drRacist = {
  eventName:"DR. RACIST",
  data:[
        `Come out to show up your sorting skills!!!!!  
         Segregate coloured beads as fast as you can.`,
        <br />,<br />,<br />,
        <b><u>  EVENT FORMAT:   </u></b>,<br/>,<br/>,
        `A person will be given a pile of coloured beads and is expected to sort them by colour
         within a time of 1 minute.`,
        <br />,<br />,<br />,
        <b><u> EVENT RULES: </u></b>,<br/>,<br/>,
        ` A person should sort the beads one at a time.`,
        <br />,<br />,<br />,
        <b><u> TEAM DESCRIPTION :</u></b>,<br/>,<br/>,
        `Individual Event.`,
        <br />,<br />,<br />,
        <b><u> JUDGING CRITERIA :</u></b>,<br/>,<br/>,
        `The person who segregates the maximum number of beads within the defined time 
        limit are declared as the winners.`,
        <br />,
        ],  
  contacts: [
             
            ],
}

var blindFill = {
  eventName:"BLIND FILL",
  data:[
        `FASTEST FILLER FIRST!!!!`,
        <br />,<br />,<br />,
        <b><u>  EVENT FORMAT:   </u></b>,<br/>,<br/>,
        `All the members of the team are blindfolded and should sit in a row.
         one should transfer water through a mug into the mug of the person behind him.
         This process should be continued till the last person. And behind the last person
         a bucket is placed which is to be filled.`,
        <br />,<br />,<br />,
        <b><u> TEAM DESCRIPTION :</u></b>,<br/>,<br/>,
        `Team of five members`,
        <br />,<br />,<br />,
        <b><u> JUDGING CRITERIA :</u></b>,<br/>,<br/>,
        `The team which fills more amount of water in the bucket within given time limit will
         be awarded more points.`,
        <br />,
        ],  
  contacts: [
             
            ],      
}

var blowBall = {
  eventName:"BLOW BALL",
  data:[
        `Show us the stamina that you have got in blowing air and your ability to control the
         power that you have got.`,
        <br />,<br />,<br />,
        <b><u>  EVENT FORMAT:   </u></b>,<br/>,<br/>,
        `5 EMPTY Glasses will be placed in a horizontal row on a table with a ball in the first
         one. Another glass will be provided  which should be utilised to bring the water from a
          bucket that is placed at a distance of 5-7 Meters.`,
        <br />,<br />,<br />,
        <b>  HOW TO  PLAY </b>,<br/>,<br/>,
        `The player should fill the glass with the ball first and blow the ball to the next glass.
         If the ball has been successfully placed in the adjacent glass, then the player should go
         and fetch  another glass of water and continue the process. If the player fails in transporting
          the ball at any point of the game, he/she should take the ball and place it in the first glass
         and should blow the ball till it reaches an empty glass. once the ball reaches  the empty glass
         he/she can continue playing normally.`,
        <br />,<br />,<br />,
        <b><u> JUDGING CRITERIA :</u></b>,<br/>,<br/>,
        `Player who makes the ball reach the last glass in the least time wins.`,

        <br />,
        ],  
  contacts: [
             
            ],      
}

var balloonBash = {
  eventName:"BALLOON BASH",
  data:[
        `Bring out the dominance in you!!!.  Show us your agility.`,
        <br />,<br />,<br />,
        <b><u>  EVENT FORMAT:   </u></b>,<br/>,<br/>,
        `A balloon will be tied to the foot of each participant. He/she will be made to stand with other 
        participants on a stage. A participant should burst others’ balloons by stamping and defend their
         own for 5 minutes. Points will be awarded for bursting a balloon.`,
        <br />,<br />,<br />,
        <b><u> JUDGING CRITERIA :</u></b>,<br/>,<br/>,
        `The player whose balloon sustains till the end will be considered as the winner. If more than one
         player remains till the end, the player scoring more points will be considered as the winner.`,
        <br />,

        ],  
  contacts: [
             
            ],
}

var balloonExpress = {
  eventName:"BALLOON EXPRESS",
  data:[
        `You guys have an extraordinary peer group?? Come show us your unity.`,
        <br />,<br />,<br />,
        <b><u>  EVENT FORMAT:   </u></b>,<br/>,<br/>,
        `A team of 5 members should form a human chain with a balloon in between every two persons.
         The balloon should be placed in such a way that, no hands should be touching the balloon. They should
         start from a given start point and reach the finish line with a obstacle course in between without 
         losing their balloons.`,
         <br />,<br />,<br />,
        <b><u> EVENT RULES: </u></b>,<br/>,<br/>,
        ` 1) One should not touch the balloons with hands.
          2)Loosing or bursting of a balloon is treated as a failure and three such failures 
          are accepted.The fourth failure leads to the elimination of the team.`,
        <br />,<br />,<br />,
        <b><u> TEAM DESCRIPTION :</u></b>,<br/>,<br/>,
        `Team of five members`,
        <br />,<br />,<br />,
        <b><u> JUDGING CRITERIA :</u></b>,<br/>,<br/>,
        `The team reaching the finish line first will be considered as the winner.`,
        <br />,
        
        ],  
  contacts: [
             
            ],
}

var queenOfSheba = {
  eventName:"QUEEN OF SHEBA",
  data:[
        `You think you can complete the given task! Come face the unknown challenges.`,
        <br />,<br />,<br />,
        <b><u>  EVENT FORMAT:   </u></b>,<br/>,<br/>,
        `Various tasks will be given to all the teams(For instance bring Headphones of pink colour).
         Whichever team completes the maximum number of tasks in the given time will be declared as the winner.`,
        <br />,<br />,<br />,
        <b><u> EVENT RULES: </u></b>,<br/>,<br/>,
        ` All the items that are insisted to be brought should be brought physically during the time of
         evaluation of points.`,
         <br />,<br />,<br />,
        <b><u> PROBLEM STATEMENT :</u></b>,<br/>,<br/>,
        `On Spot`,
        <br />,<br />,<br />,
        <b><u> TEAM DESCRIPTION :</u></b>,<br/>,<br/>,
        `Team of five members`,
        <br />,<br />,<br />,
        <b><u> JUDGING CRITERIA :</u></b>,<br/>,<br/>,
        `Judging will be based on the number of tasks that the group has completed successfully. 
        And there may be more points for the difficult tasks.`,
        <br />,
        
        ],  
  contacts: [
             
            ],
}

var maskMaking = {
  eventName:"Mask Making",
  data:[
    `Art speaks where words are unable to explain !\
     Art is not what you see but what you make others see !\
     So this magical season, bring out the artist in you to spell your magic through your designing\
      and thinking skills to create creative and interesting masks !\
      Let's give ourselves the much needed mask makeover and get into a character of our zone !`,
    <br />,<br />,
    <b>Event Format: </b>,
    `No. of rounds: 1`,
    <br />,
    `Participants will be given the materials for making the masks and\
    they have to come up with creative ideas for their masks.`,
    <br />,<br />,
    <b>Event Rules:</b>,
    <br />,
    `1.  Participants can only use the materials provided.`,
    <br />,
    `2.  Use of mobile phones is strictly prohibited.`,
    <br />,
    `3.  15 teams can participate and if the registered team doesn’t come on time, their slot be given to the next in line.`,
    <br />,<br />,
    <b>Team Description: </b>,
    `A team can have maximum 3 members.`
    ],
contacts: [
          "Rishikesh M Nandakumar: 9791077064 (rishikeshmnandakumar@gmail.com)",
          <br />,
          `R Sampath: 8754556005`
        ],
}

var beASuperHero = {
  eventName:"Be A Superhero",
  data:[
        `Everyone once had a dream of become a superhero ,so here is your chance.\
        Design the costume that you would wear if u became a superhero`,
        <br />,<br />,
        <b>Event Format: </b>,
        `No. of rounds: 2`,
        <br />,
        `Round 1: Sketching basic ideas`,
        <br />,
        `Round 2: Detailed skecting`,
        <br />,<br />,
        <b>Event Rules:</b>,
        <br />,
        ` 1. Participants can only use trhe materials provided.`,
        <br />,
        `2. Use of mobile phones is strictly prohibited.`
        ],
  contacts: [
              "Rishikesh M Nandakumar: 9791077064 (rishikeshmnandakumar@gmail.com)",
              <br />,
              `R Sampath: 8754556005`
            ],
}

var battleOfBands = {
  eventName:"Battle of Bands",
  data:[
        `Music speaks what cannot be expressed, soothes the mind,\
         gives it rest and heals the heart and makes it whole flows from heaven to the soul.\
         So here’s your chance to hit the right note \
         and let the musician in you touch thousands of soul \
         and spread this form of magic to mesmerize the world around you !`,
        <br />,<br />,
        <b>Event Format: </b>,
        `This is a group event which involves all walks of singing.\
         Singers, instrumentalists come together to bring simple music.`,
        <br />,<br />,
        <b>Event Rules:</b>,
        <br />,
        `1. A team can have upto 5 members.`,
        <br />,
        `2. A team needs to have at least one singer and one instrumentalist.`,
        <br />,
        `3. Total time for the performance is 18 minutes (including setup time).`,
        <br />,
        `4. Instruments will be provided to the teams.`,
        <br />,<br />,
        <b>Judging Criteria:</b>,
        <br />,
        `The top 3 teams will be awarded.`
        ],
  contacts: [
              "Varshitha: 9600680611 (evd15i001@iiitdm.ac.in)",
              <br />,
              `Ratnanjali: 9176485934 (mpd15i020@iiitdm.ac.in)`,
              <br />,
              `Dharmesh: 9962279625 (esd15i018@iiitdm.ac.in)`
            ],
}

var samIdol = {
  eventName:"Sam Idol",
  data:[
        `Music speaks what cannot be expressed, soothes the mind,\
         gives it rest and heals the heart and makes it whole flows from heaven to the soul.\
         So here’s your chance to hit the right note \
         and let the musician in you touch thousands of soul \
         and spread this form of magic to mesmerize the world around you !`,
        <br />,<br />,
        <b>Event Format: </b>,
        `This is a solo singing event with full freedom to the participants.`,
        <br />,<br />,
        <b>Event Rules:</b>,
        <br />,
        `1. No instruments are allowed.`,
        <br />,
        `2. Karaoke may be used if needed.`,
        <br />,
        `3. Total time for the performance is 5 minutes.`,
        <br />,<br />,
        <b>Judging Criteria:</b>,
        <br />,
        `The top 3 teams will be awarded.`
        ],
  contacts: [
              "Varshitha: 9600680611 (evd15i001@iiitdm.ac.in)",
              <br />,
              `Ratnanjali: 9176485934 (mpd15i020@iiitdm.ac.in)`,
              <br />,
              `Dharmesh: 9962279625 (esd15i018@iiitdm.ac.in)`
            ],
}

class App extends Component {
  constructor(){
    super();
    this.state = {width: window.innerWidth };
    this.state = {loading: true};
  }
  componentDidMount(){
    setTimeout(() => this.setState({loading: false}),2000);
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
    const { loading } = this.state;
    const { width } = this.state;
    const isMobile = width <= 545;
    if(loading){
      return null;
    }
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
             <Route path="/beasuperhero" component={() => (<EventOne event={beASuperHero} />)} /> 
             <Route path="/battleofbands" component={() => (<EventOne event={battleOfBands} />)} /> 
             <Route path="/dancewars" component={() => (<EventOne eventName="Dance Wars" />)} /> 
             <Route path="/drishyam" component={() => (<EventOne event={drishyam} />)} /> 
             <Route path="/eloquent" component={() => (<EventOne eventName="Eloquent" />)} /> 
             <Route path="/gaming" component={() => (<EventOne eventName="Gaming" />)} /> 
             <Route path="/mayasrishti" component={() => (<EventOne event={mayasrishti} />)} /> 
             <Route path="/shutterup" component={() => (<EventOne event={shutterup} />)} /> 
             <Route path="/samidol" component={() => (<EventOne event={samIdol} />)} /> 
             <Route path="/impulse" component={() => (<EventOne eventName="Impulse" />)} />
             <Route path="/maskmaking" component={() => (<EventOne event={maskMaking} />)} /> 
             <Route path="/duetdance" component={() => (<EventOne event={duetDance} />)} /> 
             <Route path="/pictionary" component={() => (<EventOne event={pictionary} />)} /> 
             <Route path="/drracist" component={() => (<EventOne event={drRacist} />)} /> 
             <Route path="/blindfill" component={() => (<EventOne event={blindFill} />)} /> 
             <Route path="/blowball" component={() => (<EventOne event={blowBall} />)} /> 
             <Route path="/balloonbash" component={() => (<EventOne event={balloonBash} />)} /> 
             <Route path="/balloonexpress" component={() => (<EventOne event={balloonExpress} />)} /> 
             <Route path="/queenofsheba" component={() => (<EventOne event={queenOfSheba} />)} /> 
           
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
