import React, {useState} from "react";
import "./PasswordChange.scss"

const PasswordChange = () => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            // await register({name, surname, email, password, role})
            setPassword("")
            setNewPassword("")
        } catch (err){
            console.log('Ошибка регистрации:', err);
        }
    }
    const handlePasswordInput = (e) => setPassword(e.target.value)
    const handleNewPasswordInput = (e) => setNewPassword(e.target.value)

    return (
        <div className="passwordSettings">
            <h2>Update Your Password</h2>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        id="password"
                        onChange={handlePasswordInput}
                        value={password}
                        placeholder={"Password"}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        onChange={handleNewPasswordInput}
                        value={newPassword}
                        placeholder={"New Password"}
                        required
                    />
                    <button>Change</button>
                </form>
            </div>
        </div>
    )
}
export default PasswordChange