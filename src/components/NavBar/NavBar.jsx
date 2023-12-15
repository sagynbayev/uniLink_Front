import React, {useContext} from "react";
import "./NavBar.scss"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import {DarkModeContext} from "../../context/DarkModeContext";
import ImageComponent from "../../assets/ImageComponent";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import noPicture from "../../assets/images/emptyPicture.png";

const NavBar = ({user}) => {

    const {toggle, darkMode} = useContext(DarkModeContext)

    // console.log(user)

    const haveImage = user.images.length
    // console.log(getState().auth.token)
    return (
        <div className="navbar">
            <div className="left">
                <Link to={"/home"} style={{textDecoration: "none"}}>
                    <span>UniLink</span>
                </Link>
                <HomeIcon/>
                {darkMode ? <WbSunnyIcon onClick={toggle}/> : <DarkModeIcon onClick={toggle}/>}
                <GridViewIcon/>
                <div className="search">
                    <SearchIcon/>
                    <input type={"text"} placeholder={"Search"}/>
                </div>
            </div>
            <div className="right">
                <PersonIcon/>
                <EmailIcon/>
                <NotificationsIcon/>
                <div className="user">
                    {haveImage
                    ?(<ImageComponent imageBytes={user.images[0].image}/>)
                    : (<img src={noPicture}/>)}
                    {/*<ImageComponent imageBytes={user.images[0].image}/>*/}
                    <Link to={"/profile/" + user.id} style={{textDecoration: "none", color: "inherit"}}>
                        <span>{user.name + " " + user.surname}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;