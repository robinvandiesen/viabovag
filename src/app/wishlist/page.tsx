import { Vehicle, VehicleProps } from '@/components/Vehicle';
import { cookies } from 'next/headers';
import { promises as fs } from 'fs';
import React from 'react';

const WishlistPage = async () => {
  const cookieStore = await cookies();
  const wishlist = cookieStore.get('wishlist');
  const vehicleList = wishlist?.value.split(',');

  let vehicles: VehicleProps[] = [];
  try {
    const file = await fs.readFile(
      process.cwd() + '/public/vehicles.json',
      'utf8'
    );
    const data = JSON.parse(file);
    vehicles = data.items.filter(({ id }) => vehicleList?.includes(id));
    console.log(vehicles);
  } catch (error) {
    console.error('Error loading vehicles data:', error);
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6 text-black'>
      {vehicles.length === 0 ? (
        <>
          <h1 className='text-3xl font-bold mb-6'>
            Je hebt nog geen favorieten.
          </h1>
          <p>
            Voeg een artikel toe aan je favorieten om het te zien op deze
            pagina.
          </p>
        </>
      ) : (
        <>
          <h1 className='text-3xl font-bold mb-6'>Je favorieten</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {vehicles.map((vehicle) => (
              <Vehicle key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistPage;
