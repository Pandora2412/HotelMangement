import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();

    useEffect(() => {
        
        const reqIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`; 
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

    }, [refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;
