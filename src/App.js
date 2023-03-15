import React from 'react';
import Navbar from "./components/Navbar";
import {
  Header,
  AboutUs,
  SpecialMenu,
  Intro,
  FindUs
} from './container';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Intro />
      <FindUs />
    </div>
  );
}

export default App;
