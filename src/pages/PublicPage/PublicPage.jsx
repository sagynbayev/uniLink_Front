import React from "react";
import {Link} from "react-router-dom";
import "./PublicPage.scss"

export const PublicPage = () => {
    return (
        <section className="public">
            <header className="navbar">
                <div className="left">
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <span>UniLink</span>
                    </Link>
                </div>
                <div className="right">
                    <Link to={"/login"} style={{textDecoration: "none"}}>
                        <button>Sign in</button>
                    </Link>
                </div>
            </header>
            <div className="mainContent">
                <div className="info">
                    <h1>UniLink</h1>
                    <p>
                        UniLink is the university app that helps to connect
                        students with each other and helps students organization with their events
                    </p>
                    <div className="buttons">
                        <Link to={"/login"} style={{textDecoration: "none"}}>
                            <button style={{backgroundColor: "#3057a6"}}>Sign in</button>
                        </Link>
                        <Link to={"/register"} style={{textDecoration: "none"}}>
                            <button style={{backgroundColor: "#DB4655"}}>Sign up</button>
                        </Link>
                    </div>
                </div>
                <div className="pictures">
                    <img src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"/>
                </div>
            </div>
        </section>
    )
}

export default PublicPage;
