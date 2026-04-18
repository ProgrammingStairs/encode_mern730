import { configureStore } from "@reduxjs/toolkit";
import adminSlice from './AdminSlice.js';
import tpoSlice from './TPOSlice.js';
import studentSlice from './StudentSlice.js';

export default configureStore({
    reducer:{
        admin:adminSlice,
        student:studentSlice,
        tpo:tpoSlice
    }
})