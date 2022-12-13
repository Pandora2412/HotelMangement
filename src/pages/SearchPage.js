import tickbox from '../img/tickbox.png';
import './SearchPage.css';
import TextField from '@mui/material/TextField';
import search from '../img/search.png';

const SearchPage =() =>{
    return(
        <div className='searchPage'>
            <div className='searchRow'>
                <div className='madatphong'>
                    <img src={search}></img>
                    <TextField
                    id="outlined-read-only-input"
                    label="Mã đặt phòng"
                    defaultValue="123456789"
                    InputProps={{
                    readOnly: true,
                    }}
                    />
                </div>
                <div className='dathanhtoan'>
                    <img src={tickbox}></img>
                    <div>
                        <p><b>Đã thanh toán</b></p>
                        <p><b>11.700.000</b> VNĐ</p>
                    </div>
                </div>
            </div>
            <div className='searchInfo'>
            </div>
        </div>
    );

}

export default SearchPage;