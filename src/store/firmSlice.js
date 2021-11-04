import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const listBranches = createAsyncThunk(
  '/FirmaSube​/firmasube-ara',
  async (data) => {
    const response = await axios.post('/FirmaSube/firmasube-ara', data);
    return response;
  }
);

export const firmSlice = createSlice({
  name: 'firm',
  initialState: {
    firmList: [
        {
            "id": 1,
            "adi": "Albera"
        }
    ],
    branchList: [],
  },
  reducers: {},
  extraReducers: {
    [listBranches.fulfilled]: (state, action) => {
      let data = action.payload.data.resultSet
      state.branchList = data
    },
  }
});

export default firmSlice.reducer;