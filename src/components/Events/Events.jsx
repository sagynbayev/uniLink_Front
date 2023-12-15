import React from "react";
import "./Events.scss"
import Event from "./Event/Event";
import e1 from "../../assets/events/event1.jpg"
import e2 from "../../assets/events/event2.jpg"
import e3 from "../../assets/events/event3.jpg"
import e4 from "../../assets/events/event4.jpg"
import e5 from "../../assets/events/event5.jpg"
import e6 from "../../assets/events/event6.jpg"
import e7 from "../../assets/events/event7.jpg"
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../pages/Login/authSlice";
import {useGetAllGroupsQuery, useGetFollowedGroupsQuery} from "../../pages/GroupList/groupsListApiSlice";
import {useGetAllEventsQuery} from "../../pages/EventsPage/eventsPageApiSlice";

export const Events = () => {
    const userME = useSelector(selectCurrentUser)
    const {data: events, isLoading, isError} = useGetAllEventsQuery()
    // console.log(events[3].image)
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>...</div>;
    }
    return (
        <div className="events">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : events.map(event => (
                        <Event event={event} key={event.id}/>
                    ))}
        </div>
    )
}

export default Events
