import React from "react";
import "./RecommendedGroups.scss"
import {useGetAllGroupsQuery} from "../../../pages/GroupList/groupsListApiSlice";
import RecommendedGroup from "./RecommendedGroup/RecommendedGroup";


const RecommendedGroups =() =>{
    const {data: allGroups, isLoading, isError} = useGetAllGroupsQuery()
    console.log(allGroups)
    return(
        <div className="allGroups">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : allGroups.map(group => (
                        <RecommendedGroup group={group} key={group.id}/>
                    ))
            }
        </div>
        // <div>Followed Groups</div>
    )
}
export default RecommendedGroups