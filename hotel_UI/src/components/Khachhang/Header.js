import * as React from 'react';
import {Link} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Header(){
    const [guest, setGuest] = React.useState('');
    const [checkin, setCheckin] = React.useState('');
    const [checkout, setCheckout] = React.useState('');


    const handleChange = (event) => {
        setGuest(event.target.value );
      }
    return(
        <>
            <div className="banner_title"> THE FICTION HOTEL </div>

            <div className="checkin-out">
                <input className="btn btn-outline-success" type="date" id="checkin"  value={checkin} min="2022-01-01" max="2022-12-31" onChange={(event) => setCheckin(event.target.value)}/>
                <input className="btn btn-outline-success" type="date" id="checkout" value={checkout} min="2022-01-01" max="2022-12-31" onChange={(event) => setCheckout(event.target.value)}/>
                <FormControl fullWidth id="sokhach">
                    <InputLabel id="demo-select-small">Khách</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={guest}
                        label="Guest"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>1 khách</MenuItem>
                        <MenuItem value={2}>2 khách</MenuItem>
                        <MenuItem value={3}>3 khách</MenuItem>
                        <MenuItem value={4}>4 khách</MenuItem>
                    </Select>
                    </FormControl>
                <Link style={{textDecoration: 'none'}} to="/khachhang/emptyroom">
                    <form className="d-flex" role="search">
                        <button type="submit" id="datngay">Đặt Ngay</button>
                    </form>
                </Link>
            </div>
        </>
    )
}

export default Header;