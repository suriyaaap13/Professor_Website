import React from 'react';
import { useState } from 'react';
import Sir from '../../images/sir.JPG';
import './index.css';

export default function Biosketch() {

    const [data, setData] = useState("bio");


    const handleClick = async (info)=>{
        setData(info);
    }


  return (
    <div>
      <main>
        <div className="div1"><img src={Sir} width="340" height="360" alt="Professor" title="" /></div>
        {/* showbio */}
        <div className={`div2 ${data === "bio" ? "bg-white" : "bg-gray-400"}`} onClick={()=>handleClick("bio")}>Biography</div>
        {/* Showresearch */}
        <div className={`div3 ${data === "research" ? "bg-white" : "bg-gray-400"}`} onClick={()=>handleClick("research")}>Research Interest</div>
        {/* Showpublication */}
        <div className={`div4 ${data === "publication" ? "bg-white" : "bg-gray-400"}`} onClick={()=>handleClick("publication")}>Presentation</div>
        <div className="div5">
            {data === "bio" && <div id="bio"  >

                <p><strong>Education</strong></p>
                <ul>
                    <li style={{listStyleType: "none"}}>
                        <ul>
                            <li>PhD (2001): University of Madras, India (<em>Advisor: Dr. Geetha Gopalakrishnan.</em>)</li>
                            <li>MSc (1996): University of Madras, India(<em>Advisor: Dr. A. Anandhan.</em>)</li>
                            <li>BSc (1994): University of Madras, India</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Professional Positions</strong></p>
                <ul>
                    <li style={{ listStyleType: "none" }}>
                        <ul>
                            <li>March 2018- Present: Professor, Department of Chemistry, Indian Institute of Technology Kharagpur, India</li>
                            <li>May 2013- Feb 2018: Associate Professor, Department of Chemistry, Indian Institute of Technology Kharagpur, India</li>
                            <li>Jul 2007- May 2013: Assistant Professor, Department of Chemistry, Indian Institute of Technology Kharagpur, India</li>
                            <li>Nov 2005-May 2007: Postdoctoral Fellow, University of Leeds, Leeds, UK May 2005- Oct 2005: Senior Scientist, FRLHT, Bangalore, India</li>
                            <li>Jan 2002-Jan 2005: Postdoctoral Fellow, University of Cincinnati, Ohio, US</li>
                        </ul>
                    </li>
                </ul>
                <p><strong>Awards and Honors</strong></p>
                <ul>
                    <li style={{ listStyleType: "none" }}>
                        <ul>
                            <li>Bronze Medal, CRSI, India (July 2020)</li>
                            <li>SERB Distinguished Investigator Award (SERB DIA Fellow)(2018)</li>
                            <li>Member of the National Academy of Sciences (2018)</li>
                            <li>Top Teaching Feedback Award (2015, 2017, and 2018)</li>
                            <li>DST-RSC Indo-UK Scientific Seminar (2015)</li>
                            <li>ACS 3-Year Membership Award (2014- 2016)</li>
                            <li>Associate: Indian Academy of Sciences (2009)</li>
                            <li> Indo-UK Science network Programme (RSC- 2009)</li>
                            
                        </ul>
                    </li>
                </ul>

            </div>}
            {data === "research" && <div id="research" >
                <ul>
                    <li style={{ listStyleType: "none" }}>
                        <ul>
                        <li>Synthesis of new Fluorescent photoremovable protecting groups</li>
                        <li>Synthesis and applications of Photoacid generators     </li>
                        <li>Controlled release of Agrochemicals by Sunlight     </li>
                        <li>Visible light Induced Generation of alkyl Triplet Nitrenes     </li>
                        <li>Photoredox catalysis for functionalization of small organic molecules </li>
                            
                        </ul>
                    </li>
                </ul>
                
            </div>}
            {data === "publication" && <div id="publication" >

                <ul>
                    <li style={{ listStyleType: "none" }}>
                    <li>
                        <p><strong> Singh, Pradeep. N. D.</strong> (Invited Lecture), Next Generation Photoremovable Protecting Groups, NOST XVIII Organic Chemistry Conference, IISER Bhopal,August 24-27, 2017.</p>
                      </li>
                    <li>
                        <p><strong> Singh, Pradeep. N. D.</strong> (Invited Lecture), Organic nanoparticles as Photoresponsive drug delivery systems, Gordon Research Conference on Photochemistry, Stonehill College in Easton MA, United States 19-24th july 2015.</p>
                      </li>
                     <li>
                        <p><strong> Singh, Pradeep. N. D.</strong> (Invited Lecture), Targeted Photoresponsive nano drug delivery systems, International Scientific seminar India-UK, Weetwood Hall and Conference Centre Hotel, Leeds, 16-18th February 2015.</p>
                      </li>
                      <li>
                        <p><strong> Singh, Pradeep. N. D.</strong> (Invited Lecture), Fabrication of new photoresponsive nanocarriers for drug delivery, FICS 2014, IIT Guwhati, Dec 4-6th 2014.</p>
                      </li>
                         <li>
                        <p><strong> Singh, Pradeep. N. D.</strong> (Invited Lecture), Single Component Photoresponsive Fluorescent Organic Nanoparticles: Drug delivery System8th Asian Photochemistry Conference (APC-2014), IISER Thiruvananthapuram, India Nov 10-13th 2014</p>
                      </li>
                          <li>
                        <p><strong> Singh, Pradeep. N. D.; Klima, R. F.; Ault, B. S.; Gudmundsdottir, A. D.</strong> Photolytic Studies of a- Azido-Propiophenone Derivatives ACS National Meeting: Philadelphia, Pennsylvania, August, 2004 </p>
                      </li>
                        
                        <li> 
                          <p><strong>Singh, Pradeep. N. D.; Jagadis Sankaranarayanan.; Sarah Mandel.; Ault, B. S.; Gudmundsdottir, A. D.</strong> Photolytic studies of  a-azido prophiophenone-Direct detection of   triplet nitrenes. 3rd Ohio Photochemical Society Meeting, Ohio, May,   2004. </p>
                        </li>
                       
                        <li> 
                          <p><strong>Singh, Pradeep. N. D.; Ability V. Jadhav.; Gudmundsdottir, A. D.</strong> Beta vinyl Azides: Theoretical, Product and Matrix studies and Infrared   Isolation Spectroscopy Investigation. Ralph and Helen Oesper symposium,   Cincinnati, October, 2003. </p>
                        </li>
                        
                        <li> 
                          <p><strong>Singh, Pradeep . N. D.; Abhijit Jadhav.; Ault, B. S.; Gudmundsdottir, A. D.</strong> Photolytic studies of vinyl azides. 2nd Ohio Photochemical Society Meeting, Ohio, April, 2003. </p>
                        </li>
                        
                        <li> 
                          <p><strong>Singh, Pradeep . N. D.; Gudmundsdottir, A. D</strong>. Environmental Friendly Synthesis Of  2H-Azirines.Ralph and Helen Oesper symposium, Cincinnati, October, 2002. </p>
                        </li>
                      
                        <li> 
                          <p><strong>Singh, Pradeep . N. D.; Christman, R. M.; Ault, B. S.; Gudmundsdottir, A. D.</strong> Trapping of Triplet Alkyl Nitrenes using Molecular Oxygen.1st Ohio Photochemical Society Meeting, Ohio, April, 2002. </p>
                        </li>
                        </li>
                    </ul>

            </div>}
        </div>
        
    </main>
    </div>
  )
}
