import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {token} from "./AdminAPI";

export interface Push {
    roleDestination: string,
    title: string,
    description: string,
    datetime: Date
}

export const HistoryAPI = createApi({
    reducerPath: "HistoryAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: (builder) => ({
        getAllPushes: builder.query<Push[], void>({
            query: () => ({
                url: `/pushes`,
                headers: {"Authorization": `Bearer ${token}`}
            })
        })
    })
})

export const {
    useGetAllPushesQuery
} = HistoryAPI