import {apiSlice} from "../../api/apiSlice";

export const shareApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createPost: builder.mutation({
            query: ({post_text, images, token}) => ({
                url: 'user/post',
                method: 'POST',
                body: { post_text, images },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        }),
    })
})

export const {
    useCreatePostMutation
} = shareApiSlice