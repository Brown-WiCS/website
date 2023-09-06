import React from "react";
import "../styles/Mission.css";

const Mission = () => {
  return (
    <div className="content-container">
      <h1 className="section-header">Mission</h1>
      <div className="text-container">
        Women in Computer Science (WiCS) was formed by female undergraduate
        students at Brown in the late 1980s to increase the participation of
        women in the field of Computer Science. <br></br>
        <br />
        Affiliated with the Brown University Department of Computer Science,
        WiCS seeks to improve diversity and inclusion for underrepresented
        gender minorities in the technology industry through our{" "}
        <span class="purple">
          {" "}
          social, mentoring, and outreach programs
        </span>. <br></br>
        <br />
        One highlight of WiCS is its organization of{" "}
        <span class="purple"> social events</span> for female students within
        the Computer Science department to meet and get to know each other, like
        our scavenger hunt. We also enjoy partnering with other tech
        organizations on campus, like MOSAIC+ and Hack@Brown, to{" "}
        <span class="purple">build bridges across Brown's tech community</span>.
        Lastly, we love to host events with industry sponsors to connect our
        members with opportunities beyond the classroom.
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Mission;
