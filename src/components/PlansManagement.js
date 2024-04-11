import React, { useState } from "react";
import PlansList from "./PlansList";

const PlansManagement = () => {
  const [trips, setTrips] = useState([
    {
      id: 1,
      route: 'Route A',
      estimatedTime: '2 hours',
      estimatedCost: '$50',
      departureTime: '09:00',
      status: 'In progress',
      driver: 'John Doe',
      vehicle: 'Car ABC123',
    },
    // Các trip khác...
  ]);

  const [newTrip, setNewTrip] = useState({
    id: null,
    route: '',
    estimatedTime: '',
    estimatedCost: '',
    departureTime: '',
    status: 'Pending',
    driver: '',
    vehicle: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'estimatedCost' && value && !value.startsWith('$')) {
      setNewTrip((prevTrip) => ({
        ...prevTrip,
        [name]: `$${value}`,
      }));
    } else {
      setNewTrip((prevTrip) => ({
        ...prevTrip,
        [name]: value,
      }));
    }
  };

  const handleAddTrip = () => {
    setTrips((prevTrips) => [...prevTrips, newTrip]);
    setNewTrip({
      id: null,
      route: '',
      estimatedTime: '',
      estimatedCost: '',
      departureTime: '',
      status: 'Pending',
      driver: '',
      vehicle: '',
    });
  };

  const renderEstimatedTimeOptions = () => {
    const hours = [];
    for (let i = 1; i <= 12; i++) {
      hours.push(
        <option key={i} value={`${i} hours`}>
          Estimated Time: {i} hour{i > 1 ? "s" : ""}
        </option>
      );
    }
    return hours;
  };

  return (
    <div>
      <PlansList trips={trips} />
      <div>
        <h2>Add Trip</h2>
        <div className="input-group">
          <input
            className="input-field"
            type="text"
            name="route"
            value={newTrip.route}
            placeholder="Route"
            onChange={handleInputChange}
          />
          <select
            className="input-field"
            name="estimatedTime"
            value={newTrip.estimatedTime}
            onChange={handleInputChange}
          >
            <option value="">Estimated Time</option>
            {renderEstimatedTimeOptions()}
          </select>
          <input
            className="input-field"
            type="text"
            name="estimatedCost"
            value={newTrip.estimatedCost}
            placeholder="Estimated Cost"
            onChange={handleInputChange}
          />
          <input
            className="input-field"
            type="time"
            name="departureTime"
            defaultValue={newTrip.departureTime}
            placeholder="Departure Time"
            onChange={handleInputChange}
          />
          <input
            className="input-field"
            type="text"
            name="driver"
            value={newTrip.driver}
            placeholder="Driver"
            onChange={handleInputChange}
          />
          <input
            className="input-field"
            type="text"
            name="vehicle"
            value={newTrip.vehicle}
            placeholder="Vehicle"
            onChange={handleInputChange}
          />
          <select
            className="input-field"
            name="status"
            value={newTrip.status}
            onChange={handleInputChange}
          >
            <option value="Pending">Status: Pending</option>
            <option value="In progress">Status: In progress</option>
            <option value="Complete">Status: Complete</option>
            <option value="Scheduled">Status: Scheduled</option>
          </select>
        </div>
        <button className="add-trip-button" onClick={handleAddTrip}>Add Trip</button>
      </div>
    </div>
  );
};

export default PlansManagement;