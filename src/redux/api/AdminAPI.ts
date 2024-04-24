import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const AdminAPI = createApi({
    reducerPath: "AdminAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/admin"
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query<any, void>({query: () => "/allUsers"})
    })
})

export const {
    useGetAllUsersQuery,
} = AdminAPI