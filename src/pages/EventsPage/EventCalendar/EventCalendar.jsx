import React from "react";
import Events from "../../../components/Events/Events";
import "./EventCalendar.scss"

const EventCalendar = () => {
    return (
        <div className="eventCalendar">
            <h1>Events</h1>
            <Events/>
        </div>
    )
}
export default EventCalendar