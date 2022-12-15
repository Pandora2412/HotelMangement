import logo from '../../Image/Customer/logo.png';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
      <nav className='navbar navbar-expand-lg'>
        <div className="container-fluid navbarContainer">
          <img src={logo} alt="Logo" width="43" height="43" className="d-inline-block align-text-top" style={{marginLeft: '10px'}}/>
          <Link to="/khachhang/" className="navbar-brand" id="fictionlogo">
            HOTEL <br/> The Fiction
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/khachhang/" className="nav-link nav_gioithieu">Giới thiệu</Link>
              </li>
              <li className="nav-item">
                <Link to="/khachhang/booking" className="nav-link nav_datphong">Đặt phòng</Link>
              </li>
              <li className="nav-item">
                <Link to="/khachhang/services" className="nav-link nav_dichvu">Dịch vụ</Link>
              </li>
              <li className="nav-item">
                <Link to="/khachhang/contact" className="nav-link nav_lienhe">Liên hệ </Link>
              </li>
            </ul>
            <Link style={{textDecoration: 'none'}} to="/khachhang/search">
              <form className="d-flex" role="search">
                <button type="submit" id="tracuu">Tra cứu</button>
              </form>
            </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;