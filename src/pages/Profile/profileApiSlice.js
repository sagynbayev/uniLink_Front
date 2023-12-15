import {apiSlice} from "../../api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUserProfile: builder.query({
            query: (profileId) => `user/${profileId}`
        }),
        changeProfilePicture: builder.mutation({
            query: ({image, image_type, token}) => ({
                url: 'user/image',
                method: 'POST',
                body: {image, image_type},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        changeProfileInfo: builder.mutation({
            query: ({name, surname, description, token}) => ({
                url: 'user/update',
                method: 'PUT',
                body: {name, surname, description},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        isFollowed: builder.query({
            query: (profileId) => `follow/${profileId}`,
            providesTags: (result, error, profileId) => [{ type: "isFollowed", id: profileId }],
        }),
    })
})

export const {
    useGetUserProfileQuery,
    useChangeProfilePictureMutation,
    useIsFollowedQuery
} = profileApiSlice