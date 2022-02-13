import {useDispatch} from "react-redux";

import {deleteTodo, changeStatus} from "../../store/TodoSlice";
import css from "./TodoEl.module.css";

export default function TodoElement({todoElement}) {

const {id, name, status} = todoElement;
    console.log(name);

    const dispatch = useDispatch();

    const deleteTodoElement = () => {
        dispatch(deleteTodo({id}))
    }

    return (
        <div className={css.todoEl}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status?css.checked : ''}>{name}</div>
            <button onClick={deleteTodoElement}>delete</button>
        </div>
    );
}