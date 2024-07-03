import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

import './App.css';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

  return (
    <div className="App">
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<React.Fragment><Header /><Herosection /><About /><Project /><Websites /><Experience /></React.Fragment>} />
          <Route path="/tripadvisor" element={<Tripadvisor />} />
          <Route path="/bulkmailoverview" element={<Mailoverview />} />
          <Route path="/todooverview" element={<Todo />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
