import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Col = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        This is a recently added item.
      </Card.Text>
      <Button variant="primary">Add Item</Button>
    </Card.Body>
  </Card>
  )
}

export default Col;