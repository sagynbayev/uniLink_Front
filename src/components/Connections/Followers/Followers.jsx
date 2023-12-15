import React from "react";
import {useGetUserPostsQuery} from "../../Posts/postsApiSlice";
import {useGetUserProfileQuery} from "../../../pages/Profile/profileApiSlice";
import Post from "../../Posts/Post/Post";
import {useGetFollowersQuery} from "../../../pages/FriendsList/friendsListApiSlice";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../pages/Login/authSlice";
import Follower from "./Follower/Follower";
import "./Followers.scss"
const Followers = () => {
    const userME = useSelector(selectCurrentUser)
    const {data: followersInfo, isLoading, isError} = useGetFollowersQuery(userME.id)
    return (
        <div className="followers">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : followersInfo.followers.map(follower => (
                        <Follower follower={follower} key={follower.id}/>
                    ))
            }
        </div>
    );
}
export default Followers