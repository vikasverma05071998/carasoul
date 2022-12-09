import { createSlice } from "@reduxjs/toolkit";

   const initialState = {
        value:0,
    }
    export const reducerSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1 
        },
        decrement:(state)=>{
            state.value -=1
        },
        reset:(state)=>{
            state.value = 0
        }

    }
 }
)
export const {increment,decrement,reset} = reducerSlice.actions
export default reducerSlice.reducer