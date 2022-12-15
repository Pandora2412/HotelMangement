import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation();

    return (
        allowedRoles.find(role => role === parseInt(localStorage.getItem("roles")))
            ? <Outlet />    
            :localStorage.getItem("username")
                ? <Navigate to="/Unauthorized" state={{ from: location }} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;