import Car from "../car/Car";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllCars} from "../../store/CarSlice";

export default function Cars() {

const {cars, status, error} = useSelector(state => state['carReducer'])
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getAllCars())
}, [])


  return (
    <div>
      {cars.map(car => <Car key={car.id} car={car}/>)}

    </div>
  );
}