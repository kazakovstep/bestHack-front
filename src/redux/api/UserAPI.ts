import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {token, User} from "./AdminAPI";


export const UserAPI = createApi({
    reducerPath: "UserAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: (builder) => ({
        gerCurrentUser: builder.query<User, void>({
            query: () => ({
                url: `/user`,
                headers: {"Authorization": `Bearer ${token}`}
            })
        })
    })
})

export const {
    useGerCurrentUserQuery
} = UserAPI