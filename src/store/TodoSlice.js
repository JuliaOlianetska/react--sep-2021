import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todoList: [],
    },
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push({
                id: new Date().getTime(),
               ...action.payload.data,
                status: false
            })
        },
        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(todoElement => todoElement.id !== action.payload.id)
        },
        changeStatus: (state, action) => {
            const todoElement = state.todoList.find(todoElement => todoElement.id !== action.payload.id)
            todoElement.status = !todoElement.status
        }
    }
})

const todoReducer = todoSlice.reducer;
export const {saveTodo, deleteTodo, changeStatus} = todoSlice.actions;
export default todoReducer;