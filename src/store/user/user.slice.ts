import { createSlice } from "@reduxjs/toolkit";
import { getStoreLocal } from "../../utils/userLocalStorage";
import { login, logout, register } from "./user.actions";
import { IInitialState } from "./user.interface";



const initialState: IInitialState = {
  isLoading: false,
  error: '',
  user: getStoreLocal('user'),
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.user = {
        email: payload.email,
        id: payload.id
      }
    })
    .addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.user = null
    })
    .addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(register.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.user = {
        email: payload.email,
        id: payload.id
      }
    })
    .addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.user = null
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = null
    })
  }
})


export const {reducer} = userSlice;