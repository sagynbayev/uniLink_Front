import {apiSlice} from "../../api/apiSlice";

export const groupPageApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getGroupPage: builder.query({
            query: (groupId) => `group/${groupId}`,
        }),
        isFollowedGroup: builder.query({
            query: (groupId) => `group/follow/is-followed/${groupId}`,
            providesTags: (result, error, groupId) => [{ type: "isFollowed", id: groupId }],
        }),
    })
})

export const {
    useGetGroupPageQuery,
    useIsFollowedGroupQuery
} = groupPageApiSlice