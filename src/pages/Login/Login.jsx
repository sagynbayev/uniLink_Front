import React, {useEffect, useRef, useState} from "react";
// import style from "./Login.module.css"
import "./Login.scss"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCredentials} from "./authSlice";
import {useLoginMutation} from "./authApiSlice";

const Login = () => {

    const userRef = useRef()
    const errorRef = useRef()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()
    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ email, password }).unwrap()
            console.log(userData)
            dispatch(setCredentials({ ...userData, email }))
            console.log(dispatch(setCredentials({ ...userData, email })))
            setEmail('')
            setPassword('')
            navigate('/home')
        } catch (err) {
            if (!err?.status) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errorRef.current.focus();
        }
    }

    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePasswordInput = (e) => setPassword(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello Guys</h1>
                    <p>
                        UniLink is the university app that helps to connect
                        students with each other and helps students organization with their events
                    </p>
                    <span>Don't you have an account</span>
                    <Link to={"/register"}>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="username"
                            ref={userRef}
                            value={email}
                            onChange={handleEmailInput}
                            autoComplete="off"
                            required
                            placeholder={"Email"}
                        />
                        <input
                            type="password"
                            id="password"
                            onChange={handlePasswordInput}
                            value={password}
                            placeholder={"Password"}
                            required
                        />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )

    return content
}

export default Login;