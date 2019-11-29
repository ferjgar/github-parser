import React  from 'react';
import { GitHubRepo } from '../contexts/UsernameContext';
import { Card } from 'react-bootstrap';

interface Props {
  repo: GitHubRepo;
}

const Repository = ({ repo }: Props) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title><a href={repo.html_url}>{repo.full_name}</a></Card.Title>
        <Card.Text className="text-muted">{repo.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Repository;
