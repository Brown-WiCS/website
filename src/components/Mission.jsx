import React from "react";
import "../styles/Mission.css";

const Mission = () => {
  return (
    <div className="content-container">
      <h1 className="section-header" id="Mission">About Us</h1>
      {/* <div className="comingsoon" >Video introduction coming soon!</div> */}
      <div className="text-container">
        <strong>Women in Computer Science (WiCS)</strong> was formed by female
        undergraduate students at Brown in the late 1980s to increase the
        participation of women in the field of Computer Science. <br></br>
        <br />
        Affiliated with the Brown University Department of Computer Science,
        WiCS seeks to improve diversity and inclusion for underrepresented
        gender minorities in the technology industry through our{" "}
        <span class="purple"> mentoring and outreach programs </span> to connect
        students and the greater Providence community with upperclassmen,
        alumnae, and professors.<br></br>
        <br />
        One highlight of WiCS is its organization of social events for students
        within the Computer Science department to meet and get to know each
        other, such as gingerbread house competitions and scavenger hunts. We
        also enjoy partnering with other tech organizations on campus, like CS
        DUG, Mosaic+, and Hack@Brown, to{" "}
        <span class="purple">build bridges across Brown's tech community</span>.
        Lastly, we love to host events with industry sponsors to connect our
        members with opportunities beyond the classroom.
      </div>
    </div>
  );
};

export default Mission;
