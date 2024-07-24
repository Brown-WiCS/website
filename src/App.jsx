import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {
  Navbar,
  Footer,
  Home,
  Resources,
  Blog
} from "./components/components";

function App() {
  return (
    <Router>
      <div className="app">
        <div id="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/website" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
