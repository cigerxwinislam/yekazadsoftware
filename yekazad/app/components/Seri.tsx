// Bismillahirahmanirahim

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Yekazad Software Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>

            <NavDropdown title="WEB SİTELERİ" id="basic-nav-dropdown">
              <NavDropdown.Item href="/web">Tanıtım Siteleri</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Blog Siteleri
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">E Ticaret Siteleri</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sosyal Medya Siteleri
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="MOBİL UYGULAMALAR" id="basic-nav-dropdown">
              <NavDropdown.Item href="/android">Android Uygulamaları</NavDropdown.Item>
              <NavDropdown.Item href="/ios">
                İos Uygulamaları  
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="KURSLAR" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;