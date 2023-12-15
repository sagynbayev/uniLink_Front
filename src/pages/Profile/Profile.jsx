import React from "react";
import "./Profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/Posts/Posts";
import {useSelector} from "react-redux";
import {selectCurrentToken, selectCurrentUser} from "../Login/authSlice";
import {useGetUserProfileQuery, useIsFollowedQuery} from "./profileApiSlice";
import {useNavigate, useParams} from "react-router-dom";
import ImageComponent from "../../assets/ImageComponent";
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import noPicture from "../../assets/images/emptyPicture.png";
import {useFollowUserMutation, useUnfollowUserMutation} from "../FriendsList/friendsListApiSlice";

const Profile = () => {
    const profileId = useParams()
    const {data: userProfile, isLoading} = useGetUserProfileQuery(profileId.userId)
    const {data: isFollowed, isLoading: pisLoading} = useIsFollowedQuery(profileId.userId)
    const [follow, {isLoading: pfisLoading}] = useFollowUserMutation(profileId.userId)
    const [unfollow, {isLoading: puisLoading}] = useUnfollowUserMutation(profileId.userId)

    console.log(profileId.userId)
    console.log(isFollowed)
    const userMEEE = useSelector(selectCurrentUser)
    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)
    // console.log(userMEEE.id)
    // console.log(userProfile.id)
    // console.log(useSelector(selectCurrentToken))
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const haveImage = userProfile.images.length
    console.log(haveImage)
    const handleFollow = async () => {
        const user_id = parseInt(profileId.userId)
        if(isFollowed.is_followed){
            // console.log("asdadsasd")
            await unfollow({user_id, token})
        }else{
            // console.log("asdadadaadadsadsdada")
            await follow({user_id, token})
        }
    }
    const handleUpdate = () => {
        navigate("settings")
    }
    return (
        <div className="profile">
            <div className="images">
                <img src={"https://img.freepik.com/free-vector/watercolor-background_87374-69.jpg?w=2000"}
                     className="cover"/>
                {haveImage
                    ? (<ImageComponent imageBytes={userProfile.images[0].image} imageClass={"profilePic"}/>)
                    : (<img className="profilePic" src={noPicture}/>)
                }
                {/*<img className="profilePic" src={noPicture}/>*/}
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook. com">
                            <FacebookTwoToneIcon/>
                        </a>
                        <a href="http://facebook. com">
                            <InstagramIcon/>
                        </a>
                        <a href="http://facebook. com">
                            <GitHubIcon/>
                        </a>
                        <a href="http://facebook. com">
                            <LinkedInIcon/>
                        </a>
                    </div>
                    <div className="center">
                        <span>{userProfile.name + " " + userProfile.surname}</span>
                        <div className="info">
                            {/*<div className="item">*/}
                            {/*    <PlaceIcon/>*/}
                            {/*    <span>Kazakhstan</span>*/}
                            {/*</div>*/}
                            <div className="item">
                                <ContactMailOutlinedIcon/>
                                <span>{userProfile.email}</span>
                            </div>
                        </div>
                        {pisLoading ?
                            ("Loading") :
                            userProfile.id === userMEEE.id
                                ? (<button onClick={handleUpdate}>Update</button>)
                                : (<button
                                    onClick={handleFollow}>{isFollowed.is_followed === true ? "Unfollow" : "Follow"}</button>)
                        }
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <Posts userId={userProfile.id}/>
            </div>
        </div>
    )
}

export default Profile;