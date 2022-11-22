import React from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="m-0 bg-white-100">
      <Navbar />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
