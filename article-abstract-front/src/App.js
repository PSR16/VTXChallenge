import './App.css';
import ArticleTable from './components/ArticleTable';
import AbstractView from './components/AbstractView';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'

function App() {
  const [abstract, setAbstract] = useState('');

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <ArticleTable onArticleClick={setAbstract}/>
          </Col>
          <Col>
            <AbstractView abstract={abstract}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
