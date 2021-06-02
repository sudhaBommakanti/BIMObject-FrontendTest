import React from 'react';
//import '../css/card.css';
import { Card, Button, CardGroup, ListGroup } from 'react-bootstrap';

function MovieCard({ data }) {
  return (
    <ListGroup.Item>{data.Title}</ListGroup.Item>
  );
}

export default MovieCard;