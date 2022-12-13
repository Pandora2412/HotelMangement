import './EmptyRoom.css';
import {Link} from 'react-router-dom';
import RoomDetails from '../components/RoomDetails';


const EmptyRoom =() =>{
    const roomDetailsList=[
        {
            roomtype: 'Phòng Standard',
            price: '500.000 VND/ngày',
            des1: 'Tiện ích: wifi, điện thoại, tủ lạnh, điều hòa,...',
            des2: 'Miễn phí bữa sáng',
            des3: 'Diện tích phòng 20 mét vuông',
            des4: 'Từ 1-4 người',
            img1: 'standard',
            img2: 'standard2',
            img3: 'standard3',
        },
        {
            roomtype: 'Phòng Superior',
            price: '1.000.000 VND/ngày',
            des1: 'Tiện ích: wifi, điện thoại, tủ lạnh, điều hòa,...',
            des2: 'Miễn phí bữa sáng',
            des3: 'Diện tích phòng 25 mét vuông',
            des4: 'Từ 1-4 người',
            img1: 'susperior',
            img2: 'susperior2',
            img3: 'susperior3',
        },
        {
            roomtype: 'Phòng VIP',
            price: '2.000.000 VND/ngày',
            des1: 'Tiện ích: wifi, điện thoại, tủ lạnh, điều hòa,...',
            des2: 'Miễn phí 3 bữa trong ngày (không bao gồm các bữa phụ)',
            des3: 'Diện tích phòng 40 mét vuông. Gồm 1 phòng ngủ và 1 phòng khách',
            des4: 'Từ 1-4 người',
            img1: 'vip',
            img2: 'vip2',
            img3: 'vip3',
        },
    ]
    return(
        <div className='datphong'>
            <div className="container-fluid" id="dichvu">
                <div className="row dv_line">
                    <div className="col-3"> <h1 className="float-end">Các loại dịch vụ</h1> </div>
                    <div className="col-6" class="line"> </div>
                </div>
                <div className='row'>
                    <div className='col-9'>
                    {
                        roomDetailsList.map((item) => (
                            <div className='roomdetails'>
                                <RoomDetails roomtype={item.roomtype} price={item.price} des1={item.des1}
                                                des2={item.des2} des3={item.des3} des4={item.des4}
                                                img1={item.img1} img2={item.img2} img3={item.img3}>
                                </RoomDetails>
                                <div className='select_room_type'>
                                    <h2>Chọn ban công</h2>
                                    <div className='bancong'>
                                        <p>Có ban công</p>
                                        <p></p>
                                        <p>+100.000 VNĐ</p>
                                        <form className="d-flex" role="search">
                                            <button className="btn btn-outline-success" type="submit">Chọn</button>
                                        </form>
                                    </div>
                                    <div className='bancong line'>
                                        <p>Không ban công</p>
                                        <p></p>
                                        <p>+0 VNĐ</p>
                                        <form className="d-flex" role="search">
                                            <button className="btn btn-outline-success" type="submit">Chọn</button>
                                        </form>
                                    </div>
                                    <h2>Chọn view phòng</h2>
                                    <div className='bancong'>
                                        <p>View Thành Phố</p>
                                        <p></p>
                                        <p>+0 VNĐ</p>
                                        <form className="d-flex" role="search">
                                            <button className="btn btn-outline-success" type="submit">Chọn</button>
                                        </form>
                                    </div>
                                    <div className='bancong'>
                                        <p>View Hồ Bơi</p>
                                        <p></p>
                                        <p>+300.000 VNĐ</p>
                                        <form className="d-flex" role="search">
                                            <button className="btn btn-outline-success" type="submit">Chọn</button>
                                        </form>
                                    </div>
                                    <div className='bancong'>
                                        <p>View Biển</p>
                                        <p></p>
                                        <p>+500.000 VNĐ</p>
                                        <form className="d-flex" role="search">
                                            <button className="btn btn-outline-success" type="submit">Chọn</button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                    </div>
                    <div className='dondatphong col-3' style={{marginTop: '50px'}}>
                        <h2>ĐƠN ĐẶT PHÒNG</h2>
                        <p>19/10/2022 - 21/10/2022</p>
                        <p>4 người</p>
                        <Link className="nav-link" to="/bookinginfo">
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" type="submit">Xác nhận</button>
                            </form>
                        </Link>
                    </div>
                </div>


              </div>
        </div>
    );
}

export default EmptyRoom;
