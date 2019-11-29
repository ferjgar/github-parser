import React, { useContext }  from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { UsernameContext } from './contexts/UsernameContext';
import { Pages } from './Pages';
import './App.css';

const App: React.FC = () => {
  const { username, setUsername } = useContext(UsernameContext);

  // this must be better
  const history = useHistory();
  const location = useLocation();
  const isRepoPage = location.pathname === '/repositories';

  return (
    <Container id="app-page">
      <Row className="mb-4">
        <Col>
          {username && <Button
            size="lg"
            className="float-right ml-2"
            variant="outline-warning"
            onClick={() => setUsername('')}
            >
              Logout
            </Button>
          }
          {isRepoPage && <Button
            size="lg"
            className="float-right"
            variant="warning"
            onClick={() => history.push({ pathname: '/' })}
            >
              Go back home
            </Button>
          }

        </Col>
      </Row>
      <Row>
        <Col>
          <Pages />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
