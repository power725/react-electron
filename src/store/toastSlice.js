import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    toasts: []
  },
  reducers: {
    success: (state, action) => {
        state.toasts.push({
            id: new Date().getTime(),
            text: action.payload,
            type: 'success'
        });
    },
    warning: (state, action) => {
        state.toasts.push({
            id: new Date().getTime(),
            text: action.payload,
            type: 'warning'
        });
    },
    info: (state, action) => {
        state.toasts.push({
            id: new Date().getTime(),
            text: action.payload,
            type: 'info'
        });
    },
    error: (state, action) => {
        state.toasts.push({
            id: new Date().getTime(),
            text: action.payload,
            type: 'error'
        });
    },
    closeToast: (state, action) => {
        const targetIndex = state.toasts.findIndex(toast => toast.id === action.payload);
        state.toasts.splice(targetIndex, 1);
    }
  },
});

// Action creators are generated for each case reducer function
export const { success, warning, info, error, closeToast } = toastSlice.actions;

export default toastSlice.reducer;