import * as React from 'react';
import './BookingInfo.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const BookingInfo =() =>{
    const [sex, setSex] = React.useState('');
    const handleChange = (event) => {
        setSex(event.target.value );
      }
    return(
        <div className="container-fluid" id="info">
            <div className="row">
                <div className="col-3"> <h1 className="float-end">Thông tin đặt phòng</h1> </div>
                <div className="col-6" class="line"> </div>
            </div>
            <div className='booking row'>
                <div className='col-8'>
                    <div className='bookinginfo'>
                        <div className='info'>
                            <h2>THÔNG TIN LIÊN HỆ</h2>
                            <div className='ip_row'>
                                <TextField id="outlined-basic" label="Họ và tên *" variant="outlined" />
                                <TextField id="outlined-basic" label="CMND/CCCD *" variant="outlined" />
                            </div>
                            <div className='ip_row'>
                                <TextField id="outlined-basic" label="SĐT *" variant="outlined" />        
                                <TextField id="outlined-basic" label="Email *" variant="outlined" />
                            </div>
                            <div className='ip_row'>
                                <TextField id="outlined-basic" label="Ngày sinh" variant="outlined" />
                                <FormControl fullWidth className='gioitinh'>
                                    <InputLabel id="demo-simple-select-label">Giới tính</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sex}
                                    label="Sex"
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={1}>Nam</MenuItem>
                                    <MenuItem value={2}>Nữ</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className='info'>
                            <h2>YÊU CẦU BỔ SUNG</h2>
                            <p>Một số yêu cầu đặc biệt phụ thuộc vào tình trạng phòng hiện tại</p>
                            <div className='cb_row row'>
                                <div className='checkbox col-4'><Checkbox {...label} /> Tầng cao</div>
                                <div className='checkbox col-4'><Checkbox {...label} /> Tầng thấp</div>
                            </div>
                            <div className='cb_row row'>
                                <div className='checkbox col-4'><Checkbox {...label} /> Hút thuốc</div>
                                <div className='checkbox col-4'><Checkbox {...label} /> Không hút thuốc</div>
                            </div>
                            <div className='cb_row row'>
                                <div className='checkbox col-4'><Checkbox {...label} /> Phòng xa thang máy</div>
                                <div className='checkbox col-4'><Checkbox {...label} /> Phòng gần thang máy</div>
                            </div>
                            <div className='cb_row row'>
                                <div className='checkbox col-4'><Checkbox {...label} /> Phòng yên tĩnh</div>
                                <div className='checkbox col-4'><Checkbox {...label} /> Phòng kế nhau</div>
                            </div>
                            <div className='textfield'>
                                <TextField
                                id="outlined-multiline-static"
                                label="Ghi chú khác"
                                multiline
                                rows={3}
                                />
                            </div>

                        </div>
                        <div className='info3'>
                            <h2>THÔNG TIN THANH TOÁN</h2>
                            <p>Vui lòng chọn phương thức thanh toán</p>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="momo" control={<Radio />} label="Thanh toán bằng MoMo" />
                                    <FormControlLabel value="zalopay" control={<Radio />} label="Thanh toán bằng ZaloPay" />
                                    <FormControlLabel value="chuyenkhoan" control={<Radio />} label="Thanh toán qua tài khoản ngân hàng/Visa/MasterCard " />
                                </RadioGroup>
                            </FormControl>
                            <p>Thông tin thanh toán sẽ được gửi qua email. Thời hạn thanh toán là 24h kể từ thời điểm xác nhận đơn</p>
                        </div>
                    </div>
                    <div className='policy'>
                        <div className='info4'>
                            <h2>QUY ĐỊNH ĐẶT PHÒNG</h2>
                            <div className='plc_row row'>
                                <div className='col-4'> <p>Check-in</p> </div>
                                <div className='col-4'> <p>Check-out</p> </div>
                            </div>
                            <div className='plc_row row'>
                                <div className='col-4'> <p>Từ 12:00 trưa</p> </div>
                                <div className='col-4'> <p>Trước 12:00 trưa</p> </div>
                            </div>
                        </div>  
                        <div className='regulation'>
                            <p>• Đối với đặt phòng online, việc thanh toán trước là bắt buộc. Thông tin thanh toán và mã đơn đặt phòng sẽ được gửi qua email. Thời hạn thanh toán là 24h kể từ thời điểm xác nhận đơn, Sau khoảng thời gian này, đơn đặt phòng sẽ bị hủy bỏ. Quý khách vui lòng kiểm tra email trong khoảng thời gian này.</p>
                            <p>• Nếu quý khách có nhu cầu hủy đơn đặt phòng trước, vui lòng hủy trước ít nhất một ngày trước ngày check-in. Quy định hoàn tiền đối với đơn hủy như sau:</p>
                            <div className='regulation_refund'>
                                <p>• 100% đối với đơn hủy trước 7 ngày</p>
                                <p>• 70% đối với đơn hủy trước 3 ngày</p>
                                <p>• 50% đối với đơn hủy trước 1 ngày</p>
                                <p>• Không hoàn tiền đối với đơn hủy trong vòng 24h trước giờ check-in</p>
                            </div>
                            <p>• Nếu quý khách muốn chỉnh sửa thông tin đặt phòng, vui lòng liên hệ với khách sạn qua chatbox hoặc qua SĐT, email (thông tin ở trang liên hệ) để được hỗ trợ sớm nhất.</p>
                            <p>Lưu ý: Đối với khách là trẻ em, 2 người lớn mới được kèm theo 1 trẻ em</p>
                            <div className='checkbox'><Checkbox {...label} /> Tôi đã đọc và đồng ý với quy định của khách sạn</div>
                        </div>

                    </div>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit">Xác nhận</button>
                    </form>
                </div>
                
                <div className='dondatphong col-3' style={{marginTop: '50px'}}>
                        <h2>ĐƠN ĐẶT PHÒNG</h2>
                        <p>19/10/2022 - 21/10/2022</p>
                        <p>4 người</p>
                    </div>
            </div>
        </div>
    );
}


export default BookingInfo;