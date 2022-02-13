import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {saveTodo} from "../../store/TodoSlice";

export default function Form() {

    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(saveTodo({data}))
        console.log(data);
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>T O D O <input type="text" {...register('name')} placeholder={'todo'}/></label>
                <button>SAVE</button>
            </form>

        </div>
    );
}