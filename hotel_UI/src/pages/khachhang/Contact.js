import lienhe from '../../Image/Customer/lienhe.png';
import '../../css/customer/Contact.css';

const Contact =() =>{
    return(
        <div className="contact">
                <img src={lienhe} alt="lienhe"></img>
                <div className='lienhe_text'>
                    <h1>Liên hệ chúng tôi</h1>
                    <p>Chúng tôi sẽ sẵn lòng trả lời tất cả các 
                        câu hỏi của bạn và giúp bạn chọn lựa phù hợp.</p>
                </div>
                <div className='thongtinlienhe'>
                    <h2>Số điện thoại</h2>
                    <p>+8488 215 xxx</p>
                    <h2>Email</h2>
                    <p>abcxyz_hotel@gmail.com</p>
                    <h2>Địa chỉ</h2>
                    <p>xxx Ngô Quyền, Phường ABC, Quận XYZ, Tp. Hải Phòng, Việt Nam</p>
                </div>
                <div className='vitri'>
                    <div className="container-fluid"> 
                        <div className="row"> 
                            <div className="col-3"> <h1 className="float-end">Vị trí của chúng tôi</h1> </div>
                            <div className="col-6 line"> </div>
                        </div>
                    </div>
                    <div class=" container-fluid map">
                        <iframe title="1" class="gmap_iframe" width="100%" height="100%" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Mercure Hai Phong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
        </div>

    );
}

export default Contact;