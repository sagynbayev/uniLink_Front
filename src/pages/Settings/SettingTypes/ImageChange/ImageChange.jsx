import React, {useState} from "react";
import "./ImageChange.scss"
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import {useSelector} from "react-redux";
import {selectCurrentToken, selectCurrentUser} from "../../../Login/authSlice";
import ImageComponent from "../../../../assets/ImageComponent";
import noPicture from "../../../../assets/images/emptyPicture.png";
import {useChangeProfilePictureMutation, useGetUserProfileQuery} from "../../../Profile/profileApiSlice";

const ImageChange = () => {
    const userInfo = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const haveImage = userInfo.images.length
    // const {data: userProfile, isError} = useGetUserProfileQuery(userInfo.id)
    // console.log(userProfile)
    // console.log(haveImage)
    const [uploadedFile, setUploadedFile] = useState(null);
    const [changeProfilePicture, {isLoading}] = useChangeProfilePictureMutation()

    const handleProfilePictureChange = async (e) => {
        e.preventDefault()
        if (uploadedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(uploadedFile);
            reader.onloadend = async () => {
                const base64Image = reader.result.split(',')[1];
                const type = "AVATAR"
                await changeProfilePicture({image: base64Image, image_type: type, token})
                // console.log(userProfile)
                setUploadedFile(null)
                console.log(userInfo)
            }
        }
    }

    const handleUploadedFile = (e) => setUploadedFile(e.target.files[0])
    // console.log(uploadedFile)
    return (
        <div className="imageSettings">
            <h2>Update Your Images</h2>
            <div className="container">
                <div className="profileForm">
                    <input
                        type={"file"}
                        id={"file"}
                        style={{display: "none"}}
                        onChange={handleUploadedFile}
                    />
                    <label htmlFor={"file"}>
                        <div className="item">
                            <ImageOutlinedIcon fontSize="large"/>
                            <span>Add Image</span>
                        </div>
                    </label>
                </div>
                <div className="preProfilePic">
                    {uploadedFile ? (
                        <img className="profilePic" src={URL.createObjectURL(uploadedFile)}/>
                    ) : (
                        haveImage ? (
                            <ImageComponent
                                imageBytes={userInfo.images[0].image}
                                imageClass={"profilePic"}
                            />
                        ) : (
                            <img className="profilePic" src={noPicture}/>
                        )
                    )}
                </div>
                <button onClick={handleProfilePictureChange}>Change</button>
            </div>
        </div>
    )
}
export default ImageChange