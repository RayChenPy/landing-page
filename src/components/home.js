import './Page.css';

export default function Home(){    
    return(
        <div>
            <div className="row">
                <div className="row fs-3 mt-3">
                    <div className="col-sm-12">Career Objective</div>
                </div>
                <div className="col-sm-12 fs-5">Passionate technology practitioner experienced in data analysis, my goal 
                                                is to leverage my skills in data analysis, decision-making, and computer 
                                                science to tackle real- world challenges that bring significant benefits 
                                                to the industry.
                </div>


                {/* Skills */}
                <div className="row fs-3 mt-3">
                    <div className="col-sm-12">Skill</div>
                </div>
                <div className="row"> 
                    <div className="col-sm-6 fs-5 fw-bold">&#x2022; Languages</div>
                </div>
                <div className="col-sm-12 fs-6">Java, Python, C++, Swift, SQL, JavaScript, HTML, CSS, TypeScript</div>

                <div className="row"> 
                    <div className="col-sm-6 fs-5 fw-bold">&#x2022; Frameworks & Libraries</div>
                </div>
                <div className="col-sm-12 fs-6">Angular, React, Flask, Jest, Express(Node.js), Tensorflow,Keras, OpenCV, OpenLayers</div>
                
                <div className="row"> 
                    <div className="col-sm-6 fs-5 fw-bold">&#x2022; Developer Tools</div>
                </div>
                <div className="col-sm-12 fs-6">MySQL, PostgreSQL, Git, Linux Ubuntu, Anaconda, UTM, GCP, VS Code, MongoDB, GoogleEarth</div>

                <div className="row"> 
                    <div className="col-sm-6 fs-5 fw-bold">&#x2022; Certificate</div>
                </div>
                <div className="col-sm-12 fs-6">Machine Learning</div>
            </div>
        </div>
    );
}