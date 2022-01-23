import {useForm} from "react-hook-form";
import {carServices} from "../../services/CarServices";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../validator/Validator";

export default function Forms({update}) {

    const [formError, setFormError] = useState({});

  const {
    register, handleSubmit, watch, formState:{errors}
  } =useForm({resolver:joiResolver(CarValidator), mode:'onTouched'});

  const submit = (car) => {
console.log(car)
    carServices.create(car).then(value => update(value)).
        catch(error => {
        setFormError(error.response.data);
    })
      update(car)
  }

// watch(event=> console.log(event))


    return (
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text" defaultValue={''} {...register('model')}/></label></div>
              {formError.model && <h4>{formError.model[0]}</h4>}
              {errors.model && <h4>{errors.model.message}</h4>}
              <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
              {formError.price && <h4>{formError.price[0]}</h4>}
              {errors.price && <h4>{errors.price.message}</h4>}
              <div><label>Year:<input type="number" defaultValue={''} {...register('year')}/></label></div>
              {formError.year && <h4>{formError.year[0]}</h4>}
              {errors.year && <h4>{errors.year.message}</h4>}
         <button>Submit</button>
          </form>
        </div>
    );
}