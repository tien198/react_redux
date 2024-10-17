import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authenReducer from './auth';

const store = configureStore({
    reducer: {
        auth: authenReducer,
        counter: counterReducer
    }
})

export default store