import React, { useContext }  from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { UsernameContext } from '../contexts/UsernameContext';
import UserData from '../components/UserData';
import Repository from '../components/Repository';
import './Home.css';

const Repositories = () => {
  const { userData, userRepos } = useContext(UsernameContext);

  return (
    <Container>
      <Row>
        <Col md="4">
          <UserData user={userData.user} />
        </Col>
        <Col md="8">
          <h3>repositories</h3>
          {userRepos.repos.map(repo => (
            <Repository repo={repo} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Repositories;
