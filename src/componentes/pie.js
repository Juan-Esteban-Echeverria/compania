import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <div className="bg-dark text-light" id="contacto">
            <Container>
                <Row sm={1} md={2} lg={4} className='px-5 text-center'>
                    <Col>
                        <a href='http://www.laong.org/' target="blank">
                            <img src={require('../img/logos/la-ong.png')} className='logo' alt='logo'/>
                        </a>
                    </Col>
                    <Col>
                        <a href='https://espacioo.com/' target="blank">
                            <img src={require('../img/logos/espacio-o.png')} className='logo' alt='logo'/>
                        </a>
                    </Col>
                    <Col>
                        <a href='https://artes.uc.cl/' target="blank">
                            <img src={require('../img/logos/logo-uc.png')} className='logo' alt='logo'/>
                        </a>
                    </Col>
                    <Col>
                        <a href='https://m.facebook.com/Teatro-Forte-172399342810398/?__tn__=%2Cg' target="blank">
                            <img src={require('../img/logos/teatro-forte.png')} className='logo' alt='logo'/>
                        </a>
                    </Col>
                </Row>
            </Container>
            

        </div>
    )
    
}

export default Footer