import React, { useState } from "react";
import "../styles/Resources.css";
import { IoIosLink } from "react-icons/io";

const wicsOpportunities = {
  "Join WiCS" : [
    { name: "Join our Slack and listserv", url: "https://docs.google.com/forms/d/e/1FAIpQLSdKsWu_BiHhULc0JCWs1w46ufc7RKOG5ijY3nbAWFWKrNu-Ww/viewform" },
    { name: "Join our LinkedIn Group", url: "https://www.linkedin.com/groups/13073209/" },
    { name: "Follow us on Instagram", url: "https://www.instagram.com/brownuwics/" },
  ],
  "Get Involved with WiCS" : [
    { name: "Apply for our Executive Board!"},
    { name: "Sign up to be a mentor / mentee"},
  ],
  "Network with WiCS" : [
    { name: "Boost your exposure by writing an article for the WiCS blog" },
    { name: "Add your resume to our resume book"},
  ]
}

const brownOpportunities = {
  "Clubs / Extracurriculars" : [
    { name: "Get involved with research"},
    { name: "Become a teaching assistant"},
  ],
  "Events / Opportunities" : [
    { name: "Participate in Hack @ Brown"},
    { name: "Join Full Stack @ Brown"},
    { name: "Apply for a Scholarship to the Grace Hopper Conference"},
  ],
  "Network with Brown" : [
    { name: "Look on BrownConnect and Handshake" },
  ]
}

const recruiting = {
  "Recruiting" : [
    { name: "Writing resumes and cover letters", url: "https://docs.google.com/document/d/1d2AZEGblXeRojG3rh1z0HShwo0EuX2y7xf_EHB1vWko/edit#heading=h.pnpkm55qzunt" },
    { name: "Preparing for and attending career fairs", url: "https://docs.google.com/document/d/1O477Ee27GdbTPKbOiB6cOxdcawvwuZcHwhCXmqHzDbI/edit#heading=h.n5aq8432cv5o" },
    { name: "Applying for internships", url: "https://docs.google.com/document/d/1x-2YlXp2WjQzphbOfFKZKg_HYBmUntN5J6ZSE0FdKtI/edit#heading=h.cxqddiixfg56" },
    { name: "Interviewing", url: "https://docs.google.com/document/d/1mmsPI8QYhpHddDgPMjs_0QT4BrRcfaMQK6My3VbmpoM/edit#heading=h.74tyt9v1uk03" },
    { name: "Internships / programs for underclassmen", url: "" },
  ],
  "Careers" : [
    { name: "SWE / PM" },
    { name: "Startups / Entrepeneurship" },
    { name: "Graduate School" },
  ],
  "Network with Brown" : [
    { name: "Look on BrownConnect and Handshake"},
    { name: "Technology & Tech Ventures", url: "https://sites.google.com/brown.edu/cce-resource-library/technology-and-tech-ventures"}
  ]
}


const Resources = () => {
  const [selectedOption, setSelectedOption] = useState('wics');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderSubcategoryLinks = (resources) => {
    return (
      <div className="subcategory-container">
        {Object.keys(resources).map((subcategory, index) => (
          <div className="subcategory-section" key={index}>
            <h3>{subcategory}</h3>
            <ul>
              {resources[subcategory].map((resource, i) => (
                <li key={i}>
                  {resource.url ? (
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                        {resource.name} <IoIosLink style={{ marginLeft: "5px" }}/>
                    </a>
                    ) : (
                       <span className="resource-name">{resource.name}</span> // Name without link
                    )}
                 </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="resources">
      <main>
        <section>
          <div className="content-container">
            <h1 className="section-header" style={{ paddingTop: "20px" }}>Resources</h1>
              <div className="select-wrapper">
              <span>Tell me about</span>
              <select onChange={handleSelectChange} value={selectedOption}>
                <option value="wics">Opportunities with WiCS</option>
                <option value="brown">Opportunities at Brown</option>
                {/* <option value="tips">Tips and Tricks</option> */}
                <option value="recruiting">Recruiting & Careers</option>
              </select>
              </div>
              <div>
              {selectedOption === 'wics' && (
                <div>
                  {renderSubcategoryLinks(wicsOpportunities)}
                </div>
              )}

              {selectedOption === 'brown' && (
                <div>
                  {renderSubcategoryLinks(brownOpportunities)}
                </div>
              )}

              {selectedOption === 'recruiting' && (
                <div>
                  {renderSubcategoryLinks(recruiting)}
                </div>
              )}
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default Resources;