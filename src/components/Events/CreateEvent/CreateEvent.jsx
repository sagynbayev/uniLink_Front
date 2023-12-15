import React, {useState} from "react";
import "./CreateEvent.scss"
import {useNavigate, useParams} from "react-router-dom";
import {useCreateEventMutation} from "../../../pages/EventsPage/eventsPageApiSlice";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import noPicture from "../../../assets/images/emptyPicture.png";

const CreateEvent = () => {
    const groupIdParam = useParams()
    const group_id = parseInt(groupIdParam.groupId)
    // console.log(group_id)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [uploadedFile, setUploadedFile] = useState(null);
    const [startMonth, setStartMonth] = useState("");
    const [startDay, setStartDay] = useState("");
    const [startTime, setStartTime] = useState("");
    // console.log(groupIdParam.groupId)
    const [createEvent, {isLoading}] = useCreateEventMutation()
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
                    const currentDate = new Date();
                    const year = currentDate.getFullYear();
                    const month = parseInt(startMonth, 10);
                    const day = parseInt(startDay, 10);
                    const hours = parseInt(startTime.split(":")[0], 10);
                    const minutes = parseInt(startTime.split(":")[1], 10);
                    const start_date = new Date(year, month - 1, day, hours, minutes);
                    const end_date = start_date
                    const image = {image: base64Image, image_type: type}
                    // console.log({title, description, location, category, group_id, image, contactPhone, start_date, end_date})
                    await createEvent({
                        title,
                        description,
                        location,
                        category,
                        group_id,
                        image,
                        contactPhone,
                        start_date,
                        end_date
                    })
                    setTitle("")
                    setDescription('')
                    setLocation("")
                    setCategory("")
                    setContactPhone("")
                    setUploadedFile(null)
                    setStartMonth("")
                    setStartDay("")
                    setStartTime("")
                    alert("Your event created successfully")
                    navigate("/events")
                }
            }
        } catch (err) {
            console.log('Ошибка регистрации:', err);
        }
    }
    const handleTitleInput = (e) => setTitle(e.target.value)
    const handleDescriptionInput = (e) => setDescription(e.target.value)
    const handleLocationInput = (e) => setLocation(e.target.value)
    const handleCategoryInput = (e) => setCategory(e.target.value)
    const handleContactPhone = (e) => setContactPhone(e.target.value)
    const handleUploadedFile = (e) => setUploadedFile(e.target.files[0])
    return (
        <div className="createEvent">
            <h1>Create Event</h1>
            <div className="items">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="title"
                        // ref={userRef}
                        value={title}
                        onChange={handleTitleInput}
                        autoComplete="off"
                        required
                        placeholder={"Title"}
                    />
                    <input
                        type="text"
                        id="title"
                        // ref={userRef}
                        value={description}
                        onChange={handleDescriptionInput}
                        autoComplete="off"
                        required
                        placeholder={"Description"}
                    />
                    <input
                        type="text"
                        id="location"
                        // ref={userRef}
                        value={location}
                        onChange={handleLocationInput}
                        autoComplete="off"
                        required
                        placeholder={"Location"}
                    />
                    <input
                        type="text"
                        id="category"
                        // ref={userRef}
                        value={category}
                        onChange={handleCategoryInput}
                        autoComplete="off"
                        required
                        placeholder={"Category"}
                    />
                    <input
                        type="text"
                        id="contactPhone"
                        // ref={userRef}
                        value={contactPhone}
                        onChange={handleContactPhone}
                        autoComplete="off"
                        required
                        placeholder={"Contact Phone"}
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
                    <div className="date">
                        <input
                            type="text"
                            id="startMonth"
                            value={startMonth}
                            onChange={(e) => setStartMonth(e.target.value)}
                            autoComplete="off"
                            required
                            placeholder={"Start Month (e.g., 1 for January)"}
                        />
                        <input
                            type="text"
                            id="startDay"
                            value={startDay}
                            onChange={(e) => setStartDay(e.target.value)}
                            autoComplete="off"
                            required
                            placeholder={"Start Day (e.g., 15)"}
                        />
                        <input
                            type="text"
                            id="startTime"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            autoComplete="off"
                            required
                            placeholder={"Start Time (e.g., 10:30)"}
                        />
                    </div>
                    <button>Create Event</button>
                </form>
            </div>
        </div>
    );
}

export default CreateEvent;