import '../../css/customer/Search.css';
import search from '../../Image/Customer/search.png';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';

const Search = () => {
    return(
        <div className='tracuu'>
            <div className='row'>
                <div className='col-6'>
                    <img src={search} alt="search"></img>
                    <h2>Vui lòng nhập mã số đặt phòng</h2>
                </div>
                <div className='col-6'>
                    <TextField id="outlined-basic" label="Please enter your booking ID" variant="outlined" />
                    <Link style={{textDecoration: 'none'}} to="/khachhang/searchpage">
                        <img src={search} alt="search"></img>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Search;