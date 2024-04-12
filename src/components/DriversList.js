import React, { useState } from 'react';
import Button from '@mui/material/Button';

function DriversList({ drivers }) {
  const [selectedDriverId, setSelectedDriverId] = useState(null);
  const [showAllDrivers, setShowAllDrivers] = useState(false);

  const toggleShowInfo = (driverId) => {
    setSelectedDriverId(driverId === selectedDriverId ? null : driverId);
  };

  const handleShowAllDrivers = () => {
    setShowAllDrivers(!showAllDrivers);
  };

  const showAllBtnStyle = {
    backgroundColor: showAllDrivers ? 'lightblue' : 'white',
    color: showAllDrivers ? 'white' : 'black',
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
      <h3 className="dl">Drivers List</h3>
      <Button
        onClick={handleShowAllDrivers}
        style={showAllBtnStyle}
      >
        {showAllDrivers ? "Hide all driver's information" : "Show all driver's information"}
      </Button>
      {drivers.map((driver) => (
        <button
          className="DriverUnit"
          key={driver.id}
          style={
            driver.status === 'Ready'
              ? { backgroundColor: 'lightgreen' }
              : driver.status === 'Not ready'
              ? { backgroundColor: '#D05D66' }
              : {}
          }
          onClick={() => toggleShowInfo(driver.id)}
        >
          <strong className="DriverName">{driver.name}</strong>
          {(selectedDriverId === driver.id || showAllDrivers) && (
            <ul className="DriverDetails">

              <li>Age: 
                {driver.age ? driver.age : 'unknown'} 
              </li>

              <li>License Type: 
                {driver.licenseType ? driver.licenseType : 'unknown'}
              </li>

              <li>Phone:
                {driver.phone ? driver.phone : 'unknown'}
              </li>

              <li>Address: 
                {driver.address ? driver.address : 'unknown'}
              </li>

              <li>Driving History: 
                {driver.drivingHistory ? driver.drivingHistory : 'unknown'}
              </li>

              <li>Status: {driver.status}</li>

              {driver.image ? (
                <img
                  src={driver.image}
                  alt="Driver Image"
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
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/535853263/display_1500/stock-vector-profile-photo-vector-placeholder-pic-male-person-default-profile-gray-photo-picture-avatar-535853263.jpg"
                  alt="Broken Image"
                  style={{
                    width: '150px',
                    maxWidth: '100%',
                    border: '2px solid black',
                    borderRadius: '5px',
                    display: 'inline-block',
                    marginRight: 'auto',
                  }}
                />
              )}
            </ul>
          )}
        </button>
      ))}
    </div>
  );
}

export default DriversList;