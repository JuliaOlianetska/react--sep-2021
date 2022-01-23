export default function Car({car}) {
  return (
    <div>
      {car.id} -- model: {car.model} -- price: {car.price} -- year: {car.year}

    </div>
  );
}