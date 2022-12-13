import './Search.css';
import search from '../img/search.png';
import TextField from '@mui/material/TextField';
const Search = () => {
    return(
        <div className='tracuu'>
            <div className='row'>
                <div className='col-6'>
                    <img src={search}></img>
                    <h2>Vui lòng nhập mã số đặt phòng</h2>
                </div>
                <div className='col-6'>
                    <TextField id="outlined-basic" label="Please enter your booking ID" variant="outlined" />
                    <img src={search}></img>
                </div>
            </div>
        </div>
    );
}

export default Search;