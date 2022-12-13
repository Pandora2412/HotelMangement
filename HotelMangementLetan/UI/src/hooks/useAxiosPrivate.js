import { axiosPrivate } from "../api/axios";
import { useEffect, useContext } from "react";
import useRefreshToken from "./useRefreshToken";
import AuthContext from "../context/AuthProvider";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        
        const reqIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`; 
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const resIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevReq = error?.config;
                if (error?.response?.status === 403 && !prevReq?.sent) {
                    const newAccessToken = await refresh();
                    return axiosPrivate({
                        ...prevReq,
                        headers: {...prevReq.headers, Authorization: `Bearer ${newAccessToken}`},
                        sent: true
                    });
                }
                return Promise.reject(error);
            }
        );
        
        return () => {
            axiosPrivate.interceptors.request.eject(reqIntercept);
            axiosPrivate.interceptors.response.eject(resIntercept);
        }

    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;
