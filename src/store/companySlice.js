import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getCompanyLists = createAsyncThunk(
  '/Finans/cari-kart-ara',
  async (data) => {
    return await axios.post('/Finans/cari-kart-paged', data);
  }
);

export const getDirectionLists = createAsyncThunk(
  '/Firma​/firma-yon-listele',
  async (data) => {
    const response = await axios.get('/Firma/firma-yon-listele', data);
    return response;
  }
);
export const getCompanyTypeLists = createAsyncThunk(
    '/Firma​/firma-tur-listele',
    async (data) => {
      const response = await axios.get('/Firma/firma-tur-listele', data);
      return response;
    }
);

export const getAddressTypeLists = createAsyncThunk(
    '/Finans/firma-adres-tur-listele',
    async (data) => {
      const response = await axios.get('/Finans/firma-adres-tur-listele', data);
      return response;
    }
);

// Delete Row
export const deleteCompany = createAsyncThunk(
  '/Finans/cari-kart-sil',
  async rowId => {
    return await axios.get(`/Finans/cari-kart-sil/${rowId}`);
  }
);

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    companyList: [],
    directionList: [],
    companyTypeList: [],
    addressTypeList: [],
  },
  reducers: {},
  extraReducers: {
    [getCompanyLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.companyList = data;
    },
    [getDirectionLists.fulfilled]: (state, action) => {
        let data = action.payload.data
        state.directionList = data
    },
    [getCompanyTypeLists.fulfilled]: (state, action) => {
        let data = action.payload.data
        state.companyTypeList = data
    },
    [getAddressTypeLists.fulfilled]: (state, action) => {
        let data = action.payload.data
        state.addressTypeList = data
    },
  }
});

export default companySlice.reducer;