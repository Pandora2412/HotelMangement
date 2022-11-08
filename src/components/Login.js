import {useState, useRef, useEffect, useContext} from 'react';
import '../App.css';
import { UserContext } from '../App.js';

//const LOGIN_URL = '/auth';

const Login = (props) => {    
    
    const {username, setUsername} = useContext(UserContext);
    const [password, setPassword] = useState('');

    const userRef = useRef(); 

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        props.setAuth(true);
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

            </form>
        </div>
    )
}

export default Login