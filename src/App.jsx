import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Contact,
  Socials,
  Landing,
  Mission,
  Calendar,
  Footer,
  Resources,
} from "./components/components";

function App() {
  return (
    <div className="app">
      <div id="navbar">
        <Navbar />
      </div>
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
        <section id="Resources">
          <Resources />
        </section>
        <section id="Socials">
          <Socials />
        </section>
        <section id="Contacts">
          <Contact />
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
