// Bismillahirahmanirahim

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Yekazad Software Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/kurumsal">Hakkımızda</Nav.Link>
            <NavDropdown title="Artificial Intelligence " id="basic-nav-dropdown">
              <NavDropdown.Item href="/jiriyacekiri/">Görüntü İşleme</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Nesne Tanımlama
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Ses İşleme</NavDropdown.Item>

              <NavDropdown.Item href="hizmetler/uygulama">
              Doğal Dil İşleme</NavDropdown.Item>
            </NavDropdown>






            <NavDropdown title="Web Sites & Apps" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/"> Tanıtım Siteleri</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Blog Siteleri 
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Sosyal Medya Siteleri</NavDropdown.Item>
            


            
              <NavDropdown.Item href="hizmetler/uygulama">
              E ticaret Siteleri</NavDropdown.Item>
            </NavDropdown>


    
            <NavDropdown title="Mobile Apps " id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Android Uygulamaları</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Ios Uygulamaları
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Çoklu Platform Uygulamaları</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Robotics" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Arduino</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Rasberry pi
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Otonom</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Courses & Education" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Android Dersleri</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Web Dersleri
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Yapay Zeka Dersleri</NavDropdown.Item>

              
              <NavDropdown.Item href="hizmetler/uygulama">
              Robotik Programlama Dersleri</NavDropdown.Item>
            


            
              <NavDropdown.Item href="hizmetler/uygulama">
              Siber Güvenlik Dersleri</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="/iletisim">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;