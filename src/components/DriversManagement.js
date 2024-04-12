import React from 'react';
import DriversList from './DriversList';

function DriversManagement() {
    const drivers = [
        {
          id: 1,
          name: 'John Doe',
          age: 35,
          licenseType: 'Class A',
          address: '123 Main St',
          drivingHistory: 'Clean',
          status: 'Ready',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          
        },
        {
          id: 2,
          name: 'Jane Smith',
          age: 28,
          licenseType: 'Class B',
          phone: '987-654-3210',
          drivingHistory: 'Minor violations',
          status: 'Not ready',
          image: 'https://www.shutterstock.com/image-photo/guy-on-background-sky-260nw-497596165.jpg'
        },
        {
          id: 3,
          name: 'Mike Johnson',
          age: 42,
          licenseType: 'Class C',
          phone: '555-123-4567',
          address: '789 Oak St',
          drivingHistory: 'Clean',
          status: 'Ready',
          image: 'https://i.pinimg.com/originals/1f/8f/88/1f8f88fd1dc3eb2aab83b71330777d04.jpg'
        },
        {
          id: 4,
          name: 'Emily Davis',
          age: 30,
          licenseType: 'Class A',
          phone: '444-555-6666',
          address: '234 Pine St',
          drivingHistory: 'Clean',
          status: 'Ready',
          image: 'https://media.istockphoto.com/id/187312795/photo/funny-man-eating-his-cereals-in-the-bath.jpg?s=612x612&w=0&k=20&c=2EYXLURiHbS5X8a7uNfeC9YCJjymFxRn1NExEfm9WpY='
        },
        {
          id: 5,
          name: 'David Wilson',
          age: 45,
          licenseType: 'Class B',
          phone: '777-888-9999',
          address: '567 Maple St',
          drivingHistory: 'Major violations',
          status: 'Not ready',
        },
        {
          id: 6,
          name: 'Sarah Brown',
          age: 33,
          phone: '222-333-4444',
          address: '890 Cedar St',
          drivingHistory: 'Clean',
          status: 'Ready',
        },
        {
          id: 7,
          name: 'Chris Lee',
          age: 40,
          licenseType: 'Class A',
          phone: '666-777-8888',
          address: '345 Walnut St',
          drivingHistory: 'Clean',
          status: 'Ready',
        },
        {
          id: 8,
          name: 'Amanda White',
          age: 31,
          licenseType: 'Class B',
          phone: '999-000-1111',
          address: '678 Birch St',
          drivingHistory: 'Minor violations',
          status: 'Not ready',
        },
        {
          id: 9,
          name: 'Amanda Black',
          age: 32,
          licenseType: 'Class A',
          phone: '999-020-1111',
          address: '678 Birch St',
          drivingHistory: 'Minor violations',
          status: 'Not ready',
        },
        {
          id: 10,
          name: 'Amanda Green',
          age: 21,
          licenseType: 'Class C',
          phone: '999-120-1111',
          address: '678 Birch St',
          drivingHistory: 'Minor violations',
          status: 'Not ready',
        }
      ];

  return (
    <div>
      <h2 className='DriverManagement'>Driver Management</h2>
      <DriversList drivers={drivers} />
      <div className="divider"></div>
    </div>
  );
}

export default DriversManagement;