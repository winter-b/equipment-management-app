import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Equipment = ({
  id,
  equipmentname,
  author,
  price,
  quantity,
  date,
  handleRemoveEquipment
}) => {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '18rem' }} className="equipment">
      <Card.Body>
        <Card.Title className="equipment-title">{equipmentname}</Card.Title>
        <div className="equipment-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveEquipment(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Equipment;