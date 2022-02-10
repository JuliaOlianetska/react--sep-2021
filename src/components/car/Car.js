import {useDispatch, useSelector} from "react-redux";

import {carToUpdate, deleteCarAsync} from "../../store/CarSlice";

export default function Car({car}) {
const {id, model, price, year} = car;
    const dispatch = useDispatch();
  const {info} = useSelector(state => state['carReducer']);

    return (
        <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(deleteCarAsync({id}))}>DELETE</button>
            <button onClick={()=>dispatch(carToUpdate({car}))}>UPDATE</button>
        </div>
    );
}