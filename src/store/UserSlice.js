import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../services/UserService";
import {carService} from "../services/CarsService";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectedWithValue}) => {
        try {
            const users = await userService.getUsers();
            return users
        } catch (e) {
            return rejectedWithValue(e.message);
        }
    }
)


const userSlice = createSlice({
        name: 'userSlice',
        initialState: {users: []},
        status: null,
        error: null,
        reducers: {},
        extraReducers: {
            [getAllUsers.pending]: (state, action) => {
                state.status = 'loading'
                state.error = null
            },
            [getAllUsers.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.users = action.payload
            },
            [getAllUsers.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
        }
    }
)

const userReducer = userSlice.reducer;

export const {addUser} = userSlice.actions;
export default userReducer;