import React from "react";
import "./MyGroup.scss"
import ImageComponent from "../../../../assets/ImageComponent";
import noPicture from "../../../../assets/images/emptyPicture.png";
import {Link} from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const MyGroup =({group}) =>{
    // console.log(group)
    const haveImage = group.image
    return (
        <div className="myGroup">
            <div className="container">
                <div className="group">
                    <div className="groupInfo">
                        {haveImage !== null
                            ? (<ImageComponent imageBytes={group.image.image}/>)
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
export default MyGroup