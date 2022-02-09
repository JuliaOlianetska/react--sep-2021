import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar, createCar} from "../../store/CarSlice";

export default function Forms() {

    const dispatch = useDispatch();
  const {handleSubmit, register, reset} = useForm();


  const save = (data) => {
dispatch(createCar({data}))
      reset()
  }
  
  return (
    <div>
      <form>
      <label>Model <input type="text" {...register('model')}/></label>
      <label>Price <input type="text" {...register('price')}/></label>
      <label>Year <input type="text" {...register('year')}/></label>
        <button onClick={handleSubmit(save)}>SAVE</button>
      </form>
    </div>
  );
}