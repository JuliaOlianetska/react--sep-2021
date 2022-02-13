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
            state.todoList = state.todoList.filter(todoElement=> todoElement.id !== action.payload.id)
        }
    }
})

const todoReducer = todoSlice.reducer;

export const {saveTodo, deleteTodo} = todoSlice.actions;
export default todoReducer;