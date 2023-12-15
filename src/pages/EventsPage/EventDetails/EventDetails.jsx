import React from "react";
import "./EventDetails.scss"
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link, useParams} from "react-router-dom";
import e1 from "../../../assets/events/event1.jpg";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../Login/authSlice";
import {useGetAllEventsQuery, useGetEventByIdQuery} from "../eventsPageApiSlice";
import {useGetGroupPageQuery} from "../../GroupPage/groupPageApiSlice";
import moment from "moment";
import ImageComponent from "../../../assets/ImageComponent";
import noPicture from "../../../assets/images/emptyPicture.png";

const EventDetails = () => {
    const eventId = useParams()
    console.log(eventId.eventId)
    const {data: eventPage, isLoading, isError} = useGetEventByIdQuery(eventId.eventId)
    console.log(eventPage)
    // const eventDate = moment(eventPage.start_date).format("MMM Do")
    // const eventTime = moment(eventPage.start_date).format("h:mm a")
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Something went wrong...</div>;
    }

    const haveImage = eventPage.image

    return (
        <div className="eventDetails">
            <div className="top">
                {haveImage !== null
                    ? (<ImageComponent imageBytes={eventPage.image.image}/>)
                    : (<img className="profilePic" src={noPicture}/>)
                }
                {/*<img src={eventDetails[0].eventImage}/>*/}
                <div className="info">
                    <span className="category">{eventPage.category}</span>
                    <span className="title">{eventPage.title}</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <p>{eventPage.description}</p>
                </div>
                <div className="right">
                    <div className="container">
                        <div className="date">
                            <EventAvailableIcon/>
                            <span>{moment(eventPage.start_date).format("MMM Do")}</span>
                        </div>
                        <div className="eventInfo">
                            <div className="item">
                                <LocationOnIcon fontSize="small"/>
                                <span>{eventPage.location}</span>
                            </div>
                            <div className="item">
                                <AccessTimeIcon fontSize="small"/>
                                <span>{moment(eventPage.start_date).format("h:mm a")}</span>
                            </div>
                            <div className="item">
                                <MonetizationOnIcon fontSize="small"/>
                                <span>{eventPage.ticket_price}</span>
                            </div>
                            <div className="item">
                                <LocalPhoneIcon fontSize="small"/>
                                <span>{eventPage.contactPhone}</span>
                            </div>
                            <Link to={`/tickets/${eventPage.id}`} style={{textDecoration: "none"}}>
                                <button>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails