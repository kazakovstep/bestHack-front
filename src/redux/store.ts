import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {AdminAPI} from "./api/AdminAPI";
import {HistoryAPI} from "./api/HistoryAPI";
import {UserAPI} from "./api/UserAPI";

export const store = configureStore({
    reducer: {
        [AdminAPI.reducerPath]: AdminAPI.reducer,
        [HistoryAPI.reducerPath]: HistoryAPI.reducer,
        [UserAPI.reducerPath]: UserAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(AdminAPI.middleware).concat(HistoryAPI.middleware).concat(UserAPI.middleware),
    devTools: process.env.NODE_ENV !== "production"
})
export type RootState = ReturnType<typeof store.getState>