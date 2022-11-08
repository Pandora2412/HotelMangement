import "@fontsource/playfair-display";
import './App.css';
import Login from './components/Login.js'
import {useState, createContext} from 'react'
import Letan from "./components/Letan";

const UserContext = createContext()

function App() {
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{username, setUsername}}>
      {!success && <Login setAuth={setSuccess}/>}
      {success && <Letan />}
    </UserContext.Provider>
  );
}

export {App, UserContext};