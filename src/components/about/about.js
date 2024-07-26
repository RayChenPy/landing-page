import React from "react";
import classes from './about.module.css';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function About(){    
    return(
        <div className={classes.box} id='about'>
            <ScrollAnimation
            offset={0}
            animateIn='rollIn'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
            >
                <span className={classes.head}>ABOUT ME</span>
                <h2 className={classes.heading}>Who Am I?</h2>
                <div className={classes.About}>
                    <p>My name is WeiChieh and I go by Ray! Currently, I am immersed in the world of computer 
                        science, honing my skills in{' '} 
                        <b><a href="https://youtu.be/YmJeZ7NKUIE"
                           rel='opener noreferrer'
                           target='_blank'> 
                           web development
                        </a></b>,{' '}
                        <b><a href="https://youtu.be/ci-rW1CXdvU"
                           rel='opener noreferrer'
                           target='_blank'
                        >
                            computer networks
                        </a></b>,{' '}  
                            and <b><a href="http://youtu.be/8qU772UEAFw"
                            rel='opener noreferrer'
                            target='_blank'>
                            machine learning
                        </a></b>. 
                    </p>
                    <p>In my previous role as a process engineer, my expertise lay in designing, implementing, and 
                        manufacturing within the Semiconductor field.My role involved analyzing vast datasets 
                        collected from machines, which led me to delve into the realm of computer science and machine learning. 
                    </p>
                    <p>Through online resources and coding practice during my free time, I started building a solid foundation 
                        in these areas. As time went on, I realized the immense potential and influence I could have in the 
                        industry. This realization prompted me to commit to formal education in Computer Science, resulting 
                        in remarkable achievements and some exciting projects along the way.
                    </p>
                </div>

                <h2 className={classes.heading}>Fun fact</h2>
                <div className={classes.About}>
                    <p>I'm a huge Kobe Bryant fan, and in 2016, I traveled all the way from Taiwan to the US to witness one of his final games.</p>
                    <p>The inspiration for my English name, Ray, came from my Brazilian Jiu-Jitsu coach. Despite my repeated explanations of my Taiwanese name, he persistently called me HEY, which led me to adopt the name Ray.</p>
                </div>

                <h2 className={classes.heading}>Skillset</h2>
                <div className={classes.About}>
                    <p className="mb-1">&#x2022; Languages</p>
                    <p className="ms-2">Java, Python, C++, Swift, SQL, JavaScript, HTML, CSS, TypeScript</p>
                    <p className="mb-1">&#x2022; Frameworks & Libraries</p>
                    <p className="ms-2">Angular, React, Flask, Jest, Express(Node.js), Tensorflow,Keras, OpenCV, OpenLayers</p>
                    <p className="mb-1">&#x2022; Developer Tools</p>
                    <p className="ms-2">MySQL, PostgreSQL, Git, Linux Ubuntu, Anaconda, UTM, GCP, VS Code, MongoDB, GoogleEarth</p>
                    <p className="mb-1">&#x2022; Certificate</p>
                    <p className="ms-2">
                        <a href="https://coursera.org/share/10880002811d133895441d5de5e3a13c"                   
                            rel='opener noreferrer'
                            target='_blank'>
                            Machine Learning
                        </a>
                    </p>
                </div>

                <h2 className={classes.heading}>Career Objective</h2>
                <div className={classes.About}>
                    <p>As a passionate technology enthusiast with a robust background in data analysis, 
                        I've witnessed the transformation of the semiconductor industry. This evolution, 
                        brought about by the intricate integration of software, AI, and domain knowledge, 
                        has led to revolutionary advancements in various facets of life.
                    </p>
                    <p>
                        My objective is to harness my interdisciplinary expertise in data analysis, decision-making, 
                        and computer science to address real-world challenges. I aspire to drive positive 
                        transformations in the way humans live, work, and have fun.
                    </p>
                </div>
            </ScrollAnimation>
        </div>
    )
}