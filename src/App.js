import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './componentes/Nav/Navbar.js';
import Home from './componentes/Home/Home.js';
import Aside from './componentes/Aside/Aside.js';
import Cadastro from './componentes/CadastroMaior/CadastroMaior.js'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Aside} />
      <Route path="/cadastro-maior" component={Cadastro} />
      
      
    </BrowserRouter>
  )
}
export default App;