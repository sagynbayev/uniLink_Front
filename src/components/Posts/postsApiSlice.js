import {apiSlice} from "../../api/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserPosts: builder.query({
            query: (userId) => `user/post?user_id=${userId}`,
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({type: "Posts", id})),
                    {type: "Posts", id: "LIST"}
                ]
                : [{type: "Posts", id: "LIST"}]
        }),
        createPost: builder.mutation({
            query: ({post_text, images, token}) => ({
                url: 'user/post',
                method: 'POST',
                body: {post_text, images},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: [{type: "Posts", id: "LIST"}]

        }),
        likePost: builder.mutation({
            query: ({post_id, token}) => ({
                url: 'post/like',
                method: 'POST',
                body: {post_id},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: [{type: "Posts", id: "LIST"}],
            onSuccess: (data, { requestId }) => {
                console.log('Post is liked', data);
            }
        }),
    })
})

export const {
    useGetUserPostsQuery,
    useCreatePostMutation,
    useLikePostMutation
} = postsApiSlice