import heart from "../../Image/Customer/heart.png";
import cutlery from "../../Image/Customer/cutlery.png";
import wifi from "../../Image/Customer/wifi.png";
import time from "../../Image/Customer/time.png";
import people from "../../Image/Customer/people.png";
import { Link } from "react-router-dom";
function CardDP(props){
    return(
        <div className="card" style={{width: "20rem"}}>
            <img src={require('../../Image/Customer/' + props.img + '.png')} className="card-img-top" alt="..."/>
            <div className="card-body">
                    <p className="card-text">
                    <b className="d-flex justify-content-end">{props.price}</b>
                    <br/><b style={{fontSize:'20px'}}>{props.roomName}</b>
                    <br/>{props.room}
                    <div className="p-0 d-flex justify-content-center" id="icon_loaiphong">
                        <img src={heart} alt="" className="icon"/>
                        <img src={cutlery} alt="" className="icon"/>
                        <img src={wifi} alt="" className="icon"/>
                        <img src={time} alt="" className="icon"/>
                        <img src={people} alt="" className="icon"/>
                    </div>
                    <br/>
                    <Link style={{textDecoration: 'none'}} to='/khachhang/booking'>
                        <form className="d-flex justify-content-center" role="search">
                            <button className="btn btn-outline-success" type="submit" id="xemchitiet1">Xem chi tiết</button>
                        </form>
                    </Link>
                    </p>
            </div>
        </div>
    )
}

export default CardDP;