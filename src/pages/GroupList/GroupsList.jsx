import React, {useState} from "react";
import "./GroupsList.scss"
import noPicture from "../../assets/images/emptyPicture.png";
import aktobeFan from "../../assets/images/aktobeFan1.jpg"
import Group from "./Group/Group";
import Followers from "../../components/Connections/Followers/Followers";
import Followings from "../../components/Connections/Followings/Followings";
import AllUsers from "../../components/Connections/AllUsers/AllUsers";
import {Link} from "react-router-dom";
import FollowedGroups from "../../components/Groups/FollowedGroups/FollowedGroups";
import MyGroups from "../../components/Groups/MyGroups/MyGroups";
import RecommendedGroups from "../../components/Groups/RecommendedGroups/RecommendedGroups";
import CreateGroup from "../../components/Groups/CreateGroups/CreateGroup";

const GroupList = () => {
    const [selectedLink, setSelectedLink] = useState("followed")

    const handleLinkClick = (link) =>{
        setSelectedLink(link)
    }

    const renderSelectedComponent = () => {
        switch (selectedLink) {
            case "followed":
                return <FollowedGroups/>
            case "my":
                return <MyGroups/>
            case "recommended":
                return <RecommendedGroups/>
            case "create":
                return <CreateGroup/>
        }
    }
    return (
        <div className="groups">
            <div className="menu">
                <div className="item">
                    <Link to="followed" onClick={() => handleLinkClick("followed")} style={{textDecoration: "none", color: "inherit"}}><span>Followed Groups</span></Link>
                </div>
                <div className="item">
                    <Link to="my" onClick={() => handleLinkClick("my")} style={{textDecoration: "none", color: "inherit"}}><span>My Groups</span></Link>
                </div>
                <div className="item">
                    <Link to="recommended" onClick={() => handleLinkClick("recommended")} style={{textDecoration: "none", color: "inherit"}}><span>Recommendation</span></Link>
                </div>
                <div className="item">
                    <Link to="create" onClick={() => handleLinkClick("create")} style={{textDecoration: "none", color: "inherit"}}><span>Create Group</span></Link>
                </div>
            </div>
            <hr/>
            <div className="groupsType">
                {renderSelectedComponent()}
            </div>
        </div>
    )
}
export default GroupList