import React from 'react';

import Card from 'react-bootstrap/Card';
import InnerModal from './innermodal';


function Fotos(props) {
    const [modalShow, setModalShow] = React.useState(false);

  return (
        <Card className='border border-white'>
            <Card.Img variant="top" src={props.foto} className='fotocarta fotos-obra' onClick={() => setModalShow(true)}/>
            <InnerModal show={modalShow} onHide={() => setModalShow(false)} index={props.index}/>
            <Card.Body>
            <Card.Title className='fw-bold fs-3'>
                {props.nombre}
            </Card.Title>
            <Card.Text className='fs-5'>
                {props.descripcion}
            </Card.Text>
            </Card.Body>
        </Card>
  );
}

export default Fotos;