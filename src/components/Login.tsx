import React, { useContext, useState } from 'react';
import { Form, Button,Spinner, Jumbotron, Container, Row, Col } from 'react-bootstrap';
// I hate this relative paths...
import { getRepos, getUserData } from '../services/github-service';
import { UsernameContext } from '../contexts/UsernameContext';

import {
  useHistory,
  useLocation
} from "react-router-dom";

const Login = () => {
  //const { patient } = useContext(MemberProfileContext);
  let history = useHistory();
  let location = useLocation();

  const { username, setUsername, setUserData, setUserRepos } = useContext(UsernameContext);

  const [stateUsername, setStateUsername] = useState();
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);


  console.log('CONTEXT LOGIN', username)
  const onSubmit = async (e : any) => {
    e.preventDefault();
    console.log('submif', stateUsername)

    if (stateUsername) {
      setLoading(true);

    const response = await getUserData(stateUsername);

    // naive way tyo check is an object is empty
    if (Object.keys(response).length) {

      const responseRepos = await getRepos(stateUsername);

      setUsername(stateUsername);
      setUserData(response);
      setUserRepos(responseRepos);

      console.log('REDIRECTING', stateUsername, response, responseRepos)
      history.push({ pathname: '/' });
    } else {
      // we suppose an unknown username, let's clear an try again
      setStateUsername('');
    }

    }
    setLoading(false);

    setValidated(true);
  };

    if (username !== "pepe") {
      return (
        <Container>
  <Row className="justify-content-md-center">
    <Col lg="8">

    <Jumbotron>

<Form noValidate validated={validated} onSubmit={(e:any) => onSubmit(e)}>
 <Form.Group controlId="formBasicEmail">
   <Form.Label>Write a GitHub username:</Form.Label>
   <Form.Control
   size="lg"
   autoFocus
   type="text"
   value={stateUsername}
   readOnly={loading}
   required
   placeholder="e.g. fabpot"
   onChange={(e: any) => setStateUsername(e.target.value)}/>
   <Form.Control.Feedback type="invalid">
              Username is invalid, please try again
            </Form.Control.Feedback>
 </Form.Group>


 <Button size="lg" block variant="primary" type="submit" disabled={!stateUsername || loading}>
        {loading
          ?
          <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />

          :    <span>Submit username</span>

        }
 </Button>
      </Form>
      </Jumbotron>
      </Col>
  </Row>
</Container>


);

}

   return (
       <h1>HAY</h1>
   );

};

export default Login;
