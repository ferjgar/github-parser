import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { Button, Image, Container, Row, Col } from 'react-bootstrap';
import { UsernameContext } from '../contexts/UsernameContext';
import UserData from '../components/UserData';
import Repository from '../components/Repository';
import './Home.css';

const Home = () => {
  const { userData, userRepos } = useContext(UsernameContext);

  // this is gross, we're getting 250 max repos in the default request, we should limit the entities
  // and use Link header from the GB response to build a proper pagination
  const previewRepos = userRepos.repos.slice(0, 10);
  const showAllRepos = userRepos.repos.length > 10;

  return (
    <Container id="home-page">
      <Row>
        <Col md="4">
          <UserData user={userData.user} />
        </Col>
        <Col md="4">
          <h3>repositories</h3>
          {previewRepos.length
            ? <>
                {previewRepos.map(repo => (
                  <Repository repo={repo} />
                ))}
                {showAllRepos && <Link to="/repositories">
                  <Button variant="primary">View all</Button>
                </Link>
                }
              </>
            : <p>None yet</p>
          }
        </Col>
        <Col md="4">
          <h3>organizations</h3>
          {userData.orgs.length
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
