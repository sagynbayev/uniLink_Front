import {apiSlice} from "../../api/apiSlice";

export const groupsListApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFollowedGroups: builder.query({
            query: (userId) => `group/follow/user/${userId}`,
            providesTags: (result, error, userId) => {
                if (result) {
                    return [{ type: "FollowedGroup", id: userId }];
                }
                return [{ type: "FollowedGroup" }];
            },
        }),
        getAllGroups: builder.query({
            query: () => `group/all`,
            providesTags: [{type: "Groups", id: "LIST"}]
        }),
        getMyGroups: builder.query({
            query: () => `group/my-groups`,
            providesTags: [{type: "Groups", id: "LIST"}]
        }),
        createGroup: builder.mutation({
            query: ({name, group_type, description, image, token}) => ({
                url: 'group',
                method: 'POST',
                body: { name, group_type, description, image},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: [{type: "Groups", id: "LIST"}]
        }),
        followGroup: builder.mutation({
            query: ({group_id, token}) => ({
                url: 'group/follow',
                method: 'POST',
                body: {group_id},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: [{ type: "isFollowed" }, { type: "FollowedGroup" }],
        }),
        unfollowGroup: builder.mutation({
            query: ({group_id, token}) => ({
                url: 'group/follow',
                method: 'DELETE',
                body: {group_id},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
            invalidatesTags: [{ type: "isFollowed" }, { type: "FollowedGroup" }],
        })
    })
})

export const {
    useGetFollowedGroupsQuery,
    useGetAllGroupsQuery,
    useCreateGroupMutation,
    useFollowGroupMutation,
    useUnfollowGroupMutation,
    useGetMyGroupsQuery
} = groupsListApiSlice