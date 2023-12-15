import {apiSlice} from "../../api/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getGroupPosts: builder.query({
            query: (groupId) => `group/post/all?group_id=${groupId}`,
            providesTags: (result) => result
                ? [
                    ...result.map(({id}) => ({type: "Posts", id})),
                    {type: "Posts", id: "LIST"}
                ]
                : [{type: "Posts", id: "LIST"}]
        }),
        createGroupPost: builder.mutation({
            query: ({body, images, group_id, token}) => ({
                url: 'group/post',
                method: 'POST',
                body: { body, group_id, images },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: [{type: "Posts", id: "LIST"}]
        }),
    })
})

export const {
    useGetGroupPostsQuery,
    useCreateGroupPostMutation
} = postsApiSlice