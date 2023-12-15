import React from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../pages/Login/authSlice";
import {useGetAllUsersQuery, useGetFollowersQuery} from "../../../pages/FriendsList/friendsListApiSlice";
import Follower from "../Followers/Follower/Follower";
import User from "./User/User";

const AllUsers = () => {
    const {data: usersInfo, isLoading, isError} = useGetAllUsersQuery()
    console.log(usersInfo)
    return (
        <div className="followers">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : usersInfo.map(user => (
                        <User user={user} key={user.id}/>
                    ))
            }
        </div>
    );
}
export default AllUsers