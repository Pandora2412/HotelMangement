import {useState, useRef, useEffect, useContext} from 'react';
import '../App.css';
import AuthContext from '../context/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';

const LOGIN_URL = '/login';

const Login = () => {    
    
    const { setAuth } = useContext(AuthContext);
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
            const accessToken = res?.data?.accessToken;
            const roles = res?.data?.roles;
            setAuth({username, password, accessToken, roles});
            setUsername('');
            setPassword('');
            navigate(from, {replace: true});
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

                <button>Đăng nhập</button>

                {err && <p aria-live="assertive" style={{color: 'red', fontWeight: 600}}>{err}</p>}

            </form>
        </div>
    )
}

export default Login