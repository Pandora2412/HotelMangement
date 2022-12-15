import axios from '../api/axios';

const useRefreshToken = () => {

    const refresh = async () => {
        const res = await axios.get('./refresh', {withCredentials: true});
        localStorage.setItem("accessToken", res.data.accessToken);
        return res.data.accessToken;
    }

    return refresh;
}

export default useRefreshToken;