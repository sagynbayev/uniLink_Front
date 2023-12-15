import React, {useState} from "react";
import "./InfoChange.scss"

const InfoChange = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            // await register({name, surname, email, password, role})
            setName("")
            setSurname('')
        } catch (err){
            console.log('Ошибка регистрации:', err);
        }
    }
    const handleNameInput = (e) => setName(e.target.value)
    const handleSurnameInput = (e) => setSurname(e.target.value)
    const handleDescriptionInput = (e) => setDescription(e.target.value)
    return (
        <div className="infoSettings">
            <h2>Update Your Info</h2>
            <div className="container">
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
                        id="surname"
                        // ref={userRef}
                        value={surname}
                        onChange={handleSurnameInput}
                        autoComplete="off"
                        placeholder={"Surname"}
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
                    <button>Change</button>
                </form>
            </div>
        </div>
    )
}
export default InfoChange