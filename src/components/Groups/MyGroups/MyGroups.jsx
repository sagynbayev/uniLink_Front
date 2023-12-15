import React from "react";
import "./MyGroups.scss"
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../pages/Login/authSlice";
import {useGetFollowedGroupsQuery, useGetMyGroupsQuery} from "../../../pages/GroupList/groupsListApiSlice";
import FollowedGroup from "../FollowedGroups/FollowedGroup/FollowedGroup";
import MyGroup from "./MyGroup/MyGroup";


const MyGroups = () => {
    const userME = useSelector(selectCurrentUser)
    const {data: myGroups, isLoading, isError} = useGetMyGroupsQuery()
    console.log(myGroups)
    return (
        <div className="myGroups">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : myGroups.map(group => (
                        <MyGroup group={group} key={group.id} count={myGroups.count}/>
                    ))
            }
        </div>
        // <div>Followed Groups</div>
    )
}
export default MyGroups