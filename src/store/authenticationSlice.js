import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import LocalStorageService from '../services/localStorageService';

const localStorageService = LocalStorageService.getService();

export const authenticateUser = createAsyncThunk(
  '/​Kullanici​/giris',
  async (data) => {
    return await axios.post('/Kullanici/giris', data);
  }
)


export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    success: false,
    userData: {}
  },
  reducers: {

  },
  extraReducers: {
    [authenticateUser.fulfilled]: (state, action) => {
      state.success = action.payload.success;
      state.userData = action.payload.data;
      if(state.success)
        localStorageService.setToken(action.payload.data);
    }
  }
});

// Action creators are generated for each case reducer function
// export const { } = authenticationSlice.actions;

export default authenticationSlice.reducer;