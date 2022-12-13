import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />    
            :auth?.username
                ? <Navigate to="/Unauthorized" state={{ from: location }} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;