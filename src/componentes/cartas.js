import React from 'react';

import Card from 'react-bootstrap/Card';
import Modales from './modales';


function Cartas(props) {
    const [modalShow, setModalShow] = React.useState(false);

  return (
        <Card className='border border-white position-relative'>
            <Card.Img variant="top" src={props.foto} className='fotocarta fotos-trabajos' onClick={() => setModalShow(true)}/>
            <Modales show={modalShow} onHide={() => setModalShow(false)} 
                foto1={props.foto} 
                foto2={props.foto} 
                foto3={props.foto} 
                foto4={props.foto}
                titulo={props.titulo}
                año={props.año}
            />
            <Card.Body>
            <h1 className='position-absolute top-50 start-50 translate-middle text-light shadow2 '>
              {props.titulo}
            </h1>
            </Card.Body>
        </Card>
  );
}

export default Cartas;