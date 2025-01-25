import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import configureReducer from "./configureSlice"

const store = configureStore({
    reducer: {
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer,
        configure:configureReducer
    }
})

export default store