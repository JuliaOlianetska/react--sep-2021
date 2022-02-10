import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services/UserService";
import {getAllUsers} from "./UserSlice";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_,{rejectedWithValue}) => {
        try {
            const comments = await userService.getComments();
            return comments;
        } catch (er) {
            return rejectedWithValue(er.message)
        }
}
)


const commentSlice = createSlice({
    name: 'getComments',
    initialState: {
        comments: [],
        status: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const commentReducer = commentSlice.reducer;

export default commentReducer;