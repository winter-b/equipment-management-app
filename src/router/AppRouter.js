import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AddEquipment from '../components/AddEquipment';
import EditEquipment from '../components/EditEquipment';
import EquipmentList from '../components/EquipmentList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [equipment, setEquipment] = useLocalStorage('equipment', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">        
        <Routes>  
          <Route 
                element={<EquipmentList equipments={equipment} setEquipments={setEquipment} />} 
                path="/" 
                exact={true} />
          <Route 
                path="/add"
                element= {<AddEquipment equipments={equipment} setEquipments={setEquipment} />} />
          <Route 
                // use element to pass prop values to the component
                element={<EditEquipment equipments={equipment} setEquipments={setEquipment} />}
                path="/edit/:id" />
          
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;