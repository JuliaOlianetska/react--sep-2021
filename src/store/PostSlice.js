import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services/UserService";
import {getUsers} from "./UserSlice";

export const getPosts = createAsyncThunk(
    'postSlice/getPosts',
    async (_, {rejectWithValue}) => {
        try {
     const posts = await userService.getPosts();
     return posts;
            console.log(posts);
        } catch (er) {
            return rejectWithValue(er.message)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState : {posts:[]},
    status: null,
    error: null,
    reducers: {

    },
    extraReducers: {
            [getPosts.pending]: (state, action) => {
                state.status = 'loading'
                state.error = null
            },
            [getPosts.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.posts = action.payload
            },
            [getPosts.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
    }

})

const postReducer = postSlice.reducer;

export default postReducer;