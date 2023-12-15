import React from "react";
import "./Posts.scss"
import Post from "./Post/Post";
import {useGetUserPostsQuery} from "./postsApiSlice";
import {useGetUserProfileQuery} from "../../pages/Profile/profileApiSlice";
import {useGetGroupPageQuery} from "../../pages/GroupPage/groupPageApiSlice";

const Posts = ({userId}) => {

    const {data: postsInfo, isLoading, isError} = useGetUserPostsQuery(userId)
    const {data: postUser} = useGetUserProfileQuery(userId)
    // const {data: groupPage, isLoading: gisLoading, isError: gisError} = useGetGroupPageQuery(groupId)
    // console.log(postsInfo[25].images[0].image)
    // console.log(groupPage)
    return (
        <div className="posts">
            {isError
                ? "Something is wrong, please wait ;)"
                : isLoading
                    ? "Loading... :]"
                    : postsInfo.map(post => (
                        <Post post={post} key={post.id} postUser={postUser}/>
                    ))
            }
        </div>
    );
}
export default Posts;