import React, {useState} from "react";
import "./CreateGroup.scss"
import {Link, useNavigate, useParams} from "react-router-dom";
import {useCreateEventMutation} from "../../../pages/EventsPage/eventsPageApiSlice";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ImageComponent from "../../../assets/ImageComponent";
import noPicture from "../../../assets/images/emptyPicture.png";
import {useCreateGroupMutation} from "../../../pages/GroupList/groupsListApiSlice";
import {useSelector} from "react-redux";
import {selectCurrentToken} from "../../../pages/Login/authSlice";

const CreateGroup = () => {
    // console.log(group_id)
    const token = useSelector(selectCurrentToken)
    const [name, setName] = useState('')
    const [group_type, setGroupType] = useState('')
    const [description, setDescription] = useState('')
    const [uploadedFile, setUploadedFile] = useState(null);
    const [createGroup, {isLoading}] = useCreateGroupMutation()
    const navigate = useNavigate()
    const role = "USER"
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (uploadedFile) {
                const reader = new FileReader();
                reader.readAsDataURL(uploadedFile);
                reader.onloadend = async () => {
                    const base64Image = reader.result.split(',')[1];
                    const type = "EVENT"
                    const image = {image: base64Image, image_type: type}
                    // console.log({name, group_type, description, image})
                    createGroup({name, group_type, description, image, token})
                    alert("Your group created successfully")
                    navigate("/group/recommended")
                }
            }
        } catch (err) {
            console.log('Ошибка регистрации:', err);
        }
    }
    const handleNameInput = (e) => setName(e.target.value)
    const handleGroupTypeInput = (e) => setGroupType(e.target.value)
    const handleDescriptionInput = (e) => setDescription(e.target.value)
    const handleUploadedFile = (e) => setUploadedFile(e.target.files[0])

    return (
        <div className="createGroup">
            <h2>Create Your Group</h2>
            <div className="items">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        // ref={userRef}
                        value={name}
                        onChange={handleNameInput}
                        autoComplete="off"
                        placeholder={"Name"}
                    />
                    <input
                        type="text"
                        id="groupType"
                        // ref={userRef}
                        value={group_type}
                        onChange={handleGroupTypeInput}
                        autoComplete="off"
                        placeholder={"Group Type"}
                    />
                    <input
                        type="text"
                        id="description"
                        // ref={userRef}
                        value={description}
                        onChange={handleDescriptionInput}
                        autoComplete="off"
                        placeholder={"Description"}
                    />
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
                                <img className="profilePic" src={noPicture}/>
                            )
                            }
                        </div>
                    </div>
                    <button>Create Group</button>
                </form>
            </div>
        </div>
    );
}

export default CreateGroup;