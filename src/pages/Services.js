import './Services.css';
import Gallery from '../components/Gallery';
import nhahang1 from '../img/nhahang1.png';
import nhahang2 from '../img/nhahang2.png';
import hoboi1 from '../img/hoboi1.png';
import hoboi2 from '../img/hoboi2.png';
import bar1 from '../img/bar1.png';
import bar2 from '../img/bar2.png';
import spa1 from '../img/spa1.png';
import spa2 from '../img/spa2.png';

const Services =() =>{
    return(
        <div className='dichvu'>
            <div className='nhahang'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={nhahang1} className="img1"></img>
                        </div>
                    <div className='col-7'>
                        <div className='description'>
                            <h1>NHÀ HÀNG</h1>
                            <p>Đa dạng các loại ẩm thực đến từ các vùng miền khác nhau. 
                            Khách sạn còn phục vụ món chay cho khách có nhu cầu.</p>
                            <p>Nguyên liệu được chọn lọc kỹ càng đảm bảo các tiêu
                            chuẩn vệ sinh an toàn thực phẩm.</p>
                        </div>
                    </div>
                </div>
                <img src={nhahang2} className="img2"></img>
            </div>
            <div className='hoboi'>
                <div className='row'>
                    <div className='col-8'>
                        <h1>HỒ BƠI MIỄN PHÍ</h1>
                        <div className='des_img'>
                            <img src={hoboi1}></img>
                            <div>
                                <p>Hồ bơi mở cửa từ 6:00 - 22:00 và miễn phí cho khách đặt phòng
                                tại khách sạn. Luôn có bảo hộ đảm bảo an toàn. </p>
                                <p>Hồ bơi được xây tại vị trí có view đẹp, thoáng mát, có thể vừa bơi vừa ngắm cảnh. 
                                Còn có sẵn các ghế tắm nắng cho khách có nhu cầu. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={hoboi2}></img>
                    </div>
                </div>
            </div>
            <div className='bar'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={bar1} className="img1"></img>
                        </div>
                    <div className='col-7'>
                        <div className='description'>
                            <h1>BAR</h1>
                            <p>Đa dạng các nước uống được phục vụ tận tay bởi các bartender chuyên nghiệp.</p>
                            <p>Cung cấp nhiều loại hình trò chơi thú vị, thích hợp chơi theo nhóm.</p>
                            <p>Hoạt động từ 18:00 - 24:00 hàng ngày</p>
                        </div>
                    </div>
                </div>
                <img src={bar2} className="img2"></img>
            </div>
            <div className='spa'>
                <div className='row'>
                    <div className='col-8'>
                        <h1>SPA</h1>
                        <div className='des_img'>
                            <img src={spa1}></img>
                            <div>
                                <p>Không gian spa thư giãn với những vật trang trí nội thất hài hòa, đẹp mắt. 
                                Nghe được những âm thanh thiên nhiên, nhạc trị liệu… khiến tinh thần thoải mái.</p>
                                <p>Ngửi thấy mùi hương thoang thoảng dễ chịu từ hoa cỏ tự nhiên, tinh dầu… 
                                Phục vụ cho khách đến spa loại trà đặc biệt riêng.</p>
                                <p>Cảm nhận được cảm giác thư giãn hoàn toàn khi nhân viên 
                                spa thực hiện các liệu pháp massage cơ thể.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <img src={spa2}></img>
                    </div>
                </div>
            </div>
            <Gallery></Gallery>
        </div>
    );
}

export default Services;