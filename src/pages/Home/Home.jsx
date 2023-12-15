import React from "react";
import style from "./Home.module.css"
import "./Home.scss"
import Stories from "../../components/Stories/Stories";
import Posts from "../../components/Posts/Posts";
import Share from "../../components/Share/Share";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../Login/authSlice";

const Home = () => {
    const userInfo = useSelector(selectCurrentUser)
    console.log(userInfo)
    return (
        <div className="home">
            {/*<Stories/>*/}
            <Share/>
            <Posts userId={userInfo.id}/>
        </div>
    )
}

export default Home;