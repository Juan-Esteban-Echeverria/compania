import Carousel from 'react-bootstrap/Carousel';

function Carrusel(props) {
  return (
    <Carousel className='carrusel'>
      <Carousel.Item>
        <a href='/Breve-Eternidad'>
          <img
            className="d-bloc w-100 fotocarrusel"
            src={props.foto1}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <h3 className='shadow'>Breve Eternidad</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='/Breve-Eternidad'>
          <img
            className="d-bloc w-100 fotocarrusel"
            src={props.foto2}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <h3 className='shadow'>Breve Eternidad</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href='/Breve-Eternidad'>
          <img
            className="d-bloc w-100 fotocarrusel"
            src={props.foto3}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <h3 className='shadow'>Breve Eternidad</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;