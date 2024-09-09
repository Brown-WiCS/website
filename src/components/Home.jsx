import React from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from './Landing.jsx';
import Mission from './Mission.jsx';
import Calendar from './Calendar.jsx';
import Socials from './Socials.jsx';
import Sponsors from './Sponsors.jsx';
import Contact from './Contact.jsx'

const Home = () => {
    return (
      <div className="content-container">
        <main>
          <section id="Landing">
            <Landing />
          </section>
          <section id="Mission">
            <Mission />
          </section>
          <section id="Calendar">
            <Calendar />
          </section>
          <section id="Socials">
            <Socials />
          </section>
          <section id="Sponsors" style={{minHeight: "60vh", background: '#182C37'}}>
            <Sponsors />
          </section>
          <section id="Contacts">
            <Contact />
          </section>
        </main>
      </div>
    );
  };
  
  export default Home;
  