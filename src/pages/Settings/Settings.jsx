import React, {useState} from "react";
import "./Settings.scss"
import {Link} from "react-router-dom";
import ImageChange from "./SettingTypes/ImageChange/ImageChange";
import PasswordChange from "./SettingTypes/PasswordChange/PasswordChange";
import InfoChange from "./SettingTypes/InfoChange/InfoChange";

export const Settings = () => {
    const [selectedLink, setSelectedLink] = useState("password")

    const handleLinkClick = (link) =>{
        setSelectedLink(link)
    }

    const renderSelectedComponent = () => {
        switch (selectedLink) {
            case "password":
                return <PasswordChange/>
            case "info":
                return <InfoChange/>
            case "image":
                return <ImageChange/>
        }
    }

    return (
        <div className="settings">
            <h1>Settings</h1>
            <div className="menu">
                <div className="item">
                    <Link to="password" onClick={() => handleLinkClick("password")} style={{textDecoration: "none", color: "inherit"}}><span>Change Password</span></Link>
                </div>
                <div className="item">
                    <Link to="info" onClick={() => handleLinkClick("info")} style={{textDecoration: "none", color: "inherit"}}><span>Change Info</span></Link>
                </div>
                <div className="item">
                    <Link to="image" onClick={() => handleLinkClick("image")} style={{textDecoration: "none", color: "inherit"}}><span>Change Image</span></Link>
                </div>
                <div className="item">
                    <Link to="/login" onClick={() => handleLinkClick("quits")} style={{textDecoration: "none", color: "inherit"}}><span>Log Out</span></Link>
                </div>
            </div>
            <hr/>
            <div className="setting">
                {renderSelectedComponent()}
            </div>
        </div>
    )
}

export default Settings
