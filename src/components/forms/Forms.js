import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {createCar, updateCarById} from "../../store/CarSlice";
import {carValidator} from "../../services/Validator";
import {useEffect} from "react";

export default function Forms() {

    const {carForUpdate} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    const {handleSubmit, register, reset, setValue} = useForm({resolver: joiResolver(carValidator), mode: 'onTouched'});

    const save = (data) => {
        dispatch(createCar({data}))
        reset()
    }

    const update = (data) => {
        dispatch(updateCarById({id: carForUpdate.id, car: data}))
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate])

    return (
        <div>
            <form>
                <label>Model <input type="text" {...register('model')}/></label>
                <label>Price <input type="text" {...register('price')}/></label>
                <label>Year <input type="text" {...register('year')}/></label>
                <button onClick={handleSubmit(save)}>SAVE</button>
                <button onClick={handleSubmit(update)}>UPDATE</button>
            </form>
        </div>
    );
}