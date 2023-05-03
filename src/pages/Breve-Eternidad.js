import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navegacion from '../componentes/navbar';
import Pie from '../componentes/pie';
import Fotos from '../componentes/fotos';

function Breve() {
  return (
    <div className="App">
      <Navegacion/>

      <Container className='mb-5 px-5'>

        <Row>
          <Col className='text-center pt-3 mb-5'>
            <img src={require('../img/banner-elenco.JPEG')} className='foto-obra' alt='obra'/>
          </Col>
        </Row>

        <Row xs={1} md={1} lg={2}>

          <Col lg={6}>

            <h1>Breve Eternidad</h1>
            <p className='fs-3'>2023</p>

            <Row xs={1} md={2} lg={2} className='lh-lg fw-semibold mb-5'>
              <Col lg={8}>
                    <b>EQUIPO</b>
                    <Row className='mb-4'>
                      <Col className=''>
                        Elisa Osorio  <br></br>
                        Juan Luis de Camino <br></br>
                        Valentina Tapia <br></br>
                        Camilo Roca <br></br>
                        Atenea Santander <br></br>
                        David Nahmías <br></br>
                        Génesis Nabehelek <br></br>
                        Fernanda Morales <br></br>
                      </Col>
                      <Col className='d-none d-sm-block'>
                        (Dramaturga) <br></br>
                        (Director) <br></br>
                        (As. de Direccion) <br></br>
                        (Compositor) <br></br>
                        (Diseño Integral) <br></br>
                        (Escenografia) <br></br>
                        (Vestuario) <br></br>
                        (Produccion) <br></br>
                      </Col>
                    </Row>
                     
              </Col>

              <Col lg={3}>
                <b>ELENCO</b> <br></br>
                Rocío Fernanda Godoy <br></br>
                José Domingo Sánchez <br></br>
                Agustín Sanhueza <br></br>
                Camila Gatica <br></br>
                Camila Cifuentes <br></br>
              </Col>
            </Row>

          </Col>

          <Col lg={6}>

            <h1 className='mb-5'>Reseña</h1>

            <p style={{textAlign: 'justify'}}>
              En los residuos de la humanidad, una niebla densa se levanta, 
              cubriendo todo páramo con su espesura y llevándose consigo todo recuerdo de quienes quedaron a la espera del fin del mundo. 
              A bordo de un camión, cuatro viajantes se aventuran a cruzar la silenciosa niebla con la misión de llevar a una joven de vuelta a su hogar. 
              Una vieja radio les hace compañía mientras confunden si es el tiempo el que no pasa o si están viajando en círculos. Saben que algo les sucedió, 
              pero no recuerdan qué fue. Y el cuerpo se les ha atrofiado tanto de olvido, 
              que no les queda más que repetir una y otra vez el viaje, el camino, la canción y la historia.
            </p>

            <audio controls className='container px-0 my-5'>
              <source src={require('../img/musica.mp3')} type='audio/mp3'></source>
                Tu navegador no puede reproducir este audio
            </audio>
          </Col>
        </Row>  

        <Row xs={1} md={3} lg={4} className='mt-5'>
          <Fotos foto={require('../img/eternidad/eternidad1.JPEG')} index = {0}/>
          <Fotos foto={require('../img/eternidad/eternidad2.JPEG')} index = {1}/>
          <Fotos foto={require('../img/eternidad/eternidad3.JPEG')} index = {2}/>
          <Fotos foto={require('../img/eternidad/eternidad4.JPEG')} index = {3}/>
          <Fotos foto={require('../img/eternidad/eternidad5.JPEG')} index = {4}/>
          <Fotos foto={require('../img/eternidad/eternidad6.JPEG')} index = {5}/>
          <Fotos foto={require('../img/eternidad/eternidad7.JPEG')} index = {6}/>
          <Fotos foto={require('../img/eternidad/eternidad8.JPEG')} index = {7}/>
          <Fotos foto={require('../img/eternidad/eternidad9.JPEG')} index = {8}/>
          <Fotos foto={require('../img/eternidad/eternidad10.JPEG')} index = {9}/>
          <Fotos foto={require('../img/eternidad/eternidad11.JPEG')} index = {10}/>
          <Fotos foto={require('../img/eternidad/eternidad12.JPEG')} index = {11}/>
        </Row>


      </Container>

    <Pie/>
    </div>
  );
}

export default Breve;
