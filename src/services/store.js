import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainSlice';

const store = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;