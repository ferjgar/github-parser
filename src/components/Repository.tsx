import React, { useContext }  from 'react';
import { UsernameContext } from '../contexts/UsernameContext';
import { Button, Card, Image, Container, Row, Col } from 'react-bootstrap';



const Repository = ({ repo }: any) => {

  return (

<Card className="mb-2">
  <Card.Body>
    <Card.Title><a href={repo.html_url}>{repo.full_name}</a></Card.Title>
    <Card.Text className="text-muted">{repo.description}
    </Card.Text>
  </Card.Body>
</Card>
  );
}





export default Repository;
