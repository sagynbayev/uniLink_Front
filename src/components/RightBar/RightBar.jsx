import React from "react";
import "./RightBar.scss"
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../pages/Login/authSlice";

const RightBar = () => {
    return (
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Suggestions for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={"https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg"}/>
                            <span>Zhaisan Kerimbayev</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"}/>
                            <span>Alim Zhalgasbayev</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={"https://wallpapers.com/images/hd/cool-profile-picture-l0hzjr9omwan07nt.jpg"}/>
                            <span>Erbol Izbasarov</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src={"https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"}/>
                            <span>Nurdaulet Mazhit</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                {/*<div className="item">*/}
                {/*    <span>Latest Activities</span>*/}
                {/*    <div className="user">*/}
                {/*        <div className="userInfo">*/}
                {/*            <img*/}
                {/*                src={"https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg"}/>*/}
                {/*            <p>*/}
                {/*                <span>Zhaisan Kerimbayev</span> changed their cover picture*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <span>1 minute ago</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="item">*/}
                {/*    <span>Online friends</span>*/}
                {/*    <div className="user">*/}
                {/*        <div className="userInfo">*/}
                {/*            <img*/}
                {/*                src={"https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg"}/>*/}
                {/*            <div className="online"></div>*/}
                {/*            <span>Ali Sarsengaliyev</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default RightBar;