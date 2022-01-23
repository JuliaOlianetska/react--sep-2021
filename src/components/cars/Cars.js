import {useEffect, useState} from "react";
import {carServices} from "../../services/CarServices";
import Car from "../car/Car";

export default function Cars({trigger}) {


  const [cars, setCars] = useState([]);

  useEffect(()=> {
    carServices.getAll().then(value => setCars([...value]))
  }, [trigger])


  return (
    <div>
      {cars.map(car=> <Car key={car.id} car={car}/>)}

    </div>
  );
}