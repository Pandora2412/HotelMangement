import {useState, useRef, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';

const LOGIN_URL = '/login';

const Login = () => {    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const userRef = useRef(); 

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                LOGIN_URL, 
                {"user": username, "pwd": password},
                {
                    'Content-Type': 'application/json',
                    withCredentials: true
                }
            );
            await axios.post(`/history/Lễ tân ${username} login thành công.`);
            const accessToken = res?.data?.accessToken;
            const roles = res?.data?.roles;
            localStorage.setItem("username", username);
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("roles", roles);
            setUsername('');
            setPassword('');
            if (from === "/") {
                roles === 1000 && navigate('/admin', {replace: true});
                roles === 2000 && navigate('/quanly', {replace: true});
                roles === 3000 && navigate('/letan', {replace: true});
            }
            else navigate(from, {replace: true});
        } catch (err) {
            if (!err?.response) {
                setErr("Sever không phản hồi.");
            }
            else if (err.response?.status === 400) {
                setErr("Thiếu tên đăng nhập hoặc mật khẩu.");
            }
            else if (err.response?.status === 401) {
                setErr("Sai tên đăng nhập hoặc mật khẩu.");
            } else {
                setErr("Đăng nhập không thành công");
            } 
        }
    }

    return (
        <div className='Login'>
            <h1>THE FICTION HOTEL</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Tên đăng nhập</label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Nhập số CCCD của bạn..."

                />
                
                <label htmlFor="password">Mật khẩu</label>
                <input 
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Nhập mật khẩu..."
                />

                {err && <p aria-live="assertive" style={{color: '#cccccc', fontWeight: 300, fontSize: '120%', textAlign: 'center', width: '35%'}}>{err}</p>}   

                <button>Đăng nhập</button>

            </form>
        </div>
    )
}

export default Login