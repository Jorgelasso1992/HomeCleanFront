import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './componentes/home'
import BarraNavegacion from './componentes/barraNavegacion'
import RegistrarAdmin from './componentes/registarAdmin'
import RegistrarUsuario from './componentes/registrarUsuario'
import IngresarDocente from './componentes/ingresarDocente'
import SeccionTareas from './componentes/seccionTareas'
import IngresarAdmin from './componentes/ingresarAdmin'
import AdministradorDocentes from './componentes/administradorDocentes'


function App() {
  return (
    <div>
      <Router>
        <BarraNavegacion/>
        <Route path='/' exact component={Home}/>
        <Route path='/registrarAdmin' exact component={RegistrarAdmin}/>
        <Route path='/registrarUsuario' exact component={RegistrarUsuario}/>
        <Route path='/ingresarDocente' exact component={IngresarDocente}/>
        <Route path='/seccionTareas' exact component={SeccionTareas}/>
        <Route path='/ingresarAdmin' exact component={IngresarAdmin}/>
        <Route path='/administradorDocentes' exact component={AdministradorDocentes}/>
      </Router>
    </div>
  );
}

export default App;
