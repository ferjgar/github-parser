import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button,Spinner, Jumbotron, Container, Row, Col } from 'react-bootstrap';
// I hate this relative paths...
import { UsernameContext } from '../contexts/UsernameContext';
import { getRepos, getUserData } from '../services/github-service';

const Login = () => {
  const history = useHistory();
  const { setUsername, setUserData, setUserRepos } = useContext(UsernameContext);
  const [ stateUsername, setStateUsername ] = useState();
  const [ loading, setLoading ] = useState(false);
  const [ invalid, setInvalid ] = useState(false);

  const onSubmit = async (e : any) => {
    e.preventDefault();

    if (stateUsername) {
      setLoading(true);

      const response = await getUserData(stateUsername)
        .catch(err => {
          // probably 404, would be better
          setStateUsername('');
          setInvalid(true);
        });

      // naive way tyo check is an object is empty
      if (response && Object.keys(response).length) {
        const responseRepos = await getRepos(stateUsername);

        setUsername(stateUsername);
        setUserData(response);
        setUserRepos(responseRepos);

        history.push({ pathname: '/' });
      }
    }

    setLoading(false);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="8">
          <Jumbotron>
            <Form onSubmit={(e:any) => onSubmit(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Write a GitHub username:</Form.Label>
                <Form.Control
                  autoFocus
                  onChange={(e: any) => {
                    setStateUsername(e.target.value);
                    setInvalid(false);
                  }}
                  placeholder="e.g. fabpot"
                  readOnly={loading}
                  required
                  isInvalid={invalid}
                  size="lg"
                  type="text"
                />
                <Form.Control.Feedback type="invalid">
                  Username is invalid, please try again
                </Form.Control.Feedback>
              </Form.Group>
              <Button size="lg" block variant="primary" type="submit" disabled={!stateUsername || loading}>
                {loading
                  ? <Spinner
                      animation="border"
                      aria-hidden="true"
                      as="span"
                      role="status"
                      size="sm"
                    />
                  : <span>Submit username</span>
                }
              </Button>
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
