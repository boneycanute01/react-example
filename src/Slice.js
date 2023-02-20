// A part of your store that will be responsible for storing a single state

import { createSlice } from "@reduxjs/toolkit";

export const mySlice  = createSlice({
    name : 'mySlice',
    initialState : [{data : 'mesage1'},{data : "message2"}], // this is the state being represented by the slice
    // Reducers : Function that can update the state
    reducers : 
    {
        // the reducer function can take two parameters : state and action
        updateData : (state,action)=>{
            console.log('Reducer Function Called');
            const newState = [...state]
            newState[0].data = "New Message1";
            newState[1].data = "New Message2";
            state = newState; 
        },
        function2 : (state,action)=>{
            console.log('Second Reducer Function');
        }
    }
});

export const {updateData,function2} = mySlice.actions; // Accessing the auto generated Actions
export default mySlice.reducer;