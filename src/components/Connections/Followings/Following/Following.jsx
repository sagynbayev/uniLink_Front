import React from "react";
import {Link} from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Following.scss"
import ImageComponent from "../../../../assets/ImageComponent";
import noPicture from "../../../../assets/images/emptyPicture.png";
const Following = ({following}) => {
    const haveImage = following.image
    const handleFollow = () => {
        console.log("ЪУЪ SUKA I AM FOLLOWING YOU")
    }
    return (
        <div className="following">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        {haveImage
                            ? (<ImageComponent imageBytes={following.image}/>)
                            : (<img src={noPicture}/>)}
                        <div className="details">
                            <Link to={`/profile/${following.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{following.name + " " + following.surname}</span>
                            </Link>
                            <span className="description">{following.desc}</span>
                        </div>
                    </div>
                    {/*<button onClick={handleFollow}>Follow</button>*/}
                    <MoreHorizIcon/>
                </div>
                <hr/>
            </div>
        </div>
        // <div>Following</div>
    )
}
export default Following