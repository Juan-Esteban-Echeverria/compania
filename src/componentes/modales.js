import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Modales(props) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >

      <Modal.Body>
        <h1 className='text-center my-5'>{props.titulo} ({props.año})</h1>
        <p className='fs-5 mx-3' style={{textAlign: 'justify'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris id libero a nisl blandit rutrum at ut nunc. 
          Suspendisse rhoncus at neque ac maximus. Etiam non lobortis metus, 
          et scelerisque urna. Fusce dapibus augue at odio consequat pharetra eget nec odio. 
          Etiam quam arcu, aliquet convallis luctus a, blandit in.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris id libero a nisl blandit rutrum at ut nunc.
        </p>

        <Row xs={1} md={2} lg={2} className='my-5'>
          <Col className='mb-5'>
            <img src={props.foto1} alt='foto' className='container mini-obra'/>
          </Col>
          <Col className='mb-5'>
            <img src={props.foto2} alt='foto' className='container mini-obra'/>
          </Col>
          <Col>
            <img src={props.foto3} alt='foto' className='container mini-obra'/>
          </Col>
          <Col>
            <img src={props.foto4} alt='foto' className='container mini-obra'/>
          </Col>
        </Row>
      </Modal.Body>

    </Modal>
  );
}



export default Modales