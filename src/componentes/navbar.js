import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navegacion() {
  return (
    <Navbar bg="light" expand="lg" className='fw-bold fs-4 sticky-top'>
      <Container>
        <Navbar.Brand href="#home" className='fs-4'>Cía. Compañía</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <NavDropdown title="Obras" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Breve Eternidad</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Quienes Somos" id="basic-nav-dropdown" className='px-5'>
              <NavDropdown.Item href="#action/3.1">Elenco</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Trayectoria</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contacto">Contacto</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;