import React, {useState} from "react";
import "./GroupShare.scss"
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import {useSelector} from "react-redux";
import {selectCurrentToken} from "../../pages/Login/authSlice";
import ImageComponent from "../../assets/ImageComponent";
import noPicture from "../../assets/images/emptyPicture.png";
import {useCreateGroupPostMutation} from "../GroupPosts/groupPostsApiSlice";

const GroupShare = ({group}) => {
    // const userInfo = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    // console.log(userInfo)
    const haveImage = group.image
    const [uploadedFile, setUploadedFile] = useState(null);
    const [body, setBody] = useState('');
    const [createGroupPost, {isLoading}] = useCreateGroupPostMutation()
    const group_id = parseInt(group.id)
    const handleGroupShare = async (e) => {
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
                await createGroupPost({body, images, group_id, token})
                console.log({body, images, token})
                setBody('')
                setUploadedFile(null)
                // createPost({body, token})
            }
        } else {
            await createGroupPost({body, group_id, token})
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
                            ? (<ImageComponent imageBytes={group.image.image} imageClass={"profilePic"}/>)
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
                        <button onClick={handleGroupShare}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GroupShare
