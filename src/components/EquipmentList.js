import React from 'react';
import _ from 'lodash';
import Equipment from './Equipment';

const EquipmentsList = ({ equipments, setEquipments }) => {

  const handleRemoveEquipment = (id) => {
    setEquipments(equipments.filter((equipment) => equipment.id !== id));
  };

  return (
    <React.Fragment>
      <div className="equipment-list">
        {!_.isEmpty(equipments) ? (
          equipments.map((equipment) => (
            <Equipment key={equipment.id} {...equipment} handleRemoveEquipment={handleRemoveEquipment} />
          ))
        ) : (
          <p className="message">No equipments available. Please add some equipments.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default EquipmentsList;