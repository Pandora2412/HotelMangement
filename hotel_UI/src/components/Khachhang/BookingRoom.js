import trash from "../../Image/Customer/trash.png";

function BookingRoom(props){
    return(
        <div className="bookingRoom">
            <div className='roomRow'>
                <h4><b>Phòng {props.id}</b> - {props.dates}</h4>
                <img src={trash} alt="trash"></img>
            </div>
            <div className='roomRow'>
                <h5><b>{props.type}:</b></h5>
                <p><b>{props.price}</b> VNĐ</p>
            </div>
            <div className='roomRow'>
                <p>{props.bancong}</p>
                <p>{props.bancongPrice} VNĐ</p>
            </div>
            <div className='roomRow'>
                <p>{props.view}</p>
                <p>{props.viewPrice} VNĐ</p>
            </div>
        </div>
    )
}

export default BookingRoom;

