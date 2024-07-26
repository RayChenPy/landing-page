import React, { useState } from "react";
import classes from './projects.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import event_search from '../images/event_search.png';
import iOS from '../images/iOS.png'
import schedule from '../images/schedule.png'
import AI from '../images/AI.png'
import mineSweeper from '../images/mineSweeper.png'

const cardItem = [
    {
        id: 1,
        link: 'https://youtu.be/YmJeZ7NKUIE',
        title: 'Event search web app',
        techStack: 'Tech Stack: Angular, TypeScript, Express, Node',
        desc: 'It is a express-based(Nodejs) Angular and Bootstrap responsive event search app integrating 6 APIs(GoogleMap, IP Info, Spotify, Ticket Master, Facebook, Twitter ) supports 9,000 concurrent requests and allow user to manage favorite events.',
        image: event_search,
        hashtags: ['Angular','TypeScript','Express','Node'],
        githubLink: 'https://github.com/raychencssw/Event-Search-Angular-Web-App'
    },
    {
        id: 2,
        link: 'https://youtu.be/DNl63juSbwc',
        title: 'iOS search web app',
        techStack: 'Tech Stack: iOS, Swift, Express, Node',
        desc: 'It is a native iOS app with Swift and integrated 6 API endpoints that enable users to search sports, music, and arts events and share events on Twitter and Facebook posts.',
        image: iOS,
        hashtags: ['iOS','Swift','Express','Node'],
        githubLink: 'https://github.com/raychencssw/iOS-event-search/blob/main/README.md'
    },
    {
        id: 3,
        link: 'https://youtu.be/ci-rW1CXdvU',
        title: 'Online Meeting Schedule Management System',
        techStack: 'Tech Stack: C++, Linux, Unix socket, UTM Virtual Machine',
        desc: 'A secure scheduling system using UNIX socket programming to save coordinator\'s time and expedite the scheduling process.',
        image: schedule,
        hashtags: ['C++','Linux','Unix','Socket Programming','UTM','Virtual Machine'],
        githubLink: 'https://github.com/raychencssw/socket/tree/main'
    },
    {
        id: 4,
        link: 'http://youtu.be/8qU772UEAFw',
        title: 'Chinese Character Grading System',
        techStack: 'Tech Stack: Python, Flask, TensorFlow',
        desc: 'A.I. model for assisting elementary school teachers in grading students\' homework. This work won 1st place award with a prize worth USD $1,500.',
        image: AI,
        hashtags: ['AI','Machine Learning','Deep Learning','Flask','TensorFlow','Python'],
        githubLink: 'https://github.com/raychencssw/Chinese-Character-AI-model'
    },
    {
        id: 5,
        link: 'https://youtu.be/AwWKrjenQOk',
        title: 'Mine Sweeper',
        techStack: 'Tech Stack: Java, Java, still Java',
        desc: 'A traditional, yet fun game that relese stress.',
        image: mineSweeper,
        hashtags: ['Java'],
        githubLink: 'https://github.com/raychencssw/Java-Mine-Sweeper'
    },

]

const hashTags = [];
const getAllTags = () => {
    cardItem.map((item) => {
        // console.log("hashtags: " + item.hashtags);
        for(let i = 0; i < item.hashtags.length; i++){
            if(!hashTags.includes(item.hashtags[i])){
                hashTags.push(item.hashtags[i]);
            }
        }
    })
}
getAllTags();

export function ProjectCard({tag}){

    //use selectedHashtags as argument to make this component posseses state
    const displayCard = (item) => {
        console.log("displayCard " + item.title + " is executed!");
        return (
            <li key={item.id}>
              <a href={item.link} className={classes.card} target='_blank'>
                <img src={item.image} className={classes.card__image} alt='' />
                <div className={classes.card__overlay}>
                  <div className={classes.card__header}>
                    <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                      <path />
                    </svg>
                    <div className={classes.card__header_text}>
                      <h3 className={classes.card__title}>{item.title}</h3>
                      <span className={classes.card__status}>{item.techStack}</span>
                    </div>
                  </div>
                  <p className={classes.card__description}>{item.desc}</p>
                </div>
              </a>
            </li>
        );
    }
    let displayedCards = [];
    console.log("incoming tag: " + JSON.stringify(tag));
    console.log("tag.length: " + tag.length);

    if (tag.length === 0){
        cardItem.forEach((item) => {
            displayedCards.push(displayCard(item));
        });
    }   
    else{
        cardItem.forEach((item) => {
            for(let i = 0; i < item.hashtags.length; i++){
                if (tag.includes(item.hashtags[i]) && !displayedCards.includes(item)) {
                    displayedCards.push(displayCard(item));
                    //stop the for loop when at least one tag of item.hashtags is found that exists 
                    //in the selectedHashtags to avoid repetition
                    return;
                }
            }
        });
    }
    return <>{displayedCards}</>;
}

export default function Projects(){

    const [selectedHashtags, setSelectedHashtags] = useState([]);

    const toggleHashtag = (hashtag) => {
        console.log(hashtag + " is toggled!");
        if (selectedHashtags.includes(hashtag)) {
            //creates a new array filled with elements excluding the hashtag that is being toggled.
            setSelectedHashtags(selectedHashtags.filter(item => item !== hashtag));
        } else {
            //add a new hashtag to the current selectedhashtags array.
            setSelectedHashtags([...selectedHashtags, hashtag]);
        }
    };

    return(

        <div className={classes.box} id='projects'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY WORK</span>
          <h2 className={classes.heading}>PROJECTS</h2>
          <div className={classes.toggle__button}>
            { hashTags.map((tag) => { 
                //the state selectedHashtgs is updated when user toggles the tag, and the UI get re-rendered
                return <button 
                        key={tag} 
                        className={`${selectedHashtags.includes(tag) ? 'btn btn-primary' : 'btn btn-outline-primary'}`}
                        style={{margin:3}}
                        onClick={() => toggleHashtag(tag)}
                        >
                            {tag}
                        </button>
                })}
          </div>
            {/* <div>selectedHashTags:{selectedHashtags}</div>
            <div>hashTags:{hashTags}</div> */}

          <ul className={classes.cards}>
            <ProjectCard tag={selectedHashtags}/>
          </ul>
        </ScrollAnimation>

        {/*
        <div>
            
            // ASSIST
            <div className="row">
                <div className="row fs-4">
                    <div className="col-sm-12">ASSIST Project Social Media Web App</div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 fs-6">May 2023- August 2023</div>
                <div className="col-sm-6 fs-6"> Los Angeles, CA</div>
            </div>

            <div className="row"> 
                <div className="col-sm-12 fs-6">-Developed a social media web app targeting youth of 11 SoCal high schools to entice the youth to pass the good and put in consistent efforts.</div>
            </div>

            // Event Search
            <div className="row mt-3">
                <div className="row fs-4">
                    <div className="col-sm-12">Event Search Web App</div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 fs-6">January 2023 - April 2023</div>
                <div className="col-sm-6 fs-6"> Los Angeles, CA</div>
            </div>

            <div className="row"> 
                <div className="col-sm-12 fs-6">-Developed and deployed a Flask-based single-page web app on Google
                                                Cloud Platform(GCP) App Engine, saving users 1 sec of searching time
                                                by integrating 3 real-time event search APIs and a sorting feature.
                </div>
                <div className="col-sm-12 fs-6">-Enhanced with express-based(Nodejs) Angular and Bootstrap responsive 
                                                design with more APIs to manage favorite events and improved retention
                                                rate by 20% by incorporating Spotify API for better user experience.
                </div>
                <div className="col-sm-12 fs-6">-Built a robust, portable, and scalable backend RESTful API offering with
                                                JSON data exchange that support 9,000 concurrent requests.
                </div>
            </div>

            // iOS Event Search
            <div className="row mt-3">
                <div className="row fs-4">
                    <div className="col-sm-12">iOS Event Search Mobile App</div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 fs-6">Aril 2023 - May 2023</div>
                <div className="col-sm-6 fs-6"> Los Angeles, CA</div>
            </div>

            <div className="row"> 
                <div className="col-sm-12 fs-6">-Enhanced 10% Click-through rate by building a native iOS app with Swift
                                                and integrated 6 API endpoints that enable users to search sports, music,
                                                and arts events and share events on Twitter and Facebook posts.
                </div>
            </div>

            // C++
            <div className="row mt-3">
                <div className="row fs-4">
                    <div className="col-sm-12">Online Meeting Schedule Management System (C++)</div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 fs-6">March 2023 - April 2023</div>
                <div className="col-sm-6 fs-6"> Los Angeles, CA</div>
            </div>

            <div className="row"> 
                <div className="col-sm-12 fs-6">-Created a secure scheduling system using UNIX socket programming to
                                                save the coordinator one hour per day and 1% of operational cost,
                                                expedite the scheduling process, and create 2% more time on production.
                </div>
            </div>
            
            // Java
            <div className="row mt-3">
                <div className="row fs-4">
                    <div className="col-sm-12">Graphical User InterfaceI(GUI) Mine Sweeper(Java)</div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 fs-6">September 2022 - October 2023</div>
                <div className="col-sm-6 fs-6"> Los Angeles, CA</div>
            </div>

            <div className="row"> 
                <div className="col-sm-12 fs-6">-Created a secure scheduling system using UNIX socket programming to
                                                save the coordinator one hour per day and 1% of operational cost,
                                                expedite the scheduling process, and create 2% more time on production.
                </div>
            </div>

            // AI
            <div className="row mt-3">
                <div className="row fs-4">
                    <div className="col-sm-12">AI Academy Competition: Chinese Character Grading System</div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 fs-6">March 2021 - June 2021</div>
                <div className="col-sm-6 fs-6"> Taichung City, Taiwan</div>
            </div>

            <div className="row"> 
                <div className="col-sm-12 fs-6">-Led a team to build a scalable A.I. model for recognizing handwritten
                                                Chinese characters, assisting elementary school teachers in grading
                                                students' homework. Won 1st place award with a USD $1,500 prize.
                </div>
                <div className="col-sm-12 fs-6">-Developed an innovative algorithm to extract the feature of the character 
                                                to aid the learning and precision of the pre-trained A.I. model. Saves
                                                teachers 50% of grading time and enhances 10% of the grading quality.
                </div>
            </div> 
            

        </div> */}

      </div>
        
    );
}