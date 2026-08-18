import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Websites from './components/websites'
import About from './components/skills';
import Project from './components/Project';
import Tripadvisor from './components/tripadvisor';
import Todo from './components/todooverview';
import Mailoverview from './components/bulkmailoverview';
import Experience from './components/experience';
import Skills from './components/skills';
import InvoiceOverview from './components/invoiceiverview';

import AirbnbOverview from './components/airbnboverview';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<React.Fragment><Header /><Herosection /><About /><Project /><Websites /><Experience /></React.Fragment>} />
          <Route path="/invoiceoverview" element={<InvoiceOverview />} />
          <Route path="/tripadvisor" element={<Tripadvisor />} />
          <Route path="/bulkmailoverview" element={<Mailoverview />} />
          <Route path="/todooverview" element={<Todo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/airbnboverview" element={<AirbnbOverview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
