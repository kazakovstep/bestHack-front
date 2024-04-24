import {AdminAPI, token} from "./AdminAPI";

export const deleteUser = AdminAPI.injectEndpoints({
    endpoints: builder => ({
        deleteUserById: builder.mutation<void, number>({
            query: (id) => ({
                url: `/users/${id}`,
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                method: "DELETE"
            })
        }),
    })
})

export const {useDeleteUserByIdMutation} = deleteUser