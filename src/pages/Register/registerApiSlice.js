import {apiSlice} from "../../api/apiSlice";

export const registerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: credentials => ({
                url: 'user',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})
export const {
    useRegisterMutation
} = registerApiSlice
