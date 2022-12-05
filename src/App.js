import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navegacion from './componentes/navbar';
import Carrusel from './componentes/carrusel';
import Footer from './componentes/pie';

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <Carrusel/>
      <Footer/>
    </div>
  );
}

export default App;
