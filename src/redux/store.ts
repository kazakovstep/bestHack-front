import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {AdminAPI} from "./api/AdminAPI";

export const store = configureStore({
    reducer: {
        [AdminAPI.reducerPath]: AdminAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(AdminAPI.middleware),
    devTools: process.env.NODE_ENV !== "production"
})
export type RootState = ReturnType<typeof store.getState>