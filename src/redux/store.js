import { configureStore } from "@reduxjs/toolkit";

import dataReducer from './fetchDataSlice';
const store = configureStore({
    reducer: {
        data: dataReducer,
    },
})

export default store;
