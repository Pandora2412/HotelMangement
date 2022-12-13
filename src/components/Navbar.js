import logo from '../img/logo.png';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
      <nav className='navbar navbar-expand-lg'>
        <div className="container-fluid navbarContainer">
          <img src={logo} alt="Logo" width="43" height="43" className="d-inline-block align-text-top" style={{marginLeft: '10px'}}/>
          <Link to="/home" className="navbar-brand" id="fictionlogo">
            HOTEL <br/> The Fiction
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link nav_gioithieu">Giới thiệu</Link>
              </li>
              <li className="nav-item">
                <Link to="/booking" className="nav-link nav_datphong">Đặt phòng</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link nav_dichvu">Dịch vụ</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link nav_lienhe">Liên hệ </Link>
              </li>
            </ul>
            <Link className="nav-link" to="/search">
              <form className="d-flex" role="search">
                <button className="btn btn-outline-success" type="submit" id="tracuu">Tra cứu</button>
              </form>
            </Link>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;