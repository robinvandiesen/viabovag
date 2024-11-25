import { VehicleProps } from "./Vehicle.types";

export const Vehicle = ({id, brand, model, year, price, mileage, fuelType, transmission, location, features}: VehicleProps) => {
  return (<div key={id} className="bg-white shadow-md rounded-lg p-4 text-black">
    <h2 className="text-xl font-semibold mb-2">
      {brand} {model} ({year})
    </h2>
    <p className="mb-1">
      <strong>Price:</strong> €{price.toLocaleString()}
    </p>
    <p className="mb-1">
      <strong>Mileage:</strong> {mileage.toLocaleString()} km
    </p>
    <p className="mb-1">
      <strong>Fuel:</strong> {fuelType}
    </p>
    <p className="mb-1">
      <strong>Transmission:</strong> {transmission}
    </p>
    <p className="mb-1">
      <strong>Location:</strong> {location}
    </p>
    <div className="mt-2">
      <strong>Features:</strong>
      <ul className="list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </div>)
}