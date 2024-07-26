import React from "react";
import classes from './education_experience.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';


export default function Education_Experience(){    
    return(
        <div className={classes.box} id='education_experience'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon}`}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            University of Souther California <span>2022 August-Present</span>
                          </h2>
                          <p>
                            Embarking on a jo urney to establish a robust foundation in Computer Science, I have undertaken 
                            several engaging projects encompassing web development, computer networks, and machine learning.
                          </p>
                          <p>
                            Internship: In the summer of 2023, I completed a highly productive internship at{' '} 
                            <b><a target='_blank' href="https://www.foxnbearglobal.com/">Fox and Bear Global</a></b> as 
                            a <b>Web Development and Data Analyst Intern</b>. During my tenure, I successfully crafted a responsive 
                            eCommerce website using WIX, simultaneously achieving exceptional Search Engine Optimization (SEO) outcomes 
                            that led to a remarkable <b>2.3X growth in unique visitors</b>. Additionally, I demonstrated strategic acumen 
                            by optimizing advertising strategies through thorough analysis of Amazon Ads data leading to a remarkable{' '} 
                            <b>70% reduction in advertisement costs</b>. By reallocating these savings towards branding initiatives, 
                            we achieved a substantial <b>2X increase in sales</b>, reflecting a solid grasp of business dynamics and 
                            data-driven decision-making.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Taiwan Semiconductor Manufacturing Company(TSMC) <span>2012-2021 July</span>
                          </h2>
                          <p>
                            I worked as a <b>process engineer</b> at <b><a target='_blank' href='https://www.tsmc.com/english'>TSMC</a></b> 
                            {' '}and rapidly advanced to the position of <b>Senior Process Engineer</b> within just 1.5 years, a significant 
                            achievement considering the average progression timeline of 3 to 5 years. Throughout my tenure, I consistently 
                            surpassed performance targets, demonstrating a track record of exceptional performance. 
                          </p>
                          <p>
                            After five years in the Senior Process Engineer role, I was entrusted with the role of <b>Team Leader</b>. In this 
                            capacity, I orchestrated a successful initiative that resulted in substantial <b>savings of USD $50 million</b> through 
                            process optimization and reconfiguration. This accomplishment was further recognized when our efforts secured the <b>3rd 
                            place award</b> in the esteemed Continuous Improvement Competition.
                          </p>
                          <p>
                            Side project: I actively participated in the Taiwan AI Academy's boot camp, a decision that significantly sharpened 
                            my expertise in computer science and artificial intelligence. This enhanced skill set proved invaluable in efficiently 
                            collecting and analyzing data, ultimately driving significant business growth.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon}`}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Graduation at NTHU <span>2009-2011</span>
                          </h2>
                          <p>
                            Conducted extensive research on the seamless integration of CMOS and MEMS technologies, 
                            specifically focused on the development of micro sensors on a single chip. Successfully 
                            culminated this research into a comprehensive thesis titled "Design and Implementation 
                            of a Reduced-Structure Deflection CMOS-MEMS Capacitive Accelerometer.".{' '}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon}`}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Undergraduation at NCTU <span>2005-2009</span>
                          </h2>

                          <p>
                            Collaborated with a team of 8 individuals to successfully design and execute a solid-propellant rocket project. 
                          </p>
                          <p>
                            Dedicated a significant portion of my academic and personal pursuits towards developing expertise in micro sensor 
                            and actuator design and fabrication within the  MicroElectroMechanical System(MEMS) domain.
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
        // <div className="container">
        // {/* Education */}
        //     <div className="row">
        //         <div className="row fs-3">
        //             <div className="col-sm-12">Education</div>
        //         </div>

        //         {/* USC */}
        //         <div className="row fs-5 ms-2">
        //             <div className="row"> 
        //                 <div className="col-sm-6 fs-5 fw-bold">&#x2022; University of Southern California</div>
        //                 <div className="col-sm-5 fs-6 ms-3">Los Angeles, CA</div>
        //             </div>
        //             <div className="row ms-1">
        //                 <div className="col-sm-6 fs-5">Master of Science in Computer Science</div>
        //                 <div className="col-sm-6 fs-6">Expected Graduation: December 2024</div>
        //             </div>
        //         </div>

        //         {/* NTHU */}
        //         <div className="row ms-2 mt-3">
        //             <div className="row"> 
        //                 <div className="col-sm-6 fs-5 fw-bold">&#x2022; National Tsing Hua University</div>
        //                 <div className="col-sm-5 fs-6 ms-3">Hsinchu City, Taiwan</div>
        //             </div>
        //             <div className="row ms-1">
        //                 <div className="col-sm-6 fs-5">Master of Science in Mechanical Engineer</div>
        //                 <div className="col-sm-6 fs-6">June 2011</div>
        //             </div>
        //         </div>

        //         {/* NCTU */}
        //         <div className="row fs-5 ms-2 mt-3">
        //             <div className="row"> 
        //                 <div className="col-sm-6 fs-5 fw-bold">&#x2022; National Chiao Tung University</div>
        //                 <div className="col-sm-5 fs-6 ms-3">Hsinchu City, Taiwan</div>
        //             </div>
        //             <div className="row ms-1">
        //                 <div className="col-sm-6 fs-5">Bachelor of Science in Mechanical Engineer</div>
        //                 <div className="col-sm-6 fs-6">June 2009</div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    );
}