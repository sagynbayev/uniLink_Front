import React from "react";
import "./GroupPage.scss"
import {useSelector} from "react-redux";
import {selectCurrentToken, selectCurrentUser} from "../Login/authSlice";
import {
    useFollowGroupMutation,
    useGetFollowedGroupsQuery,
    useUnfollowGroupMutation
} from "../GroupList/groupsListApiSlice";
import {useGetGroupPageQuery, useIsFollowedGroupQuery} from "./groupPageApiSlice";
import {Link, useParams} from "react-router-dom";
import ImageComponent from "../../assets/ImageComponent";
import noPicture from "../../assets/images/emptyPicture.png";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/Posts/Posts";
import GroupShare from "../../components/GroupShare/GroupShare";
import GroupPosts from "../../components/GroupPosts/GroupPosts";
import {useIsFollowedQuery} from "../Profile/profileApiSlice";
import {useFollowUserMutation, useUnfollowUserMutation} from "../FriendsList/friendsListApiSlice";

const GroupPage = () => {
    const groupId = useParams()
    // console.log(groupId.groupId)
    const {data: groupPage, isLoading, isError} = useGetGroupPageQuery(groupId.groupId)
    const {data: isFollowed, isLoading: pisLoading} = useIsFollowedGroupQuery(groupId.groupId)
    const [follow, {isLoading: pfisLoading}] = useFollowGroupMutation(groupId.groupId)
    const [unfollow, {isLoading: puisLoading}] = useUnfollowGroupMutation(groupId.groupId)
    const token = useSelector(selectCurrentToken)
    console.log(groupPage)
    const handleFollow = async () => {
        const group_id = parseInt(groupId.groupId)
        if(isFollowed.is_followed){
            // console.log("asdadsasd")
            await unfollow({group_id, token})
        }else{
            // console.log("asdadadaadadsadsdada")
            await follow({group_id, token})
        }
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Something went wrong...</div>;
    }
    const haveImage = groupPage.image
    return (
        <div className="groupPage">
            <div className="images">
                <img src={"https://img.freepik.com/free-vector/watercolor-background_87374-69.jpg?w=2000"}
                     className="cover"/>
                {haveImage !== null
                    ? (<ImageComponent imageBytes={groupPage.image.image} imageClass={"profilePic"}/>)
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
                        <span>{groupPage.name}</span>
                        <div className="info">
                            {/*<div className="item">*/}
                            {/*    <PlaceIcon/>*/}
                            {/*    <span>Kazakhstan</span>*/}
                            {/*</div>*/}
                            <div className="item">
                                <ContactMailOutlinedIcon/>
                                <span>{groupPage.email}</span>
                            </div>
                        </div>
                        {pisLoading ?
                            ("Loading") :
                            (<button onClick={handleFollow}>{isFollowed.is_followed === true ? "Unfollow" : "Follow"}</button>)
                        }
                        <Link to={`/events/create/${groupPage.id}`}>
                            <button>Create Event</button>
                        </Link>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
                <GroupShare group={groupPage}/>
                <GroupPosts groupId={groupPage.id}/>
            </div>
        </div>
    )
}
export default GroupPage
