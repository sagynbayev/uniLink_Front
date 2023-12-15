import React from "react";
import {Link} from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./User.scss"
import ImageComponent from "../../../../assets/ImageComponent";
import noPicture from "../../../../assets/images/emptyPicture.png";
const User = ({user}) => {
    const haveImage = user.image
    const handleFollow = () => {
        console.log("ЪУЪ SUKA I AM FOLLOWING YOU")
    }
    console.log(user)
    return (
        <div className="follower">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        {haveImage !== null
                            ? (<ImageComponent imageBytes={user.image}/>)
                            : (<img src={noPicture}/>)}
                        <div className="details">
                            <Link to={`/profile/${user.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{user.name + " " + user.surname}</span>
                            </Link>
                            <span className="description">{user.desc}</span>
                        </div>
                    </div>
                    {/*<button onClick={handleFollow}>Follow</button>*/}
                    <MoreHorizIcon/>
                </div>
                <hr/>
            </div>
        </div>
    )
}
export default User