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

var chakarvyuh = {
  eventName:"Chakarvyuh",
  data:[`Every day we sleep inside our home enjoying the safety provided by our Indian Soldiers.\
        They give up family and friends and all their comforts for the security of our nation.
        This event showcases a few such conditions where they work but with an idea of a robot\
        performing these actions rather than a human and thus ensuring life security of such\
        border forces. Join us to form a chakravyuha around our nation.\
        Participating teams need to submit a TDP on or before March 1st 2018.`,
        <br />,<br />,
        <b>FAQ</b>,
        <br />,
        <b>1) How many members in a group?</b>,
        <br />,
        <b>A:</b>, `Four`,
        <br />,
        <b>2) Can we use readymade kits?</b>,
        <br />,
        <b>A:</b>, `No`,
        <br />,
        <b>3) Will the organizers provide battery source?</b>,
        <br />,
        <b>A:</b>, `No. the participants need to bring their own.`,
        <br />,
        <b>4) How many chances per team?</b>,
        <br />,
        <b>A:</b>, `Only one. The organizers deserve the right to change the
                    rules and take quick decisions under the certain
                    unexpected situations.`,
        <br />,
        ],

  
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
        <b>Event Format: </b>,<br />,
        `No. of rounds: 2`,<br />,
        <br />,
        <b>Event Rules: </b>,<br />,
        `A team can have maximum 2 members, \
        once a team is formed , it cannot be changed, \
        Quarrelling with judges will lead to disqualification.`,
        <br />,<br />,
        <b>FAQ</b>,
        <br />,
        <b>1) Why should I participate in WOW?</b>,
        <br />,
        <b>A:</b>, `WOW gives participants a platform to test their limits,and helps to improve ideation.
`,
        <br />,
        <b>2) Who can participate?</b>,
        <br />,
        <b>A:</b>, `Students from any college & university with valid ID.`,
        <br />,
        <b>3) Can a team have members from different colleges?</b>,
        <br />,
        <b>A:</b>, `Yes,Students from different colleges can firm a team.`,
        <br />,
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
  eventName:"Hocus Focus",
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
             "Sumuki Ravi: mpd15i018@iiitdm.ac.in",
              <br />,
              `Manvitha: edm15b041@iiitdm.ac.in`
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
             "Sumuki Ravi: mpd15i018@iiitdm.ac.in",
              <br />,
              `Manvitha: edm15b041@iiitdm.ac.in`
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
             "Sumuki Ravi: mpd15i018@iiitdm.ac.in",
              <br />,
              `Manvitha: edm15b041@iiitdm.ac.in`
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
        <b><u>  HOW TO  PLAY </u></b>,<br/>,<br/>,
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
             "Sumuki Ravi: mpd15i018@iiitdm.ac.in",
              <br />,
              `Manvitha: edm15b041@iiitdm.ac.in`
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
             "Sumuki Ravi: mpd15i018@iiitdm.ac.in",
              <br />,
              `Manvitha: edm15b041@iiitdm.ac.in`
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
             "Sumuki Ravi: mpd15i018@iiitdm.ac.in",
              <br />,
              `Manvitha: edm15b041@iiitdm.ac.in`
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
             "Sumuki Ravi: mpd15i018@iiitdm.ac.in",
              <br />,
              `Manvitha: edm15b041@iiitdm.ac.in`
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
        `Everyone once had a dream of becoming a superhero ,so here is your chance.\
        Design the costume that you would wear if you want to become a superhero`,
        <br />,<br />,
        <b>Event Format: </b>,<br />,
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
  eventName:"Sync Geet",
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

var battleZone = {
  eventName:"Battle Zone",
  data:[
        `Let’s build big, bad GUNS!`,
        <br />,<br />,
        <b>Event Format: </b>,
        `This event consists of two rounds:-`,
        <br />,
        `Round 1: Pen and paper based round and a small problem
    statement`,
    <br />,
    `Round 2: The selected teams will be given an on-spot problem
    statement`,
        <br />,<br />,
        <b>Event Rules:</b>,
        <br />,
        `1. Maximum team size: 5`,
        <br />,
        `2. Total number of finalists selected is 8 teams.`,
        <br />,
        `3. Competition will be conducted in league format.`,
        <br />,
        `4. Time: 6 minutes for league matches and 10 for finals.`,
        <br />,
        `5. Construction equipment and materials will be given on site.`,
        <br />,
        `6. Number of tennis balls(ammo) per team: 10`,
        <br />,
        `7. Each team's territory is a circle of radius 10 feet and the team's
    equipment at the centre.`,
        <br />,
        `8. Number of lives per team: 3`,
        <br />,
        `9. A life is lost if a ball falls on a team's territory excluding the
    defending region.`,
        <br />,
        `10. Use defense to shield your territory and lose no life.`,
        <br />,
        `11. Organizer’s decision is final. Teams must abide by the rules and
    conduct of the workshop.`,
        <br />,<br />,
        <b>Judging Criteria:</b>,
        <br />,
        `1) Participants will be tested on their fabricating skills and team
    work.`,
        <br />,
        `2) On completion of the model 5 points are awarded.`,
        <br />,
        `3) During the game, 4 points will be awarded to the team launching
    the ball,on hitting the opponent's territory in the region of no
    defence. If it hits the shield 2 points will be awarded to the
    defending team with an extra turn to play and 2 points will be
    awarded to the team launching the ball.`,
        <br />,
        `4) 2 points will be awarded to the team who has lent their shield to
    their group mates in the due course of the game.`,
        <br />,
        `5)The group with the highest points ( which is the sum of team's
    score ) is the winner.`,
        <br />,<br />,
        <b>FAQ</b>,
        <br />,
        <b>1) What should be the team size?</b>,
        <br />,
        <b>A:</b>, `3 to 5 per team.`,
        <br />,
        <b>2) 2. Is there any registration fee?</b>,
        <br />,
        <b>A:</b>, `NONE`,
        <br />,
        <b>3) What should I bring with me to the event?</b>,
        <br />,
        <b>A:</b>, `Your teammates and your brain.`,
        <br />,
        <b>4) So, what all components will be available?</b>,
        <br />,
        <b>A:</b>, `The standard equipment in workshop, other materials to work with
    will be mentioned to the finalist on spot, on
    the day of event.`,
    <br />,
        <b>5) Is it for UG/PG/PhD?</b>,
        <br />,
        <b>A:</b>, `Any team with its team members having valid Samgatha ID can
    participate. The team must retain their team
    members until the finals; any change will lead to disqualification.`,
        <br />
        ],
  contacts: [
              "Harichandana K: 8309280761 (mdm15b027@iiitdm.ac.in)",
              <br />,
              `Sai Uday Kiram Y: 8056924626 (mfd15i008@iiitdm.ac.in)`
            ],
}

var tech4help = {
  eventName:"Tech 4 Help",
  data:[
        `The enormous potential of technology and it’s huge capacity  to impact millions of lives is yet to be explored completely.\
        Healthcare is one such domain which awaits the genius in you \
        to tap the unimaginable potentials of technology to serve the mankind better.\
        Your idea could be a breakthrough, which could eventually change a person’s life.\
        So tech 4 help is just the best platform for you  to showcase your innovative ideas. `,
        <br />,<br />,
        <b>Problem Statement: </b>,
        `Participants should make any electronics prototype for solving health related problem existing in society.`,
        <br />,<br />,
        <b>Event Format: </b>,
        `Participants must report in the venue with the prototype. They have to showcase the working of the prototype.`,
        <br />,<br />,
        <b>Event Rules:</b>,
        <br />,
        `1. A team can have maximum 4 members. Once a team is formed , it cannot be changed.`,
        <br />,
        `2. Quarrelling with judges will lead to disqualification.`,
        <br />,<br />,
        <b>Judging Criteria: </b>,
        `Points will be awarded on the following basis:`,
        <br />,
        `Idea - 30 points`,
        <br />,
        `Working - 40 points`,
        <br />,
        `Presentation - 30 points`,
        <br />,<br />,
        <b>FAQs:</b>,
        <br />,
        `Q. Why should I participate in tech4help?`,
        <br />,
        `A. Tech4 help allows participants to work together to design and build prototypes that could help the society at large.`,
        <br />,
        `Q. Who can participate?`,
        <br />,
        `A. Students from any college& university with valid ID.`,
        <br />,
        `Q. Can a team have members from different colleges?`,
        <br />,
        `A. Yes,Students from different colleges can from a team.`,
        <br />,<br />,<br />
        ],
  contacts: [
              "Aditya Pharande: 9566219050/8605575742 (edm15b012@iiitdm.ac.in)",
              <br />,
              `Sakshi Vastrad: 9962287327/8308751733 (evd15i008@iiitdm.ac.in)`,
              <br />,
              `Vyshak Nath C A: 9846527056 (evd15i016@iiitdm.ac.in) `
            ],
}

var relayCAD = {
  eventName:"Relay Design",
  data:[
        `Look at something simple.\
        Something you see every day.\
        Something that no one ever thinks of redesigning, because it seems pointless to do so.\
        Do you think you can make it look better?\
        Then, here's your chance to improvise the design and bring out the best in you to serve the world better !\
        In this event, you will be given a problem statement based on it you have to come up with a product to design/redesign using design software. \
        Show off the best of your imagination as you bring everyday items to a more stylish existence, not compromising on their function along the way.`,
        <br />,<br />,
        <b>Event Format: </b>,<br />,
        `No. of Rounds: 2`,
        <br />,
        `Round 1: A problem statement will be given on the spot of the event. \
        Based on the problem statement you have to come up with a conceptual design, with a rough sketch  and brief explanation for your design. \
        Based on your conceptual design you will be selected for the  2nd round.(There will be some filtration of participants in 1st round)`,
        <br />,
        `Round 2: In second round you have to make the model that you conceptualised in 1st round in a design software.`,
        <br />,<br />,
        <b>Event Rules:</b>,
        <br />,
        `1. A team can have minimum 2 and maximum 3 members.`,
        <br />,
        `2. Computer for making the model in design software is provided by the college itself. Participants are not allowed to bring their laptops.`,
        <br />,
        `3. In second round, each member of the team will be given the same computer in a time rotation for modelling your design. \
        Each member have to continue with the modelling from where the previous member left and will be trying to complete the design .`,
        <br />,
        `4 . The time duration for event is 3 hours.`,
        <br />,<br />,
        <b>Judging Criteria: </b>,
        `Points will be awarded on the basis of conceptual design and 3D modelling`,
        <br />,<br />,
        <b>FAQs:</b>,
        <br />,
        `Q. What is time rotation?`,
        <br />,
        `A. For example if there are  3 members in a group , then each member will be given 60 mins separately but in two intervals.`,
        <br />,
        `Q. Which design software will be given?`,
        <br />,
        `A. Autodesk Inventor will be the design software for the event.`,
        <br />,<br />,<br />
        ],
  contacts: [
              "Rokesh.P: 9487230333 (mfd15i011@iiitdm.ac.in)",
              <br />,
              `Santhosh kumar S R: 8300653276 (edm15b011@iiitdm.ac.in)`
            ],
}

var quiz = {
  eventName:"Quiz",
  data:[
        `Knowledge is power. This has never rung truer than in the quizzing world. It’s survival of the smartest, so you have got to bring your A 			game. If you know the answers, you hold all the cards, nothing else to it. Feel the adrenalin rushing through your veins!`,
        <br />,<br />,
        <b>Event Format: </b>,
        `A team event of 2 members per team.`,
        <br/>,
        `Played in two rounds.`,
        <br/>, 
        `Prelims and Finals.`,
        <br/>,
        `The top few teams in the Prelims will be selected for Finals.`,
        <br/>,
        `Other rules will be briefed during the event.`, 
        <br />,<br />,
        <b>Judging Criteria: </b>,
        `Each team will be evaluated by the judges on the following criteria:`,
        <br />,
        `Skills, Street Presentation, Musicality, Performance, Creativity. It is
        particularly important for the participants to stick with street dance
        styles.`,
        <br />,<br />,
        <b>Event Rules: </b>,
        `1) A team can consist of maximum 2 members`,
        <br />,
        `2) Any number of teams from an institution are allowed`,
        <br />,
        `3) A pre-registered event`,
        <br/>,
        `4) Cross college teams are allowed`,
        <br />,<br />,
        <b>Team Description Format</b>,
        <br />,
        `1. Name of the team`,
        <br />,
        `2. Names`,
        <br />,
        `3. College`,
        <br />
        ],
  contacts: [
              "Ajay Y : 9566181885,9110724750 (mdm15b022@iiitdm.ac.in)",
            ],      
}

var appAThon = {
  eventName:"APP-A-THON",
  data:[
        `APP-A-THON is an online Hackathon where you and your team have to build
         web apps or native apps which make a difference based on the given themes.`,
        <br />,<br />,
        <b>Event Format: </b>,
        `1) It is team event. Team size limit: 3`,
        <br />,
        `2) Duration: 1-week to submit your hack`,
         <br />,<br />,
        <b>Problem Statement: </b>,
        `TBD`, 
        <br />,<br />,
        <b>Event Rules: </b>,
        `TBD`,
        <br />,<br />
        ],
  contacts: [
              "Pranay Ankit Tiru : 8839084045 (ced15i001@iiitdm.ac.in)",
              <br />,
              `Gowtham Munukutla : 9962315214 (ced15i019@iiitdm.ac.in)`,
               <br />,
              `Srinath : 7799644286 (ced15i033@iiitdm.ac.in)`,
            ],
}

var codeAuction = {
  eventName:"Code Auction",
  data:[
        `The event is conducted to bring out the most optimized solution to a problem
         statement with minimum amount of simple, neat code.`, <br />,
         `The event puts pressure on the brain of the contestant to make his solution 
         optimized to win. `,<br />,
         `Everyone wants simple and elegant code. So Zerone club 
         brings this out from it’s participants.`,<br />,
        <br />,<br />,
        <b>Event Format: </b>,
        `An initial amount of virtual money or credits are given to each contestant before the event starts. 
		With each keyword used in their solution to the given problem statement, the credits decrease. 
		Credits are decreased for each keyword used in the code.
		For example: if-else constructs, looping keywords like while, for etc., switch, break, etc.
		The event is language independent and the credits are same for the constructs and do not vary by the keyword. 
		Other languages may have other keywords and credits are assigned based on the mechanism the keyboard. All this is round 1.
		Round 2 will be thought over soon.`,
         <br />,<br />,
        <b>Problem Statement: </b>,
        `TBD`, 
        <br />,<br />,
        <b>Event Rules: </b>,
        `Maximum two members per team`,
        <br />,<br />
        ],
  contacts: [
              "Pranay Ankit Tiru : 8839084045 (ced15i001@iiitdm.ac.in)",
              <br />,
              `Gowtham Munukutla : 9962315214 (ced15i019@iiitdm.ac.in)`,
              <br />,
              `Srinath : 7799644286 (ced15i033@iiitdm.ac.in)`,
            ],
}

var eloquent = {
  eventName:"Eloquent",
  data:[
        `If you love expressing your ideas and thoughts, then this is the place where you belong! 
        This is an amazing platform to showcase your speaking, thinking and improvisation skills. 
        This event will be a competitive speaking event which will make you think on your feet.`,
        <br />,<br />,
        <b>Event Format: </b>,
        `This event will consist of some off the beaten path events like spin-a-yarn, shipwrecked, and lots more…`,<br />,
		`Details will be given on the spot.`,
         <br />,<br />,
        <b>Problem Statement: </b>,
        `Topics will be given on the spot `, 
        <br />,<br />,
        <b>Event Rules: </b>,
        `Individual event`,
        <br />,<br />,
        <b>Judging Criteria </b>,
        `Evaluation for the overall event depends on the following critical parameters:-`,<br />,
        `1) Fluency in the English language`,<br />,
        `2) Organization & Clarity`,<br />,
        `3) Use of Argument `,<br />,
        `4) Improvisation`,<br />,
        `5) Presentation`,<br />,
        ],
  contacts: [
              "Eashan Dash : 8056145489 (mpd15i017@iiitdm.ac.in)",
              <br />,
              `Prathamesh : 9790730231 (ced15i029@iiitdm.ac.in)`,
            ],
}

var lawyerUp = {
  eventName:"Lawyer Up",
  data:[
        `A great blend of usual debating events and a hint of some unique IIITDM-ness. 
        Come, Debate, and conquer this tricky game of words, expressions and ideas with a bit of "Sugar and Spice" as you like it.`,
        <br />,<br />,
        <b>Event Format: </b>,
        `The event will be spanned by 2 rounds.`,<br />,
		`Round 1 will see a group discussion .
		Group size : 5
		Round 2 will be the final round consisting of the best 6 participants from Round 1. `,
         <br />,<br />,
        <b>Problem Statement: </b>,
        `Topics will be given on the spot `, 
        <br />,<br />,
        <b>Event Rules: </b>,
        `Individual event`,
        <br />,<br />,
        <b>Judging Criteria </b>,
        `Evaluation for the overall event depends on the following critical parameters:-`,<br />,
        `1) Fluency in the English language`,<br />,
        `2) Organization & Clarity`,<br />,
        `3) Use of Argument `,<br />,
        `4) Use of cross-examination and rebuttal:`,<br />,
        `5) Presentation`,<br />,
        ],
  contacts: [
              "Eashan Dash : 8056145489 (mpd15i017@iiitdm.ac.in)",
              <br />,
              `Prathamesh : 9790730231 (ced15i029@iiitdm.ac.in)`,
            ],
}

var resonance = {
  eventName:"Resonance",
  data:[
        `Rediscover yourself  by expressing with the power of the written word. Creativity and 
        imagination are more important than grammar or spelling. Write your heart out.`,
        <br />,<br />,
        <b>Event Format: </b>,
        `TBD`,
         <br />,<br />,
        <b>Problem Statement: </b>,
        `Topics will be given on the spot `, 
        <br />,<br />,
        <b>Event Rules: </b>,
        `Individual event`,
        <br />,<br />,
        ],
  contacts: [
              "Eashan Dash : 8056145489 (mpd15i017@iiitdm.ac.in)",
              <br />,
              `Prathamesh : 9790730231 (ced15i029@iiitdm.ac.in)`,
            ],
}
var photoOn = {
  eventName:"PhotoON",
  data:[
        `It is a theme-based online photography event.`,
        <br />,<br />,
        <b>Event Format: </b>,
        `Participants have to send their entries to samgatha.photography.2018@gmail.com(will be created shortly). Only 1 round.`,<br />,
         <br />,<br />,
        <b>Problem Statement: </b>,
        `A theme will be given by Feb 1. Depending on the theme, the participants should send the entries to the above mentioned mail-id. `, 
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
        <br />,<br />,
        ],
  contacts: [
              "A Aravind: 7904787923 (mdm15b033@iiitdm.ac.in)",
              <br />,
              `Vishal Nayak: 7382327624 (edm15b017@iiitdm.ac.in)`,
            ],
}

var designception = {
  eventName:"Designception",
  data:[
        `It has always been about the OUT of the BOX thinking .This event is all about thinking Out of the Box
         for a problem that is OUT of this WORLD.`,
        <br />,<br />,
        <b> Event Description: </b>,<br />,
        `Participants are supposed to come up with a CAD model and a power-point presentation with detailed
         description and present it to the panel members`,<br />,<br/>,
        <b>Event Format: </b>,<br />,
        `Team must consist of minimum of 2 members to a maximum of 3 members.

          Should Present the CAD model in front of the panel.

          Things needed in powerpoint presentation:

          1.Explain in brief about design approach :
            Different concepts developed during the process , source of inspiration ,
            listing of existing products used for reference ,etc.
          2.Final concept :
            Which concept you chose out of all the concepts mentioned above.
          3.Attach CAD images and explain the working and significance of your model.`,<br />,
        <br />,
        <b>Problem Statement: </b>,<br />,
        `Space junks and wastes has started accumulating around our earth since 1957. And the quantity has
         reached the saturation point .Come up with a solution to recover the space junk and bring it back
          to earth for recycling and reusing .`,
        <br />,<br />,
        <b>FAQ</b>,
        <br />,
        <b>1) Who can participate?</b>,
        <br />,
        <b>A:</b>, `All students with a valid identity card of their respective educational institutes
                    are eligible to participate in the competition.Students from the stream of Engineering,
                    other research fields pursuing Bachelors, Master’s Degree and PhD candidates can participate.`,
        <br />,
        <br />,
        <b>2)  How to register?</b>,
        <br />,
        <b>A:</b>, `Samgatha webpage registration.`,
        <br />,
        ],
  contacts: [
              "S.R. Santhosh Kumar: +91-9487493276  (edm15b011@iiitdm.ac.in)",
              <br />,
              `P. Rokesh: +91-948723033 (mfd15i011@iiitdm.ac.in)`,
              <br />,
              `A. Visnu Priya: +9790707348 (edm15b020@iiitdm.ac.in) `
            ],      
}

var  samgathaBusinessChallenge= {
  eventName:"Samgatha Business Challenge",
  data:[
        `The contestants are expected to come up with a small but viable business idea which will be of interest
         and can thrive in Samgatha’s Magical atmosphere.Each team will be allocated a stall around the Campus
          and are expected to make profits from their business ideas , by providing a service to the Samgatha 
          Audience`,
        <br />,<br />,<br />,
        <b>Event Format: </b>,<br />,<br />,
        `Round 1 :
          Each team gets to present their ideas infront of a judging panel. And a handful of teams will be
          short listed for executing their ideas over a period of 2 days.`,
          <br />,
        `Round 2 :
          Each team gets a Stall for themselves , and starts engaging with the Samgatha Audience.`,<br />,
        <br />,
        <b>Problem Statement: </b>,<br />,<br />,
        ` On spot`,
        <br />,<br />,
        <b>Event Rules: </b>,<br />,<br />,
        `Max investment for each idea : Rs. 3000
         Each selected team is expected to participate for both the days.
         The product / service must be viable and tangible.
         The Team size can range from 2 to 4
         The winner will be decided based on uniqueness , marketing strategy, profits, business acumen. `,
         <br />,<br />,
         <b> TDP(Team description Paper) format: </b>,<br />,
         `Name`,
         <br />,
         `Contact number(of every team member)`,<br />,
          `Samgatha ID`,
         <br />,
        ],
  contacts: [
              "Vedant Bassi: 9500094537  (ced15i013@iiitdm.ac.in)",
              <br />,
              `Aditya Prakash: 9790729047 (ced15i025@iiitdm.ac.in)`,
              <br />,
            ],      
}

var  syncGeet= {
  eventName:"Sync Geet",
  data:[
        `Music speaks what cannot be expressed, soothes the mind,\
         gives it rest and heals the heart and makes it whole flows from heaven to the soul.\
         So here’s your chance to hit the right note \
         and let the musician in you touch thousands of soul \
         and spread this form of magic to mesmerize the world around you !`,
        <br />,<br />,
        <b>Event Format: </b>,<br />,<br />,
        `This is a group event which involves all walks of singing.\
         Singers, instrumentalists come together to bring simple music.`,
        <br />,<br />,
        <b>Event Rules:</b>,<br />,
        <br />,
        `1. A team can have upto 5 members.`,
        <br />,
        `2. A team needs to have at least one singer and one instrumentalist.`,
        <br />,
        `3. Total time for the performance is 7 minutes (including setup time).`,
        <br />,
        `4. Instruments to be brought by participants.`,
        <br />,
        `5. Karaokes are not allowed.`,
        <br />,
        `6. Pure classical is not allowed.`,
        <br />,<br />,
        <b>Judging Criteria:</b>,
        <br />,<br />,
        `The top 3 teams will be awarded.`
        ],
  contacts: [
              "Varshitha: 7904787183  (evd15i001@iiitdm.ac.in)",
              <br />,
              `Ratnanjali: 9176485934 (mpd15i020@iiitdm.ac.in)`,
              <br />,
              `Dharmesh: 9962279625 (esd15i018@iiitdm.ac.in)`
            ],
}

var gayaak = {
  eventName:"Gayaak",
  data:[
        `Music speaks what cannot be expressed, soothes the mind,\
         gives it rest and heals the heart and makes it whole flows from heaven to the soul.\
         So here’s your chance to hit the right note \
         and let the musician in you touch thousands of soul \
         and spread this form of magic to mesmerize the world around you !`,
        <br />,<br />,
        <b>Event Format: </b>,<br />,<br />,
        `This is a solo singing event with full freedom to the participants.`,
        <br />,<br />,
        <b>Event Rules:</b>,<br />,
        <br />,
        `1. No instruments are allowed.`,
        <br />,
        `2. Karaoke may be used if needed.(Have to submit in advance)`,
        <br />,
        `3. Total time for the performance is 4 minutes.`,
        <br />,
        `4. No pure classical allowed.`,
        <br />,<br />,
        <b>Judging Criteria:</b>,<br />,
        <br />,
        `The top 3 performances will be awarded.`
        ],
  contacts: [
              "Varshitha: 7904787183 (evd15i001@iiitdm.ac.in)",
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
              <Route path="/chakarvyuh" component={() => (<MobileEventOne event={chakarvyuh} />)} />
              <Route path="/warofwatts" component={() => (<MobileEventOne event={warOfWatts} />)} />
               <Route path="/tech4help" component={() => (<MobileEventOne event={tech4help} />)} />
               <Route path="/designception" component={() => (<MobileEventOne event={designception} />)} />
               <Route path="/relaycad" component={() => (<MobileEventOne event={relayCAD} />)} />
               <Route path="/battlezone" component={() => (<MobileEventOne event={battleZone} />)} />
               <Route path="/sbc" component={() => (<MobileEventOne event={samgathaBusinessChallenge} />)} />
               <Route path="/appathon" component={() => (<MobileEventOne event={appAThon} />)} />
               <Route path="/codeauction" component={() => (<MobileEventOne event={codeAuction} />)} /> 
               <Route path="/beasuperhero" component={() => (<MobileEventOne event={beASuperHero} />)} /> 
               <Route path="/syncGeet" component={() => (<MobileEventOne event={syncGeet} />)} /> 
               <Route path="/dancewars" component={() => (<MobileEventOne event={eloquent} />)} /> 
               <Route path="/drishyam" component={() => (<MobileEventOne event={drishyam} />)} /> 
               <Route path="/photoon" component={() => (<MobileEventOne event={photoOn} />)} /> 
               <Route path="/eloquent" component={() => (<MobileEventOne event={eloquent} />)} /> 
               <Route path="/gaming" component={() => (<MobileEventOne eventName="Gaming" />)} /> 
               <Route path="/mayasrishti" component={() => (<MobileEventOne event={mayasrishti} />)} /> 
               <Route path="/shutterup" component={() => (<MobileEventOne event={shutterup} />)} /> 
               <Route path="/gayaak" component={() => (<MobileEventOne event={gayaak} />)} /> 
               <Route path="/impulse" component={() => (<MobileEventOne eventName="Impulse" />)} />
               <Route path="/maskmaking" component={() => (<MobileEventOne event={maskMaking} />)} /> 
               <Route path="/duetdance" component={() => (<MobileEventOne event={duetDance} />)} /> 
               <Route path="/pictionary" component={() => (<MobileEventOne event={pictionary} />)} /> 
               <Route path="/drracist" component={() => (<MobileEventOne event={drRacist} />)} /> 
               <Route path="/blindfill" component={() => (<MobileEventOne event={blindFill} />)} /> 
               <Route path="/blowball" component={() => (<MobileEventOne event={blowBall} />)} /> 
               <Route path="/balloonbash" component={() => (<MobileEventOne event={balloonBash} />)} /> 
               <Route path="/balloonexpress" component={() => (<MobileEventOne event={balloonExpress} />)} /> 
               <Route path="/queenofsheba" component={() => (<MobileEventOne event={queenOfSheba} />)} /> 
               <Route path="/quiz" component={() => (<MobileEventOne event={quiz} />)} />
               <Route path="/lawyerup" component={() => (<MobileEventOne event={lawyerUp} />)} />
               <Route path="/resonance" component={() => (<MobileEventOne event={resonance} />)} />
          
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
               <Route path="/chakarvyuh" component={() => (<EventOne event={chakarvyuh} />)} />
               <Route path="/warofwatts" component={() => (<EventOne event={warOfWatts} />)} />
               <Route path="/tech4help" component={() => (<EventOne event={tech4help} />)} />
               <Route path="/designception" component={() => (<EventOne eventName="Designception" />)} />
               <Route path="/relaycad" component={() => (<EventOne event={relayCAD} />)} />
               <Route path="/battlezone" component={() => (<EventOne event={battleZone} />)} />
               <Route path="/sbc" component={() => (<EventOne eventName="Samgatha Business Challenge" />)} />
               <Route path="/appathon" component={() => (<EventOne event={appAThon} />)} />
               <Route path="/codeauction" component={() => (<EventOne event={codeAuction} />)} /> 
               <Route path="/beasuperhero" component={() => (<EventOne event={beASuperHero} />)} /> 
               <Route path="/battleofbands" component={() => (<EventOne event={battleOfBands} />)} /> 
               <Route path="/dancewars" component={() => (<EventOne eventName="Dance Wars" />)} /> 
               <Route path="/drishyam" component={() => (<EventOne event={drishyam} />)} /> 
               <Route path="/photoon" component={() => (<EventOne event={photoOn} />)} /> 
               <Route path="/eloquent" component={() => (<EventOne event={eloquent} />)} /> 
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
                <Route path="/quiz" component={() => (<EventOne event={quiz} />)} />
                <Route path="/battle" component={Battle}/>
                <Route path="/lawyerup" component={() => (<EventOne event={lawyerUp} />)} />
               <Route path="/resonance" component={() => (<EventOne event={resonance} />)} />
              
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;
