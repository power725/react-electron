import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCountryLists = createAsyncThunk(
  '/Ortak/ulke-listele',
  async (data) => {
    return await axios.post('/Ortak/ulke-listele', data);
  }
);

export const getCityLists = createAsyncThunk(
  '/Ortak/il-listele',
  async (data) => {
    return await axios.post('/Ortak/il-listele', data);
  }
);
export const getDistrictLists = createAsyncThunk(
  '/Ortak/ilce-listele',
  async (data) => {
    return await axios.post('/Ortak/ilce-listele', data);
  }
);

export const getCurrencyLists = createAsyncThunk(
  '/Ortak/para-birim-listele',
  async (data) => {
    return await axios.post('/Ortak/para-birim-listele', data);
  }
);

export const getDepartmanList = createAsyncThunk(
  '/Organizasyon/departman-ara',
  async (data) => {
    return await axios.post('/Organizasyon/departman-ara', data);
  }
);

export const getKademeList = createAsyncThunk(
  '/Organizasyon/kademe-ara',
  async (data) => {
    return await axios.post('/Organizasyon/kademe-ara', data);
  }
);

export const getVergiDaireList = createAsyncThunk(
  '/Ortak/vergi-daire-ara',
  async (data) => {
    return await axios.post('/Ortak/vergi-daire-ara', data);
  }
);

export const getEinvoiceLists = createAsyncThunk(
  '/Ortak/e-fatura-tur-listele',
  async (data) => {
    return await axios.get('/Ortak/e-fatura-tur-listele', data);
  }
);

export const mutualSlice = createSlice({
  name: 'mutual',
  initialState: {
    countryList: [],
    cityList: [],
    districtList: [],
    currencyList: [],
    departmanList: [],
    kademeList:[],
    vergiDaireList:[],
    einvoiceList: []
  },
  reducers: {},
  extraReducers: {
    [getCountryLists.fulfilled]: (state, action) => {
      let data = action.payload.data || [];
      state.countryList = data;
    },
    [getCityLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.cityList = data;
    },
    [getDistrictLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.districtList = data;
    },
    [getCurrencyLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.currencyList = data;
    },
    [getDepartmanList.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.departmanList = data;
    },
    [getKademeList.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.kademeList = data;
    },
    [getVergiDaireList.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.vergiDaireList = data;
    },
    [getEinvoiceLists.fulfilled]: (state, action) => {
        let data = action.payload.data;
        state.einvoiceList = data;
    }
  }
});

// Action creators are generated for each case reducer function
// export const { } = mutualSlice.actions;

export default mutualSlice.reducer;