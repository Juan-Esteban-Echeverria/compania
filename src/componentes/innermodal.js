import Modal from 'react-bootstrap/Modal';
import InnerCarrusel from './innercarrusel';

function InnerModal(props) {
  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Body className='bg-dark'>
        <InnerCarrusel
          index = {props.index}
          foto1={require('../img/eternidad/eternidad1.JPEG')}
          foto2={require('../img/eternidad/eternidad2.JPEG')}
          foto3={require('../img/eternidad/eternidad3.JPEG')}
          foto4={require('../img/eternidad/eternidad4.JPEG')}
          foto5={require('../img/eternidad/eternidad5.JPEG')}
          foto6={require('../img/eternidad/eternidad6.JPEG')}
          foto7={require('../img/eternidad/eternidad7.JPEG')}
          foto8={require('../img/eternidad/eternidad8.JPEG')}
          foto9={require('../img/eternidad/eternidad9.JPEG')}
          foto10={require('../img/eternidad/eternidad10.JPEG')}
          foto11={require('../img/eternidad/eternidad11.JPEG')}
          foto12={require('../img/eternidad/eternidad12.JPEG')}
        />
      </Modal.Body>

    </Modal>
  );
}



export default InnerModal