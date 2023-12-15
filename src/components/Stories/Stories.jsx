import React, {useContext} from "react";
import "./Stories.scss"
import {AuthContext} from "../../context/AuthContext";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../pages/Login/authSlice";

const stories = [
    {
        id: 1,
        name: "Pasha Technic",
        img: "https://kbtu.edu.kz/images/KBTU_.jpg"
    },
    {
        id: 2,
        name: "OXXY Miron",
        img: "https://kbtu.edu.kz/images/KBTU_.jpg"
    },
    {
        id: 3,
        name: "Erke 228",
        img: "https://kbtu.edu.kz/images/KBTU_.jpg"
    },
    {
        id: 4,
        name: "AKTOBE KAIRATTI AIYRADI",
        img: "https://kbtu.edu.kz/images/KBTU_.jpg"
    },
]
const Stories = () => {
    // const {currentUser} = useContext(AuthContext)
    const {currentUser} = useSelector(selectCurrentUser)
    const {token} = useSelector(selectCurrentUser)
    return (

        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic}/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img}/>
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories;