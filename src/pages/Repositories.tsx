import React, { useContext }  from 'react';
import { UsernameContext } from '../contexts/UsernameContext';
import { Button, Card, Image, Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Repository from '../components/Repository';



const Home = () => {
  const { username, userData, userRepos } = useContext(UsernameContext);



  return (

    <Container id="home-page">
      <Row>
      <Col md="auto">

        <Card>
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
<Col md={{ offset: 2 }}>
<h3>repositories</h3>

        { userRepos.repos.length && userRepos.repos.map(repo => (
          <Repository repo={repo} />
        ))
        }
    <Button variant="primary">View all</Button>


</Col>

      </Row>
    </Container>




  );
}





export default Home;
