import React from 'react';
import { Jumbotron, Card, Container, Row, Col} from 'react-bootstrap';
import document from './document.png'
import change from './change.svg'
import family from './family.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


export default function PrefDocuments() {
  const { t } = useTranslation()
    return (
      <Jumbotron>
        <h1>{t('PETITIONS')}</h1>
        <p>
          {t('explain')}
        </p>

        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                <img src={family} width="60" height="40" className="d-inline-block align-top" alt=""/>
                  <Card.Title>{t('familyUnion')}</Card.Title>
                  <Card.Text>
                  {t('familyText')}
                  </Card.Text>
                  <Link to="/FamilyUnion">{t('goFamily')}</Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                  <Card.Body>
                    <img src={document} width="60" height="40" className="d-inline-block align-top" alt=""/>
                    <Card.Title>{t('file')}</Card.Title>
                    <Card.Text>
                        {t('fileText')}
                    </Card.Text>
                    <Link to="/FileCombination">{t('goFile')}</Link>
                  </Card.Body>
                </Card>    
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <img src={change} width="60" height="40" className="d-inline-block align-top" alt=""/>
                  <Card.Title>{t('canton')}</Card.Title>
                  <Card.Text>
                    {t('cantonText')}
                  </Card.Text>
                  <Link to="/CantonChange">{t('goCanton')}</Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <img src={change} width="60" height="40" className="d-inline-block align-top" alt=""/>
                  <Card.Title>{t('camp')}</Card.Title>
                  <Card.Text>
                   {t('campText')}
                  </Card.Text>
                  <Link to="/CampChange">{t('goCamp')}</Link>
                </Card.Body>
              </Card>
            
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
