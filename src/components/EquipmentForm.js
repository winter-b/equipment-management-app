import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const EquipmentForm = (props) => {
  const [equipment, setEquipment] = useState({
    equipmentname: props.equipment ? props.equipment.equipmentname : '',
    author: props.equipment ? props.equipment.author : '',
    quantity: props.equipment ? props.equipment.quantity : '',
    price: props.equipment ? props.equipment.price : '',
    date: props.equipment ? props.equipment.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { equipmentname: equipmentname, author, price, quantity } = equipment;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [equipmentname, author, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const equipment = {
        id: uuidv4(),
        equipmentname,
        author,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(equipment);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setEquipment((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setEquipment((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setEquipment((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Equipment Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="equipmentname"
            value={equipmentname}
            placeholder="Enter name of equipment"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Equipment Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Equipment Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of equipment"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EquipmentForm;