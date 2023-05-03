import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navegacion from './componentes/navbar';
import Carrusel from './componentes/carrusel';
import Footer from './componentes/pie';

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <Carrusel 
        foto1={require('./img/banner1.JPEG')}
        foto2={require('./img/banner2.jpg')}
        foto3={require('./img/banner3.jpg')}/>
      <Footer/>
    </div>
  );
}

export default App;
