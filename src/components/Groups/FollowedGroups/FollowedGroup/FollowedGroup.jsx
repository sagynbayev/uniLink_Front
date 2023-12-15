import React from "react";
import "./FollowedGroup.scss"
import ImageComponent from "../../../../assets/ImageComponent";
import noPicture from "../../../../assets/images/emptyPicture.png";
import {Link} from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const FollowedGroup = ({group, count}) => {
    console.log(group)
    console.log(count)
    const haveImage = group.image
    return (
        <div className="followedGroup">
            <div className="container">
                <div className="group">
                    <div className="groupInfo">
                        {haveImage !== null
                            ? (<ImageComponent imageBytes={group.image}/>)
                            : (<img src={noPicture}/>)
                        }
                        <div className="details">
                            <Link to={`/group/${group.id}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{group.name}</span>
                            </Link>
                            <span className="followers">{group.description}</span>
                        </div>
                    </div>
                    {/*<button>Follow</button>*/}
                    <MoreHorizIcon/>
                </div>
                <hr/>
            </div>
        </div>
    )
}
export default FollowedGroup