import Car from "../car/Car";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import {getAllCars} from "../../store/CarSlice";
import Forms from "../forms/Forms";

export default function Cars() {

    const {cars, status, error} = useSelector(state => state['carReducer'])
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllCars())
    }, [])


    return (
        <div>
            <div>
                <Forms/>
                {cars.map(car => <Car key={car.id} car={car}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
}