import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import commonReducer from './commonSlice';
import toastReducer from './toastSlice';
import firmReducer from './firmSlice';
import staffReducer from './staffSlice';
import companyReducer from './companySlice';
import mutualReducer from './mutualSlice';
import authenticationReducer from './authenticationSlice';
import materialStockReducer from './materialStockSlice';

export default configureStore({
    reducer: {
        common: commonReducer,
        toast: toastReducer,

        company:companyReducer,
        staff:staffReducer,
        firm: firmReducer,
        mutual: mutualReducer,
        aut: authenticationReducer,
        material: materialStockReducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production'
});