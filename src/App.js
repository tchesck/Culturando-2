import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.scss';
import Nav from './Componentes/Home/nav/nav'

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
    </BrowserRouter>
  )
}
export default App;
