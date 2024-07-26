import './Page.css';

export default function Experience(){
    return(
        <div>
            {/* Education */}
            <div className="row">
                <div className="row fs-3">
                    <div className="col-sm-12">Education</div>
                </div>

                {/* USC */}
                <div className="row fs-5 ms-2">
                    <div className="row"> 
                        <div className="col-sm-6 fs-5 fw-bold">&#x2022; University of Southern California</div>
                        <div className="col-sm-5 fs-6 ms-3">Los Angeles, CA</div>
                    </div>
                    <div className="row ms-1">
                        <div className="col-sm-6 fs-5">Master of Science in Computer Science</div>
                        <div className="col-sm-6 fs-6">Expected Graduation: December 2024</div>
                    </div>
                </div>

                {/* NTHU */}
                <div className="row ms-2 mt-3">
                    <div className="row"> 
                        <div className="col-sm-6 fs-5 fw-bold">&#x2022; National Tsing Hua University</div>
                        <div className="col-sm-5 fs-6 ms-3">Hsinchu City, Taiwan</div>
                    </div>
                    <div className="row ms-1">
                        <div className="col-sm-6 fs-5">Master of Science in Mechanical Engineer</div>
                        <div className="col-sm-6 fs-6">June 2011</div>
                    </div>
                </div>

                {/* NCTU */}
                <div className="row fs-5 ms-2 mt-3">
                    <div className="row"> 
                        <div className="col-sm-6 fs-5 fw-bold">&#x2022; National Chiao Tung University</div>
                        <div className="col-sm-5 fs-6 ms-3">Hsinchu City, Taiwan</div>
                    </div>
                    <div className="row ms-1">
                        <div className="col-sm-6 fs-5">Bachelor of Science in Mechanical Engineer</div>
                        <div className="col-sm-6 fs-6">June 2009</div>
                    </div>
                </div>

            </div>

            {/* Work Experience */}
            <div className="row mt-3">
                <div className="row fs-3">
                    <div className="col-sm-12">Work Experience</div>
                </div>
            </div>

            {/* Fox and Bear */}
            <div className="row fs-5 ms-2">
                <div className="row"> 
                    <div className="col-sm-6 fs-5 fw-bold">&#x2022; Fox and Bear Global Inc</div>
                    <div className="col-sm-5 fs-6 ms-3">Los Angeles, CA</div>
                </div>
                <div className="row ms-1">
                    {/* Web Developer and Data Analyst Intern */}
                    <div className="col-sm-6 fs-5">Web Developer and Data Analyst Intern</div>
                    <div className="col-sm-6 fs-6">June 2023 - August 2023 </div>
                    <div className="col-sm-12 fs-6">-Implemented a responsive eCommerce website and achieved Search Engine Optimization(SEO) with WIX, produced 2.3X growth of unique visitors.</div>
                    <div className="col-sm-12 fs-6">-Saved 70% advertisement cost by strategy optimization with analysis of Amazon Ads data and utilize the budget on branding to increase 2X sales.</div>
                </div>
            </div>

            {/* TSMC */}
            <div className="row fs-5 ms-2 mt-3">
                <div className="row"> 
                    <div className="col-sm-6 fs-5 fw-bold">&#x2022; Taiwan Semiconductor Manufacturing Company(TSMC)</div>
                    <div className="col-sm-5 fs-6 ms-3">Taichung, Taiwan</div>
                </div>
                <div className="row ms-1">
                    {/* Team Leader */}
                    <div className="col-sm-6 fs-5">Team Leader</div>
                    <div className="col-sm-6 fs-6">July 2019 - July 2022</div>
                    <div className="col-sm-12 fs-6">-Boosted 10% wafer output without compromising quality by the de-bottleneck process through critical thinking and data engineering.</div>
                    <div className="col-sm-12 fs-6">-Led team to save USD $50M by optimization and reconfiguration of the process, won 3rd place award in Continuous Improvement Competition.</div>
                    <div className="col-sm-12 fs-6">-Coordinated cross-department engineers to develop special application process of automotive chips.</div>
                    
                    {/* Senior Process Engineer */}
                    <div className="col-sm-6 fs-5 mt-2">Senior Process Engineer</div>
                    <div className="col-sm-6 fs-6 mt-2">Septemper 2012 - July 2019</div>
                    <div className="col-sm-12 fs-6">-Promoted to Senior Process Engineer within 1.5 years(average: 3 to 5 years) with a proven track record of consistently exceeding goals.</div>
                    <div className="col-sm-12 fs-6">-Improved 10% signal-to-noise ratio through Design of Experiments(DOE) with a 4-people team collaboration.</div>
                    <div className="col-sm-12 fs-6">-Coached colleagues to renovate standard operation procedure document to reduce hold lot by 10%, elected as Most Popular Engineer.</div>
                    
                </div>
            </div>
        </div>

    );
}