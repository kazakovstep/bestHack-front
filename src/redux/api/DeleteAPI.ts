import {AdminAPI} from "./AdminAPI";

export const deleteUser = AdminAPI.injectEndpoints({
    endpoints: builder => ({
        deleteUserById: builder.query<string, void>({
            query: (id) => ({
                url: `/push/delete/${id}`,
                method: "POST",
            })
        }),
    })
})

export const {useDeleteUserByIdQuery} = deleteUser