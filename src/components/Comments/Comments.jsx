import React, {useContext} from "react";
import "./Comments.scss"
import {AuthContext} from "../../context/AuthContext";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../pages/Login/authSlice";

const comments = [
    {
        id: 1,
        desc: "Voistinu brat",
        name: "Erke 228",
        userId: 1,
        profilePic: "https://i.pinimg.com/originals/3b/05/d2/3b05d2c1141e308af91467b9c14b241d.jpg"
    },
    {
        id: 2,
        desc: "KAIRATTIN KOTIN AYIRADI!KAIRATTIN KOTIN AYIRADI!KAIRATTIN KOTIN AYIRADI!KAIRATTIN KOTIN AYIRADI!",
        name: "Blyat Irina",
        userId: 2,
        profilePic: "https://i.pinimg.com/originals/3b/05/d2/3b05d2c1141e308af91467b9c14b241d.jpg"
    },
]
const Comments = () => {
    // const {currentUser} = useContext(AuthContext)
    const {currentUser} = useSelector(selectCurrentUser)
    const {token} = useSelector(selectCurrentUser)
    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic}/>
                <input type={"text"} placeholder={"Comment"}/>
                <button>Send</button>
            </div>
            {
                comments.map(comment => (
                    <div className="comment">
                        <img src={comment.profilePic}/>
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hour ago</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Comments;