import React, {Suspense,} from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {
  Navbar,
  Footer,
  Blog,
} from "./components/components";

const Resources = React.lazy(() => import('./components/Resources'));
const Home = React.lazy(() => import('./components/Home'));

function App() {

  return (
    <Router>
      <div className="app">
        <div id="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/website" element={<Navigate to="/home" />} />
          <Route path="/home" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          } />
          <Route path="/resources" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Resources />
            </Suspense>
          } />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
