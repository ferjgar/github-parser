import React, { useContext }  from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Form, Button,Spinner, Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { UsernameContext } from './contexts/UsernameContext';
import { Pages } from './Pages';
import './App.css';

const App: React.FC = () => {
  const { username, setUsername } = useContext(UsernameContext);

  return (
    <Router>
          <Container id="app-page">
      <Row>
        <Col>

        {username
          ?         <Button    size="lg" className="text-right"
          variant="outline-warning" onClick={() => setUsername('')}>Logout</Button>

          :         <Button    size="lg"
          variant="warning" href="/login">Login</Button>

        }


        <Pages />
        </Col>
        </Row>
        </Container>
    </Router>
  );
}

export default App;
