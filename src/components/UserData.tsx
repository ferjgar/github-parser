import React  from 'react';
import { GitHubUser } from '../contexts/UsernameContext';
import { Button, Card } from 'react-bootstrap';

interface Props {
  user: GitHubUser;
}

const UserData = ({ user }: Props) => {
  return (
    <Card>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text className="text-muted">{user.login}</Card.Text>
        <Button variant="primary" href={user.html_url}>Go to GitHub profile</Button>
      </Card.Body>
    </Card>
  );
}

export default UserData;
