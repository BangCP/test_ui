import React from 'react';
import Button from '@mui/material/Button';

function Actions() {
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
      <div className='graph'></div>
    </div>
  );
}

export default Actions;