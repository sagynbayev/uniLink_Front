import React, {useState} from "react";
import "./Post.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Link} from "react-router-dom";
import Comments from "../../Comments/Comments";
import ImageComponent from "../../../assets/ImageComponent";
import noPicture from "../../../assets/images/emptyPicture.png"
import moment from "moment";
import {useFollowUserMutation} from "../../../pages/FriendsList/friendsListApiSlice";
import {useLikePostMutation} from "../postsApiSlice";
const Post = ({post, postUser}) => {

    const [commentOpen, setCommentOpen] = useState(false)
    const [liked, setLiked] = useState(false)
    // const {data: postUser} = useGetUserProfileQuery(post.user_id)
    // console.log(postUser)
    const [like, {isLoading: plisLoading}] = useLikePostMutation()

    const haveImage = postUser.images.length
    // console.log(post)
    // console.log(postUser)
    const handleLike = async () => {
        const post_id = parseInt(post.id)
        const response = await like({post_id})
        if (response.data.post_id === post_id) {
            setLiked(true)
        }else {
            setLiked(false)
        }
    }
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        {haveImage
                            ? (<ImageComponent imageBytes={postUser.images[0].image}/>)
                            : <img src={noPicture}/>
                        }
                        <div className="details">
                            <Link to={`/profile/${post.user_id}`} style={{textDecoration: "none", color: "inherit"}}>
                                <span className="name">{postUser.name + " " + postUser.surname}</span>
                            </Link>
                            <span className="data">{moment(post.created_at).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{post.body}</p>
                    {post.images.length
                        ? (<ImageComponent imageBytes={post.images[0].image}/>)
                        : <img src={""}/>
                    }
                    {/*<img src={post.img}/>*/}
                </div>
                <div className="info ">
                    <div className="item">
                        {liked ? <FavoriteIcon style={{color: "red"}} onClick={handleLike}/> : <FavoriteBorderIcon onClick={handleLike}/>}
                        <span>{post.likes}</span>
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon/>
                        <span>0 Comments</span>
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon/>
                        <span>Share</span>
                    </div>
                </div>
                {commentOpen && <Comments/>}
            </div>
        </div>
    );
}

export default Post;