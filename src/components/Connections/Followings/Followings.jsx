import React from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../pages/Login/authSlice";
import {useGetFollowersQuery, useGetFollowingsQuery} from "../../../pages/FriendsList/friendsListApiSlice";
import Follower from "../Followers/Follower/Follower";
import Following from "./Following/Following";
import "./Followings.scss"

const Followings = () => {
    const userME = useSelector(selectCurrentUser)
    const {data: followingsInfo, isLoading, isError} = useGetFollowingsQuery(userME.id)
    // console.log(followingsInfo.follows)
    return (
        <div className="followings">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : followingsInfo.follows.map(following => (
                        <Following following={following} key={following.id}/>
                    ))
            }
        </div>
        // <div>Following</div>
    );
}
export default Followings