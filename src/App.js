import React from 'react';
import './style.css';
import NavBar from './Navbar';
import Main from './Main';
import Portfolio from './Portfolio'
import About from './About';
import Footer from './Footer';
import ContactSec from './ContactSec';
function App() {
  return (
    <div>
      <NavBar/>
      <Main/>
      <About/>
      <Portfolio/>
      <ContactSec/>
      <Footer/>
    </div>

  )
}

export default App;
