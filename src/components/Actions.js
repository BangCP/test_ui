import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Actions({ addVehicle }) {
  const [showAddVehicleForm, setShowAddVehicleForm] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState({
    name: '',
    type: '',
    size: '',
    payload: '',
    fuel: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehicleInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddVehicle = () => {
    addVehicle(vehicleInfo);
    setShowAddVehicleForm(false);
    setVehicleInfo({
      name: '',
      type: '',
      size: '',
      payload: '',
      fuel: '',
    });
  };

  return (
    <div className='actionContainer'>
      <h2 className='Actions'>Stuffs</h2>
      <div className='buttons'>
        <Button variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>Create new plan</Button>
        <Button variant="contained" style={{ backgroundColor: 'blue', color: 'white' }}>Edit plan</Button>
        <Button variant="contained" style={{ backgroundColor: 'red', color: 'white' }}>Delete plan</Button>
        <Button variant="contained" style={{ backgroundColor: 'orange', color: 'white' }}>Choose vehicle</Button>
        <Button variant="contained" style={{ backgroundColor: 'purple', color: 'white' }}>Choose driver</Button>
        <Button variant="contained" style={{ backgroundColor: 'brown', color: 'white' }}>Start trip</Button>
        <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }}>End trip</Button>
        <Button
          variant="contained"
          style={{ backgroundColor: 'gray', color: 'white' }}
          onClick={() => setShowAddVehicleForm(true)}
        >
          Add new vehicle
        </Button>
      </div>
      <div className='graph'></div>

      {showAddVehicleForm && (
        <div>
          <h3>Add Vehicle</h3>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={vehicleInfo.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Type:
              <input
                type="text"
                name="type"
                value={vehicleInfo.type}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Size:
              <input
                type="text"
                name="size"
                value={vehicleInfo.size}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Payload:
              <input
                type="text"
                name="payload"
                value={vehicleInfo.payload}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Fuel:
              <input
                type="text"
                name="fuel"
                value={vehicleInfo.fuel}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <Button variant="contained" onClick={handleAddVehicle}>
              Save
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Actions;