import React from 'react';
import VehiclesManagement from './components/VehiclesManagement';
import DriversManagement from './components/DriversManagement';
import PlansManagement from './components/PlansManagement';
import Actions from './components/Actions';
import './App.css';



function App() {
  return (
    <div className="App">
      <h1 className='Pm'>Project management</h1>

      <div className="container">
        <div className="left-panel">
          <VehiclesManagement />
        </div>
        <div className="middle-panel">
          <DriversManagement />
        </div>
        <div className="right-panel">
          <PlansManagement/>
        </div>
        <div className="most-right-panel">
          <Actions/>
        </div>


      </div>

      {/* JavaScript code for interacting with the forms and performing necessary actions */}
      <script>
        {/* JavaScript code goes here */}
      </script>
    </div>
  );
}

export default App;