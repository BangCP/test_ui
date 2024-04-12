import React from 'react';
import Button from '@mui/material/Button';
import { PieChart } from 'react-minimal-pie-chart';

function Actions() {
  // Dữ liệu cho biểu đồ Pie Chart
  const data = [
    { title: 'InProgess', value: 10, color: '#E38627' },
    { title: 'Pending', value: 15, color: 'grey' },
    { title: 'Scheduled', value: 20, color: 'blue' },
    { title: 'Completed', value: 25, color: 'green' },
  ];

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
      </div>

      <div className='piechart'>
        <PieChart data={data} />
      </div>
      
      <div className="wrapper">
        <div className="pillars">
          <div className="pillar pillar1"></div>
          <div className="pillar pillar2"></div>
          <div className="pillar pillar3"></div>
          <div className="pillar pillar4"></div>
          <div className="pillar pillar5"></div>
          <div className="mask"></div>
        </div>
      </div>


    </div>
  );
}

export default Actions;