import {useDispatch, useSelector} from "react-redux";
import {deleteCarAsync} from "../../store/CarSlice";

export default function Car({car: {id, model, price, year}}) {

    const dispatch = useDispatch();
    const {info} = useSelector(state => state['carReducer']);

    return (
        <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(deleteCarAsync({id}))}>DELETE</button>
        </div>
    );
}