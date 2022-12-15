import '../../css/customer/EmptyRoom.css';
import {Link} from 'react-router-dom';
import RoomDetails from '../../components/Khachhang/RoomDetails';
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

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

    const [selections, setSelections] = useState([]);
    const [total, setTotal] = useState(0);
    const [selectList, setSelectList] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

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
                        roomDetailsList.map((item, index) => (
                            <div className='roomdetails'>
                                <RoomDetails roomtype={item.roomtype} price={item.price} des1={item.des1}
                                                des2={item.des2} des3={item.des3} des4={item.des4}
                                                img1={item.img1} img2={item.img2} img3={item.img3} index={index} 
                                                selections={selections} setSelections={setSelections} selectList={selectList}
                                                setTotal={setTotal} total={total}>
                                </RoomDetails>
                                <div className='select_room_type'>
                                    <h2>Chọn ban công</h2>
                                    <div className='bancong'>
                                        <p>Có ban công</p>
                                        <p></p>
                                        <p>+100.000 VNĐ</p>
                                        <button className="btn btn-outline-success" id='chon' style={selectList[5*index]?{background: 'black'}:{}} onClick={() => {
                                            let newChoice = [];
                                            if (selectList[5*index]) newChoice = [false,false];
                                            else newChoice = [true,false]; 
                                            setSelectList([...selectList.slice(0, 5*index),...newChoice,...selectList.slice(5*index + 2)]);
                                        }}>{selectList[5*index]?"Bỏ chọn":"Chọn"}</button> 
                                    </div>
                                    <div className='bancong line'>
                                        <p>Không ban công</p>
                                        <p></p>
                                        <p>+0 VNĐ</p>
                                        <button className="btn btn-outline-success" id='chon' style={selectList[5*index + 1]?{background: 'black'}:{}} onClick={() => {
                                            let newChoice = [];
                                            if (selectList[5*index + 1]) newChoice = [false,false]; 
                                            else newChoice = [false,true]; 
                                            setSelectList([...selectList.slice(0, 5*index),...newChoice,...selectList.slice(5*index + 2)]);
                                        }}>{selectList[5*index + 1]?"Bỏ chọn":"Chọn"}</button>    
                                    </div>
                                    <h2>Chọn view phòng</h2>
                                    <div className='bancong'>
                                        <p>View Thành Phố</p>
                                        <p></p>
                                        <p>+0 VNĐ</p>
                                          <button className="btn btn-outline-success" style={selectList[5*index + 2]?{background: 'black'}:{}} id='chon' onClick={() => {
                                            let newChoice = [];
                                            if (selectList[5*index + 2]) newChoice = [false,false,false]; 
                                            else newChoice = [true,false,false]; 
                                            setSelectList([...selectList.slice(0, 5*index+2),...newChoice,...selectList.slice(5*index+5)]);
                                        }}>{selectList[5*index + 2]?"Bỏ chọn":"Chọn"}</button>    
                                    </div>
                                    <div className='bancong'>
                                        <p>View Hồ Bơi</p>
                                        <p></p>
                                        <p>+300.000 VNĐ</p>
                                        <button className="btn btn-outline-success" id='chon' style={selectList[5*index + 3]?{background: 'black'}:{}} onClick={() => {
                                            let newChoice = [];
                                            if (selectList[5*index + 3]) newChoice = [false,false,false]; 
                                            else newChoice = [false,true,false]; 
                                            setSelectList([...selectList.slice(0, 5*index+2),...newChoice,...selectList.slice(5*index+5)]);
                                        }}>{selectList[5*index + 3]?"Bỏ chọn":"Chọn"}</button>
                                    </div>
                                    <div className='bancong'>
                                        <p>View Biển</p>
                                        <p></p>
                                        <p>+500.000 VNĐ</p>
                                        <button className="btn btn-outline-success" id='chon' style={selectList[5*index + 4]?{background: 'black'}:{}} onClick={() => {
                                            let newChoice = [];
                                            if (selectList[5*index + 4]) newChoice = [false,false,false]; 
                                            else newChoice = [false,false,true]; 
                                            setSelectList([...selectList.slice(0, 5*index+2),...newChoice,...selectList.slice(5*index+5)]);
                                        }}>{selectList[5*index + 4]?"Bỏ chọn":"Chọn"}</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className='dondatphong' style={{marginTop: '50px'}}>
                        <div className='dondatphong_first'>
                            <h2>ĐƠN ĐẶT PHÒNG</h2>
                            <p>19/10/2022 - 21/10/2022</p>
                            <p>1 người</p>
                            <div className='plc_row row'>
                                <div className='col-6'> <p><b>Check-in</b></p> </div>
                                <div className='col-6'> <p><b>Check-out</b></p> </div>
                            </div>
                            <div className='plc_row row'>
                                <div className='col-6'> <p>Từ 12:00 trưa</p> </div>
                                <div className='col-6'> <p>Trước 12:00 trưa</p> </div>
                            </div>
                        </div>
                        {selections.map((selection, index) => 
                            <div className='dondatphong_first'>
                                <div className='plc_row row' style={{marginBottom: 10, fontSize: '130%'}}>
                                    <div className='col-6'> <b>Phòng {index + 1} </b>- 3 ngày </div>
                                    <div className='col-6' style={{textAlign: 'right'}}> <FaTrashAlt onClick={() => {
                                        setSelections(selections.filter((e, i) => i !== index));
                                        setTotal(total - selection.price - (selection.bancong?100000:0) - (selection.view === 1?500000:selection.view === 2?300000:0))
                                    }}/> </div>
                                </div>
                                <div className='plc_row row'>
                                    <div className='col-7' style={{fontSize: '120%', fontFamily: 'Playfair'}}><b>{selection.type}:</b></div>
                                    <div className='col-5' style={{textAlign: 'right'}}> <b>{selection.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</b> VND</div>
                                </div>
                                <div className='plc_row row'>
                                    <div className='col-6'>{selection.bancong?"Có ban công:":"Không ban công:"}</div>
                                    <div className='col-6' style={{textAlign: 'right'}}>{selection.bancong?"+ 100.000":"+ 0"} VND</div>
                                </div>
                                <div className='plc_row row'>
                                    <div className='col-6'>View {selection.view === 3?"Thành phố:":selection.view === 2?"Hồ bơi:":"Biển:"}</div>
                                    <div className='col-6' style={{textAlign: 'right'}}>{selection.view === 3?"+ 0":selection.view === 2?"+ 300.000":"+ 500.000"} VND</div>
                                </div>
                            </div>
                        )}
                        <div className='dondatphong_total'>
                            <div className='total_row' >
                                <p><b style={{fontSize: '120%', fontFamily: 'Playfair'}}>TỔNG CỘNG</b></p> 
                                <p><b>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</b> VNĐ</p>
                            </div>
                            <Link style={{textDecoration: 'none'}} to="/khachhang/bookinginfo">
                                <form className="d-flex" role="search">
                                    <button className="btn btn-outline-success booking_submit" type="submit">Xác nhận</button>
                                </form>
                            </Link>
                        </div>



                    </div>
                </div>


              </div>
        </div>
    );
}

export default EmptyRoom;
