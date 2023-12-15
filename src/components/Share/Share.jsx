import React, {useState} from "react";
import "./Share.scss"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {useSelector} from "react-redux";
import {selectCurrentToken, selectCurrentUser} from "../../pages/Login/authSlice";
import ImageComponent from "../../assets/ImageComponent";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {useCreatePostMutation} from "../Posts/postsApiSlice";
import noPicture from "../../assets/images/emptyPicture.png";
// import {useCreatePostMutation} from "./shareApiSlice";

const Share = () => {
    const userInfo = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    console.log(userInfo)
    const haveImage = userInfo.images.length

    const [uploadedFile, setUploadedFile] = useState(null);
    const [body, setBody] = useState('');
    const [createPost, {isLoading}] = useCreatePostMutation()

    const handleShare = async (e) => {
        e.preventDefault()
        if (uploadedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(uploadedFile);
            reader.onloadend = async () => {
                const base64Image = reader.result.split(',')[1];
                const images = [
                    {
                        image: base64Image,
                        image_type: ""
                    }
                ]
                debugger;
                await createPost({post_text: body, images: images, token})
                setBody('')
                setUploadedFile(null)
                // createPost({body, token})
            }
        } else {
            await createPost({post_text: body, token})
            setBody('')
        }
    }
    const handleBodyInput = (e) => setBody(e.target.value)
    const handleUploadedFile = (e) => setUploadedFile(e.target.files[0])
    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <div className="left">
                        {haveImage
                            ? (<ImageComponent imageBytes={userInfo.images[0].image} imageClass={"profilePic"}/>)
                            : (<img className="profilePic" src={noPicture}/>)
                        }
                        <input
                            type={"text"}
                            placeholder={`What's on your mind pal`}
                            value={body}
                            onChange={handleBodyInput}
                        />
                    </div>
                    <div className="right">
                        {uploadedFile && (
                            <img className="file" src={URL.createObjectURL(uploadedFile)}/>
                        )}
                    </div>
                </div>
                <hr/>
                <div className="bottom">
                    <div className="left">
                        <input
                            type={"file"}
                            id={"file"}
                            style={{display: "none"}}
                            onChange={handleUploadedFile}
                        />
                        <label htmlFor={"file"}>
                            <div className="item">
                                <ImageOutlinedIcon/>
                                <span>Add Image</span>
                            </div>
                        </label>
                    </div>
                    <div className="right">
                        <button onClick={handleShare}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Share
