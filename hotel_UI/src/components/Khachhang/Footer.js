import logo from '../../Image/Customer/logo.png';
import fb from '../../Image/Customer/fb.png';
import ig from '../../Image/Customer/ig.png';

function Footer(){
    return(
        <div className="footer">
        <div className="row m-0">
            <div className="col-3" id="footer_1col">
                <br/>
                <div className="row m-0">
                    <div className="col-6 p-0">
                        <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top float-md-end"/>
                    </div>
                    <div className="col-6 p-0">
                            HOTEL <br/> The Fiction
                    </div>
                </div>
            </div>
            <div className="col-3" id="footer_2col">
                <br/>
                <b>Địa chỉ</b><br/>
                <br/>xxx Ngô Quyền, Phường ABC, Quận XYZ, Tp. Hải Phòng, Việt Nam
            </div>
            <div className="col-3" id="footer_3col">
                <br/>
                <b>Liên hệ</b><br/>
                <br/>+8488 215 xxx
                <br/>+8488 216 xxx
                <br/>thefiction_hotel@gmail.com
            </div>
            <div className="col-3" id="footer_4col">
                <br/>
                <b>Follow us</b><br/><br/>
                <a className="navbar-brand" href="#" id="fblogo">
                    <img src={fb} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" style={{marginLeft: '10px'}}/>
                    /thefiction.ht
                </a><br/><br/>
                <a className="navbar-brand" href="#" id="iglogo">
                    <img src={ig} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" style={{marginLeft: '10px'}}/>
                    thefiction.ht
                </a>
            </div>
        </div>
    </div>
    )
} 

export default Footer;