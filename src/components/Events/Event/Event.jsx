import React from "react";
import "./Event.scss"
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import {Link} from "react-router-dom";
import ImageComponent from "../../../assets/ImageComponent";
import noPicture from "../../../assets/images/noEvent.jpeg";
import moment from "moment";

const Event = ({event}) => {
    console.log(event)
    const haveImage = event.image
    // console.log(haveImage)
    // console.log(event.image)
    const eventDate = moment(event.start_date).format("MMM Do")
    const eventTime = moment(event.start_date).format("h:mm a")
    console.log(eventDate)

    return (
        <div className="event">
            <div className="container">
                <div className="top">
                    {haveImage !== null
                        ? (<ImageComponent imageBytes={event.image.image} imageClass={"eventPic"}/>)
                        : <img className="eventPic" src={noPicture}/>
                    }
                    <div className="topInfo">
                        <div className="topItem">
                            <span>{event.category}</span>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <Link to={`/events/${event.id}`} style={{textDecoration: "none", color: "inherit"}}>
                        <span>{event.title}</span>
                    </Link>
                    <div className="commonInfo">
                        <span>{eventDate}, </span>
                        <span>{eventTime}, </span>
                        <span>{event.location}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event