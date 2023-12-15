import {apiSlice} from "../../api/apiSlice";

export const eventsPageApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllEvents: builder.query({
            query: () => `event/all`,
            providesTags: [{type: "Events", id: "LIST"}]
        }),
        getEventById: builder.query({
            query: (eventId) => `event/${eventId}`,
        }),
        createEvent: builder.mutation({
            query: credentials => ({
                url: 'event',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: [{type: "Events", id: "LIST"}]
        }),
    })
})

export const {
    useGetAllEventsQuery,
    useGetEventByIdQuery,
    useCreateEventMutation
} = eventsPageApiSlice