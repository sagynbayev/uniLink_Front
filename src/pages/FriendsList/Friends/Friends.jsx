import React from "react";
import "./Friends.scss"
import {Link} from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Friends = ({friends}) => {
    return (
        <div className="friend">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={friends.profilePic}/>
                        <div className="details">
                            <Link to={`/profile/${friends.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{friends.name}</span>
                            </Link>
                            <span className="description">{friends.desc}</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default Friends