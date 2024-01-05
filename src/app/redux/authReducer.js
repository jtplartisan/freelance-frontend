"use client"
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 0,
    login:false,
    token:null,
    addcart:[]
  },
  reducers: {
    login:(state,action)=>{
state.login=true
state.token=action.payload
    },
    logout:(state,action)=>{
      state.login=false;
      state.token=action.payload
    },
addtocart:(state,action)=>{
  state.addcart.push(action.payload);
},
removecart:(state,action)=>{

}
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,login,logout,addtocart,removecart} = authSlice.actions
export const cart = (state) => state.auth.addcart;

export default authSlice.reducer