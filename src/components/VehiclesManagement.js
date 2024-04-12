import React from 'react';
import VehiclesList from './VehiclesList';



function VehiclesManagement() {
    const vehicles = [
      {
        types: [
            {
              id: 1,
              name: 'Truck',
              size: 'Large',
              payload: '1000kg',
              fuel: 'Gasoline',
              status: 'Working',
              licensePlate: '123-456-789',
              //add image
              image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              id: 2,
              name: 'Bus',
              size: 'Large',
              payload: '600kg',
              fuel: 'Diesel',
              status: 'Maintenance',
              licensePlate: '987-654-321',
              image: 'data:image/jpeg;base64,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'
            },
            {
              id: 3,
              name: 'Car',
              size: 'Normal',
              payload: '300kg',
              fuel: 'Gasoline',
              status: 'Maintenance',
              licensePlate: '456-789-123',
              image: 'https://hips.hearstapps.com/hmg-prod/images/2019-hyundai-kona-1548195339.jpg'
            },
            {
              id: 4,
              name: 'SUV',
              size: 'Large',
              payload: '500kg',
              fuel: 'Gasoline',
              status: 'Working',
              licensePlate: '789-123-456',
              image: 'https://vcdn-vnexpress.vnecdn.net/2019/09/17/2020-Kia-Telluride-front-three-6818-5132-1568714143.jpg'
            },
            {
              id: 5,
              name: 'Motorcycle',
              size: 'Small',
              payload: '150kg',
              fuel: 'Gasoline',
              status: 'Working',
              licensePlate: '321-654-987',
            },
            {
              id: 6,
              name: 'Van',
              size: 'Large',
              payload: '800kg',
              fuel: 'Diesel',
              status: 'Inactive',
              licensePlate: '654-987-321',
            },
            {
              id: 7,
              name: 'Tractor',
              size: 'Large',
              payload: '2000kg',
              fuel: 'Diesel',
              status: 'Working',
              licensePlate: '987-321-654',
            },
            {
              id: 8,
              name: 'Compact Car',
              size: 'Normal',
              payload: '250kg',
              fuel: 'Gasoline',
              status: 'Maintenance',
              licensePlate: '789-123-456',
            },
            {
              id: 9,
              name: 'Pickup Truck',
              size: 'Large',
              payload: '700kg',
              fuel: 'Gasoline',
              status: 'Inactive',
              licensePlate: '456-789-123',
            },
            {
              id: 10,
              name: 'Minivan',
              size: 'Large',
              payload: '600kg',
              fuel: 'Gasoline',
              status: 'Maintenance',
              licensePlate: '123-456-789',
            },
            {
              id: 11,
              name: 'Sports Car',
              size: 'Normal',
              payload: '350kg',
              fuel: 'Gasoline',
              status: 'Working',
              licensePlate: '321-654-987',
            },
            {
              id: 12,
              name: 'Electric Car',
              size: 'Normal',
              payload: '400kg',
              fuel: 'Electricity',
              status: 'Working',
              licensePlate: '654-987-321',
            }
          ]
      },
      // Thêm các xe khác vào đây
    ];
  
    return (
      <div>
        <h2 className='VehicleManagement'>Vehicle Management</h2>
        <VehiclesList vehicles={vehicles} />
        <div className="divider"></div>
      </div>
    );
  }
  
  export default VehiclesManagement;