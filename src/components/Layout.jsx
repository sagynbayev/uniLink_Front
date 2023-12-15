import NavBar from "./NavBar/NavBar";
import LeftBar from "./LeftBar/LeftBar";
import {Outlet} from "react-router-dom";
import RightBar from "./RightBar/RightBar";
import {useContext} from "react";
import {DarkModeContext} from "../context/DarkModeContext";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../pages/Login/authSlice";
const Layout = () => {
    const {darkMode} = useContext(DarkModeContext);
    const user = useSelector(selectCurrentUser);
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <NavBar user={user}/>
            <div style={{display: "flex"}}>
                <LeftBar user={user}/>
                <div style={{flex: 6}}>
                    <Outlet/>
                </div>
                <RightBar/>
            </div>
        </div>
    )
}
export default Layout;