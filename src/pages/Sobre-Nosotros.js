import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navegacion from '../componentes/navbar';
import Pie from '../componentes/pie';

function SobreNosotros() {
    return (
      <div className="App">
        <Navegacion/>

        <Container className='mb-5'>

        <Row>
          <Col className='text-center pt-3 mb-5'>
            <img src={require('../img/banner-nosotros.JPEG')} className='banner-nosotros' alt='nosotros'/>
          </Col>
        </Row>

            <Row xs={1} md={1} lg={2}>
                <Col className='mb-5'>
                    <h1 className='mb-5'>SOBRE NOSOTROS</h1>
                    <p>
                        Cía. Compañía se consolida el año 2022. Con un especial interés en el ámbito convivial y comunicacional del ser humano. 
                        Levanta preguntas en torno a la pertenencia, el afecto y el sentido a través del cuerpo y la palabra. 
                        Han trabajado basándose tanto en dramaturgias propias como en textos de otrxs autorxs como Samuel Beckett, Victoria Szpunberg y Michel Azama
                    </p>
                </Col>
                <Col>
                    <div className=''>
                        <img src={require('../img/ojos1.JPEG')} className='ojos-nosotros ojo1' alt='nosotros'/>
                        <img src={require('../img/ojos2.JPEG')} className='ojos-nosotros ojo2' alt='nosotros'/>
                        <img src={require('../img/ojos3.jpg')} className='ojos-nosotros ojo3' alt='nosotros'/>
                    </div>
                </Col>
            </Row>

        </Container>
        <Pie/>
      </div>
    );
  }
  
  export default SobreNosotros;