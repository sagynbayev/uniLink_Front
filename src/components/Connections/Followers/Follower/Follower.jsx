import React from "react";
import {Link} from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Follower.scss"
import ImageComponent from "../../../../assets/ImageComponent";
import noPicture from "../../../../assets/images/emptyPicture.png";
const Follower = ({follower}) => {
    const haveImage = follower.image
    const handleFollow = () => {
        console.log("ЪУЪ SUKA I AM FOLLOWING YOU")
    }
    return (
        <div className="follower">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        {haveImage
                            ? (<ImageComponent imageBytes={follower.image}/>)
                            : (<img src={noPicture}/>)}
                        <div className="details">
                            <Link to={`/profile/${follower.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{follower.name + " " + follower.surname}</span>
                            </Link>
                            <span className="description">{follower.desc}</span>
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
export default Follower