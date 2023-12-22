import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NameAndDate from './components/NameAndDate';
import Foto from './components/Foto';
import Opciones from './components/Opciones';
import Home from './pages/Home';
import Intro from './pages/Home';
import CV from './pages/CV';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';





import './css/App.css';

function App() {
  return (
    <>
      <div className="screen-background">
        <div className="screen-container">
          <NameAndDate />
          <Foto />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Intro" element={<Intro />} />
              <Route path="/CV" element={<CV />} />
              <Route path="/Portfolio" element={<Portfolio/>} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          <Opciones />
        </div>
      </div>
    </>
  );
};
export default App;
