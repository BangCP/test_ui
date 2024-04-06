import React, { useState } from 'react';
import Button from '@mui/material/Button';


//export NODE_OPTIONS=--openssl-legacy-provider
function VehiclesList({ vehicles }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showAllVehicles, setShowAllVehicles] = useState(false);

  const toggleShowInfo = (vehicleId) => {
    setSelectedVehicle(vehicleId === selectedVehicle ? null : vehicleId);
  };

  const handleShowAllVehicles = () => {
    setShowAllVehicles(!showAllVehicles);
  };

  const showAllBtnStyle = {
    backgroundColor: showAllVehicles ? 'lightblue' : 'white',
    color: showAllVehicles ? 'white' : 'black',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '90%',
    fontSize: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    padding: '5px',
  };

  return (
    <div>
      <h3 className="vl">Vehicles List</h3>
      <Button
        onClick={handleShowAllVehicles}
        style={showAllBtnStyle}
      >
        {showAllVehicles ? "Hide all vehicle's information" : "Show all vehicle's information"}
      </Button>
      <div className="VehicleInformation">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id}>
            <strong>{vehicle.name}</strong>
            <div>
              {vehicle.types.map((type) => (
                <button
                  className="VehicleUnit"
                  key={type.id}
                  style={
                    type.status === 'Working'
                      ? { backgroundColor: 'lightgreen' }
                      : type.status === 'Maintenance'
                      ? { backgroundColor: 'grey' }
                      : type.status === 'Inactive'
                      ? { backgroundColor: 'lightcoral' }
                      : {}
                  }
                  onClick={() => toggleShowInfo(type.id)}
                >
                  <span className="VehicleName">{type.name}</span>
                  {(selectedVehicle === type.id || showAllVehicles) && (
                    <ul className="VehicleDetails">
                      <li>Size: {type.size}</li>
                      <li>Payload: {type.payload}</li>
                      <li>Fuel Type: {type.fuel}</li>
                      <li>Status: {type.status}</li>
                      <li>License Plate: {type.licensePlate}</li>
                      {type.image ? (
                        <img
                          src={type.image}
                          alt={type.name}
                          className="VehicleImage"
                          style={{
                            width: '150px',
                            maxWidth: '100%',
                            border: '2px solid black',
                            borderRadius: '5px',
                            display: 'inline-block',
                            marginRight: 'auto',
                          }}
                        />
                      ) : (
                        <div>
                          <img
                            src="https://t3.ftcdn.net/jpg/02/33/69/46/360_F_233694647_8fEIOuq6QVxjFHTOhLrN3xBLYAnP8WA7.jpg"
                            alt="BrkImage"
                            className="VehicleImage"
                            style={{
                              width: '150px',
                              maxWidth: '100%',
                              border: '2px solid black',
                              borderRadius: '5px',
                              display: 'inline-block',
                              marginRight: 'auto',
                            }}
                          />
                        </div>
                      )}
                    </ul>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehiclesList;