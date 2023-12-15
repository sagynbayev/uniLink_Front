import React, {useState} from "react";
import "./Register.scss"
import {Link, useNavigate} from "react-router-dom";
import {useRegisterMutation} from "./registerApiSlice";
const Register = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const[register, {isLoading}] = useRegisterMutation()
    const navigate = useNavigate()
    const role = "USER"
    const registerSuccess = false
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            console.log("Passwords are not the same")
            alert("Passwords are not the same")
            return
        }

        try {
            await register({name, surname, email, password, role})
            setName("")
            setSurname('')
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            alert("Your account created successfully")
            navigate("/login")
        } catch (err){
            console.log('Ошибка регистрации:', err);
        }
    }
    const handleNameInput = (e) => setName(e.target.value)
    const handleSurnameInput = (e) => setSurname(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)
    const handleConfirmPasswordInput = (e) => setConfirmPassword(e.target.value)

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Hello Guys</h1>
                    <p>
                        UniLink is the university app that helps to connect
                        students with each other and helps students organization with their events
                    </p>
                    <span>Do you have an account?</span>
                    <Link to={"/login"}>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        {/*<input type={"text"} placeholder={"Name"}/>*/}
                        <input
                            type="text"
                            id="name"
                            // ref={userRef}
                            value={name}
                            onChange={handleNameInput}
                            autoComplete="off"
                            required
                            placeholder={"Name"}
                        />
                        <input
                            type="text"
                            id="surname"
                            // ref={userRef}
                            value={surname}
                            onChange={handleSurnameInput}
                            autoComplete="off"
                            required
                            placeholder={"Surname"}
                        />
                        {/*<input type={"email"} placeholder={"Email"}/>*/}
                        <input
                            type="email"
                            id="email"
                            // ref={userRef}
                            value={email}
                            onChange={handleEmailInput}
                            autoComplete="off"
                            required
                            placeholder={"Email"}
                        />
                        {/*<input type={"password"} placeholder={"Password"}/>*/}
                        <input
                            type="password"
                            id="password"
                            onChange={handlePasswordInput}
                            value={password}
                            placeholder={"Password"}
                            required
                        />
                        {/*<input type={"password"} placeholder={"Confirm your Password"}/>*/}
                        <input
                            type="password"
                            id="confirmPassword"
                            onChange={handleConfirmPasswordInput}
                            value={confirmPassword}
                            placeholder={"Confirm your Password"}
                            required
                        />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;