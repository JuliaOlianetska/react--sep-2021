import {useDispatch} from "react-redux";
import {deleteTodo} from "../../store/TodoSlice";
import "./TodoElStyle.css";

export default function TodoElement({todoElement: {id, todo, status}}) {

  const dispatch = useDispatch();

  const deleteTodoElement = () => {
dispatch(deleteTodo({id}))
  }

  return (
    <div className={'todoEl'}>
        <input type="checkbox" value={status}/>
        <div>{todo}</div>
      <button onClick={deleteTodoElement}>delete</button>
    </div>
  );
}