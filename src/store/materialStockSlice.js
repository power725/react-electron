import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMaterialStockLists = createAsyncThunk(
  '/Malzeme/malzeme-paged',
  async (data) => {
    return await axios.post('/Malzeme/malzeme-paged', data);
  }
);

// Delete Row
export const deleteMaterial = createAsyncThunk(
  '/Malzeme/malzeme-sil',
  async rowId => {
    return await axios.get(`/Malzeme/malzeme-sil/${rowId}`);
  }
);

export const getStockTypeLists = createAsyncThunk(
  '/Malzeme/stok-tur-listele',
  async () => {
    return await axios.get('/Malzeme/stok-tur-listele');
  }
);

export const getGroupCodeLists = createAsyncThunk(
  '/Malzeme/grup-kodu-listele',
  async () => {
    return await axios.get('/Malzeme/grup-kodu-listele');
  }
);

export const getb2bProductTypeLists = createAsyncThunk(
  '/Malzeme/b2b-urun-turu-listele',
  async () => {
    return await axios.get('/Malzeme/b2b-urun-turu-listele');
  }
);

export const getb2bDeliveryStatusLists = createAsyncThunk(
  '/Malzeme/b2b-teslimat-durumu-listele',
  async () => {
    return await axios.get('/Malzeme/b2b-teslimat-durumu-listele');
  }
);

export const getb2bCargoStatusLists = createAsyncThunk(
  '/Malzeme/b2b-kargo-durumu-listele',
  async () => {
    return await axios.get('/Malzeme/b2b-kargo-durumu-listele');
  }
);

export const getCargoPriceStatusLists = createAsyncThunk(
  '/Malzeme/kargo-ucreti-durumu-listele',
  async () => {
    return await axios.get('/Malzeme/kargo-ucreti-durumu-listele');
  }
);

export const getUnitLists = createAsyncThunk(
  '/Malzeme/stok-birim-listele',
  async (data) => {
    return await axios.post('/Malzeme/stok-birim-listele', data);
  }
);

export const materialStockSlice = createSlice({
  name: 'materialStock',
  initialState: {
    materialStockList: [],
    stockTypeList: [],
    groupCodeList: [],
    productTypeList: [],
    deliveryStatusList: [],
    cargoStatusList: [],
    cargoPriceStatusList: [],
    unitList: [],
  },
  reducers: {},
  extraReducers: {
    [getMaterialStockLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.materialStockList = data;
    },
    [getStockTypeLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.stockTypeList = data;
    },
    [getGroupCodeLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.groupCodeList = data;
    },
    [getb2bProductTypeLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.productTypeList = data;
    },
    [getb2bDeliveryStatusLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.deliveryStatusList = data;
    },
    [getb2bCargoStatusLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.cargoStatusList = data;
    },
    [getCargoPriceStatusLists.fulfilled]: (state, action) => {
      let data = action.payload;
      state.cargoPriceStatusList = data;
    },
    [getUnitLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.unitList = data;
    },
  }
});

export default materialStockSlice.reducer;