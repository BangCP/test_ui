import React, { useState } from "react";
import PlansList from "./PlansList";

const PlansManagement = () => {
  const [trips, setTrips] = useState([
    {
      id: 1,
      route: 'Route A',
      estimatedTime: '2 hours',
      estimatedCost: '$50',
      departureTime: '9:00 AM',
      expectedArrivalTime: '11:00 AM',
      status: 'In progress',
    },
    // Các trip khác...
  ]);

  const [newTrip, setNewTrip] = useState({
    id: null,
    route: '',
    estimatedTime: '',
    estimatedCost: '',
    departureTime: '',
    expectedArrivalTime: '',
    status: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTrip((prevTrip) => ({
      ...prevTrip,
      [name]: value,
    }));
  };

  const handleAddTrip = () => {
    setTrips((prevTrips) => [...prevTrips, newTrip]);
    setNewTrip({
      id: null,
      route: '',
      estimatedTime: '',
      estimatedCost: '',
      departureTime: '',
      expectedArrivalTime: '',
      status: '',
    });
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
          <input
            className="input-field"
            type="text"
            name="estimatedTime"
            value={newTrip.estimatedTime}
            placeholder="Estimated Time"
            onChange={handleInputChange}
          />
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
            type="text"
            name="departureTime"
            value={newTrip.departureTime}
            placeholder="Departure Time"
            onChange={handleInputChange}
          />
          <input
            className="input-field"
            type="text"
            name="expectedArrivalTime"
            value={newTrip.expectedArrivalTime}
            placeholder="Expected Arrival Time"
            onChange={handleInputChange}
          />
          <input
            className="input-field"
            type="text"
            name="status"
            value={newTrip.status}
            placeholder="Status"
            onChange={handleInputChange}
          />
        </div>
        <button className="add-trip-button" onClick={handleAddTrip}>Add Trip</button>
      </div>
    </div>
  );
};

export default PlansManagement;