import React from "react";
import "./LeftBar.scss"
import ImageComponent from "../../assets/ImageComponent";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SchoolIcon from '@mui/icons-material/School';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import {Link} from "react-router-dom";
import noPicture from "../../assets/images/emptyPicture.png";



const LeftBar = ({user}) => {
    const haveImage = user.images.length

    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        {haveImage
                            ? (<ImageComponent imageBytes={user.images[0].image}/>)
                            : (<img src={noPicture}/>)}
                        <Link to={"/profile/" + user.id} style={{textDecoration: "none", color: "inherit"}}>
                            <span>{user.name + " " + user.surname}</span>
                        </Link>
                    </div>
                    <div className="item">
                        <GroupOutlinedIcon/>
                        <Link to={"/friends"} style={{textDecoration: "none", color: "inherit"}}>
                            <span>Connections</span>
                        </Link>
                    </div>
                    <div className="item">
                        <GroupsOutlinedIcon/>
                        <Link to={"/group"} style={{textDecoration: "none", color: "inherit"}}>
                            <span>Groups</span>
                        </Link>
                    </div>
                    <div className="item">
                        <ChatOutlinedIcon/>
                        <span>Messages</span>
                    </div>
                    <div className="item">
                        <CalendarMonthOutlinedIcon/>
                        <Link to={"/events"} style={{textDecoration: "none", color: "inherit"}}>
                            <span>Events</span>
                        </Link>
                    </div>
                    <div className="item">
                        <ImageOutlinedIcon/>
                        <span>Gallery</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <ScreenshotMonitorIcon/>
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <SchoolIcon/>
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;