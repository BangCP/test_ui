import React, { useState } from 'react';
import Button from '@mui/material/Button';

function PlansList({ trips }) {
  const [visibleTrips, setVisibleTrips] = useState(5);
  const [showAllTrips, setShowAllTrips] = useState(false);

  const handleShowMore = () => {
    setVisibleTrips(prevVisibleTrips => prevVisibleTrips + 5);
  };

  const handleShowAll = () => {
    setVisibleTrips(trips.length);
    setShowAllTrips(true);
  };

  const handleCollapse = () => {
    setVisibleTrips(5);
    setShowAllTrips(false);
  };

  return (
    <div className="TripTable">
      <table>
        <thead>
          <tr className="TripValueName">
            <th>Route</th>
            <th>Estimated Time</th>
            <th>Estimated Cost</th>
            <th>Departure Time</th>
            <th>Expected Arrival Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trips.slice(0, visibleTrips).map((trip) => (
            <tr
              className="tripTripUnit"
              style={
                trip.status === 'Completed'
                  ? { backgroundColor: 'lightgreen' }
                  : trip.status === 'Scheduled'
                  ? { backgroundColor: 'lightblue' }
                  : trip.status === 'Pending'
                  ? { backgroundColor: 'grey' }
                  : trip.status === 'In progress'
                  ? { backgroundColor: 'lightcoral' }
                  : {}
              }
              key={trip.id}
            >
              <td className="tripRoute">{trip.route}</td>
              <td className="tripEstimatedTime">{trip.estimatedTime}</td>
              <td className="tripEstimatedCost">{trip.estimatedCost}</td>
              <td className="tripDepartureTime">{trip.departureTime}</td>
              <td className="tripExpectedArrivalTime">
                {trip.expectedArrivalTime}
              </td>
              <td className="tripStatus">{trip.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showAllTrips && visibleTrips < trips.length && (
        <Button variant="contained" onClick={handleShowMore}>Show More</Button>
      )}
      {!showAllTrips && (
        <Button variant="contained" onClick={handleShowAll}>Show All</Button>
      )}
      {showAllTrips && (
        <Button variant="contained" onClick={handleCollapse}>Collapse</Button>
      )}
    </div>
  );
}

export default PlansList;