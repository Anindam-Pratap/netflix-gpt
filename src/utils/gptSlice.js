import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptPageState:false
    },
    reducers:{
       toggleGptPage:(state)=>{
        state.gptPageState = !state.gptPageState
       }
    }
}
)

export default gptSlice.reducer

export const {toggleGptPage} = gptSlice.actions