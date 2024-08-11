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
        <Navbar.Brand href="#home">Yekazad Software Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/kurumsal">Hakkımızda</Nav.Link>
            <NavDropdown title="Yapay Zeka " id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Görüntü İşleme</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Nesne Tanımlama
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Ses İşleme</NavDropdown.Item>

              <NavDropdown.Item href="hizmetler/uygulama">
              Doğal Dil İşleme</NavDropdown.Item>
            </NavDropdown>






            <NavDropdown title="Web" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/"> Tanıtım Siteleri</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Blog Siteleri 
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Sosyal Medya Siteleri</NavDropdown.Item>
            


            
              <NavDropdown.Item href="hizmetler/uygulama">
              E ticaret Siteleri</NavDropdown.Item>
            </NavDropdown>


    
            <NavDropdown title="Mobil " id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Android Uygulamaları</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Ios Uygulamaları
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Çoklu Platform Uygulamaları</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Robotik Programlama" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hizmetler/">Arduino</NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/referans">
                Rasberry pi
              </NavDropdown.Item>
              <NavDropdown.Item href="hizmetler/uygulama">
              Otonom</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Eğitim ve Kurslar" id="basic-nav-dropdown">
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


            <Nav.Link href="/iletisim">İletişim</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;