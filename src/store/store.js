import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./CarSlice";
import userReducer from "./UserSlice";
import postReducer from "./PostSlice";
import commentReducer from "./CommentSlice";


const store = configureStore({
    reducer: {
        carReducer,
        userReducer,
        postReducer,
        commentReducer
    }
});

export default store;