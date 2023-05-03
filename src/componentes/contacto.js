

import Modal from 'react-bootstrap/Modal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalContacto(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <Row>
            <Col className='col-auto'>
                <img src={require('../img/logos/logo-cia.png')} className='logo-contacto' alt='logo'/>
            </Col>
            <Col>
                <Row className='mt-5'>
                    <Col>
                      <a href='mailto:teatrociacia@gmail.com'>
                          <img src={require('../img/logos/email.png')} alt='email' className='icono'/>
                      </a>
                    </Col>
                    <Col>
                      <a href='https://www.instagram.com/teatrociacia/' target={'blank'}>
                        <img src={require('../img/logos/insta.png')} alt='insta' className='icono'/>
                      </a>
                    </Col>
                    <Col>
                      <a href='https://www.youtube.com' target={'blank'}>
                        <img src={require('../img/logos/you.png')} alt='you' className='icono'/>
                      </a>
                    </Col>
                </Row>
            </Col>
        </Row>
      </Modal.Body>

    </Modal>
  );
}



export default ModalContacto