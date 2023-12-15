import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCurrentToken} from "./Login/authSlice";

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()
    console.log(token)
    return (
        token
            ? <Outlet/>
            : <Navigate to="/login" state={{from: location}} replace/>
    )
}
export default RequireAuth;