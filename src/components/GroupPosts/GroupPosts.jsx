import React from "react";
import "./GroupPosts.scss"
import {useGetGroupPageQuery} from "../../pages/GroupPage/groupPageApiSlice";
import {useGetGroupPostsQuery} from "./groupPostsApiSlice";
import GroupPost from "./GroupPost/GroupPost";

const GroupPosts = ({groupId}) => {

    const {data: postsInfo, isLoading, isError} = useGetGroupPostsQuery(groupId)
    const {data: groupPage, isLoading: gisLoading, isError: gisError} = useGetGroupPageQuery(groupId)
    // console.log(postsInfo[25].images[0].image)
    console.log(postsInfo)
    console.log(groupPage)
    return (
        <div className="posts">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : postsInfo.map(post => (
                        <GroupPost post={post} key={post.id} groupPage={groupPage}/>
                    ))
            }
        </div>
    );
}
export default GroupPosts;