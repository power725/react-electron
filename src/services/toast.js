import {
    success,
    warning,
    info,
    error
} from '../store/toastSlice';
import store from '../store';

const toast = {
    success: (text) => {
        store.dispatch(success(text));
    },
    warning: (text) => {
        store.dispatch(warning(text));
    },
    info: (text) => {
        store.dispatch(info(text));
    },
    error: (text) => {
        store.dispatch(error(text));
    }
};

export default toast;