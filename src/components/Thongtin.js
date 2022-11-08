import { useContext } from 'react';
import { UserContext } from '../App.js';

const Thongtin = () => {

    const LetanDB = {
        letans: require('../model/Letan.json'),
        setLetans: function (data) {
            this.letans = data;
        }
    }

    const {username} = useContext(UserContext);
    const id = LetanDB.letans.findIndex(e => e.ID === username);

    return (
        <div className="Thongtin">
            <div className="Avatar">
                <img src={require('../Image/Avatar.png')} alt="Avatar"/>
                <h2>{LetanDB.letans[id].name}</h2>
                <h3>Lễ tân</h3>
                <h4>Bắt đầu làm việc từ {LetanDB.letans[id].startday}</h4>
            </div>
            <div className="text">
                <h3>Thông tin cá nhân:</h3>
                <ul>
                    <li>Ngày sinh: {LetanDB.letans[id].birthday}</li>
                    <li>Giới tính: {LetanDB.letans[id].sẽ}</li>
                    <li>Số CCCD: {LetanDB.letans[id].ID}</li>
                    <li>Bảo hiểm xã hội: {LetanDB.letans[id].BHXH}</li>
                </ul>
                <h3>Thông tin liên lạc:</h3>
                <ul>
                    <li>Email: {LetanDB.letans[id].email}</li>
                    <li>Số điện thoại: {LetanDB.letans[id].phone}</li>
                    <li>Địa chỉ: {LetanDB.letans[id].address}</li>
                </ul>  
                <h3>Thông tin chuyển khoản:</h3>
                <ul>
                    <li>Ngân hàng: {LetanDB.letans[id].bank}</li>
                    <li>Chi nhánh: {LetanDB.letans[id].bankadd}</li>
                    <li>Số tài khoản: {LetanDB.letans[id].banknum}</li>
                </ul>  
                <h3>Thông tin công việc:</h3>
                <ul>
                    <li>Ngày làm việc: {LetanDB.letans[id].workday}</li>
                    <li>Thời gian: {LetanDB.letans[id].worktime}</li>
                    <li>Số ngày nghỉ phép/năm: {LetanDB.letans[id].dayoff}</li>
                    <li>Lương/tháng: {LetanDB.letans[id].salary} VND</li>
                </ul>      
            </div>
        </div>
    )
}

export default Thongtin;