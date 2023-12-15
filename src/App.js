import './App.css';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {Route, Routes,} from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import "./style.scss"
import {useContext} from "react";
import {DarkModeContext} from "./context/DarkModeContext";
import PublicPage from "./pages/PublicPage/PublicPage";
import RequireAuth from "./pages/RequiereAuth";
import Layout from "./components/Layout";
import Settings from "./pages/Settings/Settings";
import EventCalendar from "./pages/EventsPage/EventCalendar/EventCalendar";
import EventDetails from "./pages/EventsPage/EventDetails/EventDetails";
import Tickets from "./pages/EventsPage/Purchase/Tickets";
import Checkout from "./pages/Checkout/Checkout";
import Friends from "./pages/FriendsList/FriendsList";
import GroupList from "./pages/GroupList/GroupsList";
import PasswordChange from "./pages/Settings/SettingTypes/PasswordChange/PasswordChange";
import InfoChange from "./pages/Settings/SettingTypes/InfoChange/InfoChange";
import ImageChange from "./pages/Settings/SettingTypes/ImageChange/ImageChange";
import Followers from "./components/Connections/Followers/Followers";
import Followings from "./components/Connections/Followings/Followings";
import AllUsers from "./components/Connections/AllUsers/AllUsers";
import GroupPage from "./pages/GroupPage/GroupPage";
import CreateEvent from "./components/Events/CreateEvent/CreateEvent";
import CreateGroup from "./components/Groups/CreateGroups/CreateGroup";

function App() {
    // const {currentUser} = useContext(AuthContext);
    const {darkMode} = useContext(DarkModeContext);

    return (
        // <RouterProvider router={router}/>
        <Routes>
            {/* public routes */}
            <Route path="/" element={<PublicPage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="/" element={<Layout/>}>
                {/* protected routes */}
                <Route element={<RequireAuth/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="profile/:userId" element={<Profile/>}/>
                    <Route path="events" element={<EventCalendar/>}/>
                    <Route path="events/create/:groupId" element={<CreateEvent/>}/>
                    <Route path="events/:eventId" element={<EventDetails/>}/>
                    <Route path="tickets/:eventId" element={<Tickets/>}/>
                    <Route path="tickets/:eventId/checkout/:count" element={<Checkout/>}/>
                    <Route path="friends" element={<Friends/>}>
                        <Route path="followers" element={<Followers/>}/>
                        <Route path="followings" element={<Followings/>}/>
                        <Route path="all" element={<AllUsers/>}/>
                    </Route>
                    <Route path="group" element={<GroupList/>}>
                        <Route path="followed" element={<Followers/>}/>
                        <Route path="my" element={<Followers/>}/>
                        <Route path="recommended" element={<Followers/>}/>
                        <Route path="create" element={<CreateGroup/>}/>
                    </Route>
                    <Route path="group/:groupId" element={<GroupPage/>}/>
                    <Route path="profile/:userId/settings" element={<Settings/>}>
                        <Route path="password" element={<PasswordChange/>}/>
                        <Route path="info" element={<InfoChange/>}/>
                        <Route path="image" element={<ImageChange/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
