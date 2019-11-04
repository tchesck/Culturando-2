import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './componentes/Nav/Navbar.js';
import Home from './componentes/Home/Home.js';
import Section from './componentes/Section/Section.js';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Section />
      
    </BrowserRouter>
  )
}
export default App;