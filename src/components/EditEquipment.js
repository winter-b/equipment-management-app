import React from 'react';
import EquipmentForm from './EquipmentForm';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditEquipment = ({ history, equipments, setEquipments }) => {
  const { id } = useParams();
  const equipmentToEdit = equipments.find((equipment) => equipment.id === id);
  const navigate = useNavigate();
  const handleOnSubmit = (equipment) => {
    const filteredEquipments = equipments.filter((equipment) => equipment.id !== id);
    setEquipments([equipment, ...filteredEquipments]);
    navigate('/');
  };

  return (
    <div>
      <EquipmentForm equipment={equipmentToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditEquipment;