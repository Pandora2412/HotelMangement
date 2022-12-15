import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Navigate, useLocation } from 'react-router-dom';

const Thongtin = () => {
    
    const [letan, setLetan] = useState({});
    const axiosPrivate = useAxiosPrivate();
    const location = useLocation();

    useEffect(() => {
        
        let isMounted = true;
        const controller = new AbortController();

        const getLetan = async () => {
            try {
                const res = await axiosPrivate.get(`/employee/${localStorage.getItem("username")}`, {
                    signal: controller.signal
                });
                isMounted && setLetan(res.data);
            } catch (err) {
                console.error(err);
                <Navigate to="/" state={{ from: location }} replace />
            }
        }

        getLetan();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, []);

    return (
        <div className="Thongtin">
            <div className="Avatar">
                <img src={require('../../Image/Avatar.png')} alt="Avatar"/>
                <h2>{letan.name?letan.name:'Đang cập nhật...'}</h2>
                <h3>Lễ tân</h3>
                <h4>Bắt đầu làm việc từ {letan.startday?letan.startday:'Đang cập nhật...'}</h4>
            </div>
            <div className="text">
                <h3>Thông tin cá nhân:</h3>
                <ul>
                    <li>Ngày sinh: {letan.birthday?letan.birthday:'Đang cập nhật...'}</li>
                    <li>Giới tính: {letan.sex?letan.sex:'Đang cập nhật...'}</li>
                    <li>Số CCCD: {letan.id}</li>
                    <li>Bảo hiểm xã hội: {letan.BHXH?letan.BHXH:'Đang cập nhật...'}</li>
                </ul>
                <h3>Thông tin liên lạc:</h3>
                <ul>
                    <li>Email: {letan.email?letan.email:'Đang cập nhật...'}</li>
                    <li>Số điện thoại: {letan.phone?letan.phone:'Đang cập nhật...'}</li>
                    <li>Địa chỉ: {letan.address?letan.address:'Đang cập nhật...'}</li>
                </ul>  
                <h3>Thông tin chuyển khoản:</h3>
                <ul>
                    <li>Ngân hàng: {letan.bank?letan.bank:'Đang cập nhật...'}</li>
                    <li>Chi nhánh: {letan.bankadd?letan.bankadd:'Đang cập nhật...'}</li>
                    <li>Số tài khoản: {letan.banknum?letan.banknum:'Đang cập nhật...'}</li>
                </ul>  
                <h3>Thông tin công việc:</h3>
                <ul>
                    <li>Ngày làm việc: {letan.workday?letan.workday:'Đang cập nhật...'}</li>
                    <li>Thời gian: {letan.worktime?letan.worktime:'Đang cập nhật...'}</li>
                    <li>Số ngày nghỉ phép/năm: {letan.dayoff?letan.dayoff:'Đang cập nhật...'}</li>
                    <li>Lương/tháng: {letan.salary?letan.salary:'Đang cập nhật...'} VND</li>
                </ul>      
            </div>
        </div>
    )
}

export default Thongtin;