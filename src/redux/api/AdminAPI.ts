import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const token = localStorage.getItem("token");

export interface User {
    id: number,
    username: string,
    email: string,
    roles: [{name: string}]
}

export const AdminAPI = createApi({
    reducerPath: "AdminAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/admin"
    }),
    endpoints: (builder) => ({
        getAllUsers: builder.query<User[], void>({
            query: () => ({
                url: `/users`,
                headers: {"Authorization": `Bearer ${token}`}
            })
        })
    })
})

export const {
    useGetAllUsersQuery,
} = AdminAPI