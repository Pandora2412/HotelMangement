import './Booking.css';
import RoomDetails from '../components/RoomDetails';

const Booking =() =>{
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
                                    </div>
                            ))
                        }
                    </div>
                </div>

              </div>
        </div>
    );
}

export default Booking;