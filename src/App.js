import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Family   from './Dashboard/FamilyUnion';
import './Dashboard/PrefDocuments';
import logo from './logom.png';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import { FileCombination } from './Dashboard/FileCombination';
import { CantonChange } from './Dashboard/CantonChange';
import { CampChange } from './Dashboard/CampChange';
import { useTranslation } from 'react-i18next'
import './translations/i18n'
import PrefDocuments from './Dashboard/PrefDocuments';






function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <Router>
        <Container>
          <Row>
            <Col>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                  <img src={logo} width="60" height="40" className="d-inline-block align-top" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link><Link to="/PrefDocuments">PREF {t('document')}</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                <NavDropdown title={t('language')} id="collasible-nav-dropdown">
                <Navbar.Brand >
                  <Nav>
                <Nav.Link><Link className='image' onClick={() => changeLanguage('en')}>EN</Link></Nav.Link>
                </Nav>
                </Navbar.Brand>
                <Navbar.Brand >
                  <Nav>
                <Nav.Link><Link className='image' onClick={() => changeLanguage('de')}>DE</Link></Nav.Link>
                </Nav>
                </Navbar.Brand>
                <Navbar.Brand >
                  <Nav>
                <Nav.Link><Link className='image' onClick={() => changeLanguage('fr')}>FR</Link></Nav.Link>
                </Nav>
                </Navbar.Brand>
                <Navbar.Brand >
                  <Nav>
                <Nav.Link><Link className='image' onClick={() => changeLanguage('it')}>IT</Link></Nav.Link>
                </Nav>
                </Navbar.Brand>
                <Navbar.Brand >
                  <Nav>
                <Nav.Link><Link className='image' onClick={() => changeLanguage('tr')}>TR</Link></Nav.Link>
                </Nav>
                </Navbar.Brand>
                <Navbar.Brand >
                  <Nav>
                <Nav.Link><Link className='image' onClick={() => changeLanguage('ar')}>AR</Link></Nav.Link>
                </Nav>
                </Navbar.Brand>
                <Navbar.Brand >
                  <Nav>
                <Nav.Link><Link className='image' onClick={() => changeLanguage('kr')}>KR</Link></Nav.Link>
                </Nav>
                </Navbar.Brand>
                </NavDropdown>
            </Navbar>
            </Col>
          </Row>
          <Row>
            <Col>
                 <Alert variant="success">
                    <p>{t('info')}</p>
                </Alert>
                    <Route path='/FamilyUnion' component={Family}/>                   
                    <Route path='/fileCombination' component={FileCombination}/>
                    <Route path='/CantonChange' component={CantonChange}/>
                    <Route path='/CampChange' component={CampChange}/>
                    <Route path='/'   component={PrefDocuments}/>
            </Col>
          </Row>
        </Container>
        <div>
      <p class="copyright">©️ {t('copy')} 2021- {t('creat')} Mehmet Sökmen</p>
        </div>
    </Router>
  );
}

export default App;
