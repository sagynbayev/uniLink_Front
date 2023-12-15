import React, {useState} from "react";
import "./FriendsList.scss"
import noPicture from "../../assets/images/emptyPicture.png"
import {Link} from "react-router-dom";
import Followers from "../../components/Connections/Followers/Followers";
import AllUsers from "../../components/Connections/AllUsers/AllUsers";
import Followings from "../../components/Connections/Followings/Followings";

const friendsList = [
    {
        id: 10,
        name: "Kairatov Alimzhan",
        profilePic: noPicture,
        desc: "SUKA BLYAT AKTOBE KAIRATTI AIRADI"
    },
    {
        id: 12,
        name: "Erke 228",
        profilePic: noPicture,
        desc: "MEMENTO MORI"
    },
];
const FriendsList = () => {
    const [selectedLink, setSelectedLink] = useState("followers")

    const handleLinkClick = (link) =>{
        setSelectedLink(link)
    }

    const renderSelectedComponent = () => {
        switch (selectedLink) {
            case "followers":
                return <Followers/>
            case "followings":
                return <Followings/>
            case "all":
                return <AllUsers/>
        }
    }
    return (
        <div className="friends">
            <div className="menu">
                <div className="item">
                    <Link to="followers" onClick={() => handleLinkClick("followers")} style={{textDecoration: "none", color: "inherit"}}><span>Followers</span></Link>
                </div>
                <div className="item">
                    <Link to="followings" onClick={() => handleLinkClick("followings")} style={{textDecoration: "none", color: "inherit"}}><span>Following</span></Link>
                </div>
                <div className="item">
                    <Link to="all" onClick={() => handleLinkClick("all")} style={{textDecoration: "none", color: "inherit"}}><span>All Users</span></Link>
                </div>
            </div>
            <hr/>
            <div className="friendsType">
                {renderSelectedComponent()}
            </div>
        </div>
    )
}

export default FriendsList