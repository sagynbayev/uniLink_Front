import {apiSlice} from "../../api/apiSlice";

export const friendListApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFollowers: builder.query({
            query: (userId) => `follow/followers/${userId}`,
        }),
        getFollowings: builder.query({
            query: (userId) => `follow/followings/${userId}`,
            providesTags: (result, error, userId) => {
                if (result) {
                    return [{ type: "Followings", id: userId }];
                }
                return [{ type: "Followings" }];
            },
        }),
        getAllUsers: builder.query({
            query: () => `user/all`,
        }),
        followUser: builder.mutation({
            query: ({user_id, token}) => ({
                url: 'follow',
                method: 'POST',
                body: {user_id},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: [{ type: "isFollowed" }, { type: "Followings" }],
        }),
        unfollowUser: builder.mutation({
            query: ({user_id, token}) => ({
                url: 'follow',
                method: 'DELETE',
                body: {user_id},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: [{ type: "isFollowed" }, { type: "Followings" }],
        })
    })
})

export const {
    useGetFollowersQuery,
    useGetFollowingsQuery,
    useGetAllUsersQuery,
    useFollowUserMutation,
    useUnfollowUserMutation
} = friendListApiSlice