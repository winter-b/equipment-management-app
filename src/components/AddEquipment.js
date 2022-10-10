import React from 'react';
import EquipmentForm from './EquipmentForm';
import { useNavigate } from 'react-router-dom';

const AddEquipment = ({ history, equipments, setEquipments }) => {
  const navigate = useNavigate();
  const handleOnSubmit = (equipment) => {
    setEquipments([equipment, ...equipments]);
    navigate('/');
  };

  return (
    <React.Fragment>
      <EquipmentForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddEquipment;