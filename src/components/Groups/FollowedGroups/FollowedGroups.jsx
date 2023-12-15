import React from "react";
import "./FollowedGroups.scss"
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../pages/Login/authSlice";
import {useGetFollowersQuery} from "../../../pages/FriendsList/friendsListApiSlice";
import {useGetFollowedGroupsQuery} from "../../../pages/GroupList/groupsListApiSlice";
import Follower from "../../Connections/Followers/Follower/Follower";
import FollowedGroup from "./FollowedGroup/FollowedGroup";
import followedGroup from "./FollowedGroup/FollowedGroup";


const FollowedGroups =() =>{
    const userME = useSelector(selectCurrentUser)
    const {data: followedGroups, isLoading, isError} = useGetFollowedGroupsQuery(userME.id)
    return(
        <div className="followedGroups">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : followedGroups.followed_groups.map(group => (
                        <FollowedGroup group={group} key={group.id} count={followedGroups.count}/>
                    ))
            }
        </div>
        // <div>Followed Groups</div>
    )
}
export default FollowedGroups