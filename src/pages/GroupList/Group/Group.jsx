import React from "react";
import "./Group.scss"
import {Link} from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Group = ({group}) =>{
    return(
        <div className="group">
            <div className="container">
                <div className="groupInfo">
                    <div className="groupItems">
                        <img src={group.groupPic}/>
                        <div className="details">
                            <Link to={`/profile/${group.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{group.name}</span>
                            </Link>
                            <span className="followers">{group.followers} Followers</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <hr/>
            </div>
        </div>
    )
}
export default Group