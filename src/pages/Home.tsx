import React, { useContext }  from 'react';
import { UsernameContext } from '../contexts/UsernameContext';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Button, Card, Image, Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Repository from '../components/Repository';



const Home = () => {
  const { username, userData, userRepos } = useContext(UsernameContext);
console.log('HOME', username, userData, userRepos)
// TODO: move this check to router
if (!username && !userData) {
  // TODO: move to login
  return null;
}

  return (

    <Container id="home-page">
      <Row>
        <Col md="auto">

        <Card className="user-card">
  <Card.Img variant="top" src={userData.user.avatar_url} />
  <Card.Body>
    <Card.Title>{userData.user.name}</Card.Title>
    <Card.Text className="text-muted">
    {userData.user.login}
    </Card.Text>
    <Button variant="primary" href={userData.user.html_url}>Go to GitHub profile</Button>

  </Card.Body>


</Card>

</Col>
<Col>
<h3>repositories</h3>

        { userRepos.repos.length && userRepos.repos.map(repo => (
          <Repository repo={repo} />
        ))
        }<Link to="/repositories">
    <Button variant="primary">View all</Button>
    </Link>

</Col>
        <Col>
          <h3>organizations</h3>

        { userData.orgs.length
          ? userData.orgs.map(org => (
            <a href={`https://github.com/${org.login}`} target="_blank" rel="noopener noreferrer">
              <Image className="organization" src={org.avatar_url} thumbnail title={org.login}/>
            </a>
        ))

          : <p>None yet</p>
        }


        </Col>
      </Row>
    </Container>




  );
}





export default Home;
