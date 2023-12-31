import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {logOut, setCredentials} from "../pages/Login/authSlice";


const baseQuery = fetchBaseQuery({
    // baseUrl: 'http://127.0.0.1:8081',
    // credentials: 'include',
    baseUrl: 'http://localhost:8081',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
            // headers.set("Accept", "application/json")
            // headers.set('Access-Control-Allow-Origin', '*')
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/tokens/renew-access', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Posts", "Events", "Groups", "isFollowed", "Followers", "Followings"],
    endpoints: builder => ({})
})