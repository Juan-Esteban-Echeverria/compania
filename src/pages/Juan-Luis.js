import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

import Navegacion from '../componentes/navbar';
import Cartas from '../componentes/cartas';
import Pie from '../componentes/pie';

function JuanLuis() {
    return(
        <div className='App'>
            <Navegacion/>

            <Row className='pb-5'>
                <Col>
                <img src={require('../img/perfiles/juan.jpg')} alt='juan' className='fotoperfil'/>
                </Col>
                <Col className='position-relative'>
                    <div className='position-relative top-50 start-50 translate-middle me-5'>
                        <h1>JUAN LUIS DE CAMINO</h1>
                        <h1 className='fw-bolder mt-3'>DIRECTOR</h1>
                        <div className='d-grid gap-2 d-lg-block sticky-top'>
                            <Button className='btn-light btn-outline-dark btn-lg mt-5 me-5' href='#biografia'>BIOGRAFIA</Button>
                            <Button className='btn-light btn-outline-dark btn-lg mt-5 me-5 px-4' href='#obras'>OBRAS</Button>
                            <Button className='btn-light btn-outline-dark btn-lg mt-5 me-5'>CONTACTO</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        <Container className='my-5'>

            <Row xs={1} md={2} className='text-center mb-5 pb-5'>
                <Col>
                    <img src={require('../img/perfiles/juan2.jpg')} alt='juan' className='fotoperfil2 mb-5'/>
                </Col>
                <Col className='text-start' >
                    <h1 id='biografia'>BIOGRAFÍA</h1>
                        <hr></hr>
                    <div className='lh-lg fs-5'>
                        <p>Actor especializado en dirección teatral y la interpretación de teatro musical contemporáneo. Cuenta con experiencia en dirección de obras teatrales e interpretación musical. Miembro fundador de la compañía de Nuevo Teatro Musical Oído Medio desde Junio del 2018, compañía que trabaja a partir del desarrollo de estrategias traspasadas desde la composición musical al desarrollo de lenguaje escénico, enfocándose en performances de carácter site specific (“Mute”, “Asepsis”, “Como al lado” e “Insomnio”). Paralelo a su trabajo como director de escena y actor en dicha compañía, se desarrolla como director de manera independiente explorando aproximaciones a la palabra y al lenguaje, participando en el festival de lecturas dramatizadas catalanas organizado por la Organización Nelson Garrido el año 2018 con las obras “Llueven Vacas” de Carlos Be, y “La máquina de hablar” de Victoria Szpunberg. El 2017 participa en la dirección colectiva del proyecto “La Gallina de 7 cabezas” basado en “La mujer gallina” de Alejandro Moreno, bajo la tutoría de Ana Luz Ormazábal.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget turpis non erat lacinia dignissim ut eget nunc. Cras placerat turpis tellus, in eleifend nunc auctor id. Pellentesque ullamcorper pellentesque pretium. Fusce a ipsum ex. Quisque tincidunt suscipit sollicitudin.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum.</p>
                    </div>
                </Col> 
            </Row>

            <Row xs={1} md={2} lg={3} id='obras'>
          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 1"
                    año="2023"/>

          </Col>

          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 2"
                    año="2023"/>
          </Col>

          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 3"
                    año="2023"/>
          </Col>

          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 4"
                    año="2023"/>
          </Col>

          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 5"
                    año="2023"/>
          </Col>

          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 6"
                    año="2023"/>
          </Col>

          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 7"
                    año="2023"/>
          </Col>

          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 8"
                    año="2023"/>
          </Col>

          <Col>
            <Cartas foto= {require('../img/perfiles/El-mago-de-Oz.jpg')} 
                    titulo="OBRA 9"
                    año="2023"/>
          </Col>
        </Row>

        </Container>

            <Pie/>
        </div>
    )
}

export default JuanLuis