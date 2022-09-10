import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../../service/auth/auth";
import { IUser } from "../../types/user.types";
import { IUserLogin, IUserRegistration } from "./user.interface";


export const register = createAsyncThunk<IUser, IUserRegistration>('registration', async ({email, password, name}, thunkApi) => {
  try {
    const response = await authService.register(email, password, name)
    return response.data
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})

export const login = createAsyncThunk<IUser, IUserLogin>('login', async ({email, password}, thunkApi) => {
  try {
    console.log(1)
    const response = await authService.login(email, password)
    return response.data
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})

export const logout = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await authService.logout()
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})
