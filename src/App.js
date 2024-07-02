import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Herosection from './components/Herosection';
import About from './components/skills';
import Project from './components/Project';
import Footer from './components/Footer';
import Tripadvisor from './components/tripadvisor';
import Todo from './components/todooverview';
import Mailoverview from './components/bulkmailoverview';
import Experience from './components/experience';
import Skills from './components/skills';

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={<React.Fragment><Header /><Herosection /><About /><Project /><Experience /><Footer /></React.Fragment>}></Route>
          <Route path='/tripadvisor' element={<Tripadvisor />}></Route>
          <Route path='/bulkmailoverview' element={<Mailoverview />}></Route>
          <Route path='/todooverview' element={<Todo />}></Route>
          <Route path="/skills" element={<Skills />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
