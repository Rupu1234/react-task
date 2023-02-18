import {createSlice} from "@reduxjs/toolkit";

export const cardSlice=createSlice({
    name:'card',
    initialState:{
      list:[]
    },
    reducers:{
        addItems:(state,{payload})=>{
            state.list = [...state.list,payload]
        },
    },
});

export const{addItems}=cardSlice.actions;

export default cardSlice.reducer;