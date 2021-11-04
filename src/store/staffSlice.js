import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Load Personal Staff List
export const getPersonelStaffLists = createAsyncThunk(
  '/Personel/personel-paged',
  async (data) => {
    return await axios.post('/Personel/personel-paged', data);
  }
);

// Delete Personal Staff Row
export const deletePersonalStaff = createAsyncThunk(
  '/Personel/personel-sil',
  async rowId => {
    return await axios.get(`/Personel/personel-sil/${rowId}`);
  }
);

export const getSigortaTurList = createAsyncThunk(
  '/Personel/sigorta-tur-listele',
  async () => {
    return await axios.get('/Personel/sigorta-tur-listele');
  }
);

export const getSozlesmeTurList = createAsyncThunk(
  '​/Personel​/sozlesme-tur-listele',
  async () => {
    return await axios.get('/Personel/sozlesme-tur-listele');
  }
);

export const getReasonLeavingList = createAsyncThunk(
  '/Personel/isten-ayrilma-nedenleri-listele',
  async () => {
    return await axios.get('/Personel/isten-ayrilma-nedenleri-listele');
  }
);

export const getOgrenimDurumuList = createAsyncThunk(
  '/Personel/ogrenim-durumu-listele',
  async () => {
    return await axios.get('/Personel/ogrenim-durumu-listele');
  }
);

export const getAskerlikDurumList = createAsyncThunk(
  '​/Personel​/askerlik-durum-listele',
  async () => {
    return await axios.get('/Personel/askerlik-durum-listele');
  }
);

export const getEngellikDurumList = createAsyncThunk(
  '​/Personel​/engellilik-durum-listele',
  async () => {
    return await axios.get('/Personel/engellilik-durum-listele');
  }
);

export const getMaasOdemeTurList = createAsyncThunk(
  '​/Personel​/maas-odeme-tur-listele',
  async () => {
    return await axios.get('/Personel/maas-odeme-tur-listele');
  }
);

export const getMaasPeriyotList = createAsyncThunk(
  '​/Personel​/maas-periyot-listele',
  async () => {
    return await axios.get('/Personel/maas-periyot-listele');
  }
);

export const getMedeniHalList = createAsyncThunk(
  '​/Personel​/medeni-hal-listele',
  async () => {
    return await axios.get('/Personel/medeni-hal-listele');
  }
);

export const getBolumList = createAsyncThunk(
  '/Firma/bolum-listele',
  async (data) => {
    return await axios.post('/Firma/bolum-listele', data);
  }
);

export const staffSlice = createSlice({
  name: 'staff',
  initialState: {
    personalStaffList: [],
    sigortaTurList: [],
    sozlesmeTurList: [],
    reasonLeavingList: [],
    ogrenimDurumuList: [],
    askerlikDurumList: [],
    engellikDurumList: [],
    maasOdemeTurList: [],
    maasPeriyotList: [],
    medeniHalList: [],
    bolumList: []
  },
  reducers: {},
  extraReducers: {
    [getPersonelStaffLists.fulfilled]: (state, action) => {
      let data = action.payload.data;
      state.personalStaffList = data;
    },
    [getSigortaTurList.fulfilled]: (state, action) => {
      state.sigortaTurList = action.payload;
    },
    [getSozlesmeTurList.fulfilled]: (state, action) => {
      state.sozlesmeTurList = action.payload;
    },
    [getReasonLeavingList.fulfilled]: (state, action) => {
      state.reasonLeavingList = action.payload.data;
    },
    [getOgrenimDurumuList.fulfilled]: (state, action) => {
      state.ogrenimDurumuList = action.payload;
    },
    [getAskerlikDurumList.fulfilled]: (state, action) => {
      state.askerlikDurumList = action.payload.data;
    },
    [getEngellikDurumList.fulfilled]: (state, action) => {
      state.engellikDurumList = action.payload.data;
    },
    [getMaasOdemeTurList.fulfilled]: (state, action) => {
      state.maasOdemeTurList = action.payload;
    },
    [getMaasPeriyotList.fulfilled]: (state, action) => {
      state.maasPeriyotList = action.payload;
    },
    [getMedeniHalList.fulfilled]: (state, action) => {
      state.medeniHalList = action.payload;
    },
    [getBolumList.fulfilled]: (state, action) => {
      state.bolumList = action.payload.data;
    }
  }
});

// Action creators are generated for each case reducer function
// export const { } = firmSlice.actions;

export default staffSlice.reducer;