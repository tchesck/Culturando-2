import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './componentes/Nav/Navbar.js';
import Home from './componentes/Home/Home.js';
import Section from './componentes/Section/Section.js';
import Footer from './componentes/Footer/Footer.js';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Section />
      <Footer />
      
    </BrowserRouter>
  )
}
export default App;