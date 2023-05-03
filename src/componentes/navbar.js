import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import ModalContacto from './contacto';

function Navegacion() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar bg="light" expand="lg" className='fw-bold fs-4 sticky-top'>
      <Container>
        <Navbar.Brand href="/" className='fs-4'>Cía. Compañía</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <NavDropdown title="Obras" id="basic-nav-dropdown"  className='pe-5'>
              <NavDropdown.Item href="/Breve-Eternidad">Breve Eternidad</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Quienes Somos" id="basic-nav-dropdown" className='pe-5'>
              <NavDropdown.Item href="/Sobre-Nosotros">Sobre Nosotros</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Juan-Luis-De-Camino">Juan Luis De Camino</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={() => setModalShow(true)}>Contacto</Nav.Link>
            <ModalContacto show={modalShow} onHide={() => setModalShow(false)}/>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;