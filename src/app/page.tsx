import { Vehicle, VehicleProps } from '@/components/Vehicle';
import { promises as fs } from 'fs';
import React from 'react';

const VehiclesPage = async () => {
  let vehicles: VehicleProps[] = [];
  try {
    const file = await fs.readFile(
      process.cwd() + '/public/vehicles.json',
      'utf8'
    );
    const data = JSON.parse(file);
    vehicles = data.items;
  } catch (error) {
    console.error('Error loading vehicles data:', error);
  }

  return (
    <div className='min-h-screen p-6 text-black'>
      <h1 className='text-3xl font-bold mb-6'>Available Vehicles</h1>

      {vehicles.length === 0 ? (
        <p>No vehicles found.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {vehicles.map((vehicle) => (
            <Vehicle key={vehicle.id} {...vehicle} />
          ))}
        </div>
      )}
    </div>
  );
};

export default VehiclesPage;
