import axios from '../api/axios';
import AuthContext from '../context/AuthProvider'
import { useContext } from 'react';

const useRefreshToken = () => {
    const { setAuth } = useContext(AuthContext);

    const refresh = async () => {
        const res = await axios.get('./refresh', {withCredentials: true});
        setAuth(prev => {
            return {...prev, accessToken: res.data.accessToken};
        })
        return res.data.accessToken;
    }

    return refresh;
}

export default useRefreshToken;