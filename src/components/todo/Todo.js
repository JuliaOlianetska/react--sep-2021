import {useSelector} from "react-redux";


import TodoElement from "../todoElement/TodoElement";

export default function Todo() {

  const {todoList} = useSelector(state=>state['todoReducer']);


  return (
    <div>
      {todoList.map(todoElement=> <TodoElement key={todoElement.id} todoElement={todoElement}/>)}

    </div>
  );
}