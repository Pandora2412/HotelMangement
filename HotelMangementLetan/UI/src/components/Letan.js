import {useState} from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import '../App.css';

const Letan = () => {

    const [on, setOn] = useState(false);

    return (
        <div className="Letan">
            {!on && <button className='Rightbutton' onClick={() => setOn(true)}><AiOutlineDoubleRight className="icon"/></button>}
            <Outlet />
            {on && <Sidebar handleView={setOn}/>}
        </div>
    )
}

export default Letan